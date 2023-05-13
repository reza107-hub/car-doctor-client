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
  }, []);

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
  return (
    <div className="mt-10">
      <DynamicBanner>Inventory</DynamicBanner>
      {data.map((dt) => (
        <Table key={dt?._id} dt={dt} handleDelete={handleDelete}></Table>
      ))}
    </div>
  );
};

export default Inventory;
