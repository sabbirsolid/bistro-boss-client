import { NavLink, Outlet } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import useCart from "../hooks/useCart";
const Dashboard = () => {
  const [cart] = useCart();
  const isAdmin = true;
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        {isAdmin ? (
          <>
            <ul className="menu p-4">
              <li>
                <NavLink
                  className={"flex justify-start items-center"}
                  to={"/dashboard/adminHome"}
                >
                  <IoMdCart /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={"flex justify-start items-center"}
                  to={"/dashboard/addItems"}
                >
                  <IoMdCart /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={"flex justify-start items-center"}
                  to={"/dashboard/manageItems"}
                >
                  <IoMdCart /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={"flex justify-start items-center"}
                  to={"/dashboard/manageBookings"}
                >
                  <IoMdCart />
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={"flex justify-start items-center"}
                  to={"/dashboard/allUsers"}
                >
                  <IoMdCart /> All Users
                </NavLink>
              </li>
              
            </ul>
          </>
        ) : (
          <>
            <ul className="menu p-4">
              <li>
                <NavLink
                  className={"flex justify-start items-center"}
                  to={"/dashboard/userHome"}
                >
                  <IoMdCart /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={"flex justify-start items-center"}
                  to={"/dashboard/cart"}
                >
                  <IoMdCart /> My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={"flex justify-start items-center"}
                  to={"/dashboard/reservation"}
                >
                  <IoMdCart /> My Reservation
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={"flex justify-start items-center"}
                  to={"/dashboard/payments"}
                >
                  <IoMdCart />
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={"flex justify-start items-center"}
                  to={"/dashboard/addReview"}
                >
                  <IoMdCart /> Add Review
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={"flex justify-start items-center"}
                  to={"/dashboard/bookings"}
                >
                  <IoMdCart /> My Bookings
                </NavLink>
              </li>
            </ul>
          </>
        )}
        <div className="divider"></div>
        {/* shared items */}
        <ul className="menu">
          <li>
            <NavLink className={"flex justify-start items-center"} to={"/"}>
              <IoMdCart /> Home
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
