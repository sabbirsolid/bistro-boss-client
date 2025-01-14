import { FaEdit, FaTrash } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const ManageItems = () => {
    const [menu] = useMenu();
    const handleDelete = () => {
        
    }
  return (
    <div>
      <SectionTitle
        heading="Manage All Items"
        subHeading="--Hurry Up--"
      ></SectionTitle>
      <div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((menu, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={menu.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <h1>{menu.name}</h1>
                </td>
                <td>
                  <h1>{menu.price}</h1>
                </td>
                <td>
                  <div className="font-bold">{menu.email}</div>
                </td>
                <th>
                  <button
                    onClick={() => handleDelete(menu._id)}
                    className="btn-sm "
                  >
                    <FaEdit></FaEdit>
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => handleDelete(menu._id)}
                    className="btn-sm text-red-600"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;