import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUtensils } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
const imgbb_key = import.meta.env.VITE_IMGBB_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${imgbb_key}`;
const UpdateItems = () => {
  const data = useLoaderData();
  const { name, category, price, recipe, _id } = data;
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axios.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.patch(`/menu/:${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        // reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Menu has been uploaded",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };
  return (
    <div>
      <SectionTitle
        heading="Update Items"
        subHeading="--Update Immediately--"
      ></SectionTitle>
      <div>
        <div>
          <div className="p-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text">Name</span>
                  </div>
                  <input
                    defaultValue={name}
                    {...register("name")}
                    type="text"
                    placeholder="Name"
                    className="input input-bordered w-full "
                  />
                </label>
              </div>
              <div className="flex gap-6">
                {/* category */}
                <div className="flex-1">
                  <div className="label">
                    <span className="label-text">Category</span>
                  </div>
                  <select
                    defaultValue={category}
                    {...register("category")}
                    className="select select-bordered w-full "
                  >
                    <option value="Salad">Salad</option>
                    <option value="Pizza">Pizza</option>
                    <option value="Soup">Soup</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Drinks">Drinks</option>
                  </select>
                </div>
                {/* price */}
                <div className="flex-1">
                  <div>
                    <label className="form-control w-full ">
                      <div className="label">
                        <span className="label-text">Price</span>
                      </div>
                      <input
                        defaultValue={price}
                        {...register("price")}
                        type="number"
                        placeholder="Price"
                        className="input input-bordered w-full "
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <label className="form-control">
                  <div className="label">
                    <span className="label-text">Recipe Details</span>
                  </div>
                  <textarea
                    defaultValue={recipe}
                    {...register("recipe")}
                    className="textarea textarea-bordered h-24"
                    placeholder="Recipe Details"
                  ></textarea>
                </label>
              </div>
              <div className="flex justify-evenly my-5 text-center">
                <input
                  {...register("image")}
                  type="file"
                  className="file-input file-input-bordered w-full max-w-xs"
                />
                <button className="btn btn-outline">
                  Update Item <FaUtensils className="ml-2"></FaUtensils>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateItems;
