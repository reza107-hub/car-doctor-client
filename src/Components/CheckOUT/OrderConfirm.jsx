import { useContext } from "react";
import { AuthContext } from "../AuthProbider/AuthProvider";

const OrderConfirm = ({ data }) => {
  const { user } = useContext(AuthContext);
  const { title, _id, price, img } = data;
  const onSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const phone = event.target.phone.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    const order = {
      name,
      phone,
      email,
      message,
      service: title,
      service_id: _id,
      price,
      img,
    };

    fetch("https://car-doctor-server-two-silk.vercel.app/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Order Confirmed");
        }
      });
    console.log(order);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="p-24 bg-[#F3F3F3] grid grid-cols-2 gap-4"
    >
      <input
        type="text"
        name="name"
        defaultValue={user?.displayName}
        placeholder="Name"
        className="border border-gray-300 p-2 rounded col-span-2"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Your Phone"
        className="border border-gray-300 p-2 rounded"
      />
      <input
        type="email"
        name="email"
        defaultValue={user?.email}
        placeholder="Your Email"
        className="border border-gray-300 p-2 rounded"
        disabled
      />
      <textarea
        name="message"
        rows="7"
        placeholder="Your Message"
        className="border border-gray-300 p-2 rounded col-span-2"
      ></textarea>

      <button type="submit" className="btn btn-primary w-full col-span-2">
        Order Confirm
      </button>
    </form>
  );
};

export default OrderConfirm;
