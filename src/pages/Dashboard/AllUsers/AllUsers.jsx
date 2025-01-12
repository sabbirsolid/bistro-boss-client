import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUser, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users", {
        headers: {authorization: `Bearer ${localStorage.getItem('access-token')}`}
      });
      return res.data;
    },
  });


  const handleMakeAdmin = (id) =>{
    Swal.fire({
      title: "Do you want to admin?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Make",
      denyButtonText: `Don't Make`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${id}`).then((result) => {
          if (result.data.modifiedCount > 0) {
            Swal.fire("Saved!", "", "success");
            refetch();
          }
        });
      }
    });
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Do you want to delete?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't Delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((result) => {
          if (result.data.deletedCount > 0) {
            Swal.fire("Saved!", "", "success");
            refetch();
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-4xl">All users </h1>
        <h1 className="text-4xl">Total Users: {users.length} </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>
                  <h1>{user.name}</h1>
                </td>
                <td>
                  <div className="font-bold">{user.email}</div>
                </td>
                {user.role === "admin" ? (
                  "Admin"
                ) : (
                  <button
                    onClick={() => handleMakeAdmin(user._id)}
                    className="btn-sm"
                  >
                    <FaUsers className="text-2xl"></FaUsers>
                  </button>
                )}
                <th>
                  <button
                    onClick={() => handleDelete(user._id)}
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

export default AllUsers;
