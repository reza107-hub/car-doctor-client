import { useLoaderData } from "react-router-dom";
import DynamicBanner from "../Shared/DynamicBanner";
import OrderConfirm from "./OrderConfirm";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";

const CheckOut = () => {
  const data = useLoaderData();
  return (
    <div>
      <DynamicBanner>CheckOut</DynamicBanner>
      <div className="mt-32">
        <PrivateRoute>
          <OrderConfirm data={data} />
        </PrivateRoute>
      </div>
    </div>
  );
};

export default CheckOut;
