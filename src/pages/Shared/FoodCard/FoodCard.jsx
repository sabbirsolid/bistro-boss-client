import React from "react";

const FoodCard = ({item}) => {
   const {name,recipe,image,price} = item;
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
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
