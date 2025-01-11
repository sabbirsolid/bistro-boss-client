import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const FoodCard = ({item}) => {
   const {name,recipe,image,price,_id} = item;
   const {user} = useContext(AuthContext);
   const navigate = useNavigate();
   const location = useLocation();
   const axiosSecure = useAxiosSecure();
   const handleAddToCart = e =>{
    if(user){
      const cartItem = {
        menuId : _id,
        email: user.email,
        recipe,
        image
      }
      axiosSecure.post("/carts", cartItem)
      .then(res => {
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Saved to cart",
            showConfirmButton: false,
            timer: 1000
          });
        }
      })
    }
    else{
      Swal.fire({
        title: "Are you sure?",
        text: "You are not Logged In",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login?"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", {state: {from: location}});
        }
      });
    }
   }
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <p className="bg-slate-900  text-white px-2 top-3 text-center absolute right-3">{price}</p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 border-white text-black hover:bg-white hover:text-black transition duration-300">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;