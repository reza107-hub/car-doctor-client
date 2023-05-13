import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProbider/AuthProvider";
import Table from "./Table";
import DynamicBanner from "../Shared/DynamicBanner";

const Inventory = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/booking")
      .then((res) => res.json())
      .then((d) => {
        const loggedUserData = d.filter((list) => list.email == user.email);
        setData(loggedUserData);
        console.log(d);
      });
  }, [user.email]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/booking/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
        const remaining = data.filter((dt) => dt._id != id);
        setData(remaining);
      });
  };

  const handleConfirm = (id) => {
    fetch(`http://localhost:5000/booking/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
        if (d.modifiedCount > 0) {
          // update state
          const remaining = data.filter((booking) => booking._id !== id);
          const updated = data.find((booking) => booking._id === id);
          updated.status = "confirm";
          const newBookings = [updated, ...remaining];
          setData(newBookings);
        }
      });
  };

  return (
    <div className="mt-10">
      <DynamicBanner>Inventory</DynamicBanner>
      {data.map((dt) => (
        <Table
          key={dt?._id}
          dt={dt}
          handleDelete={handleDelete}
          handleConfirm={handleConfirm}
        ></Table>
      ))}
    </div>
  );
};

export default Inventory;
