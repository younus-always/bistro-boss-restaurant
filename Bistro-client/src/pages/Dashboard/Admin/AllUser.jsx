import { BiSolidTrash } from "react-icons/bi";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUserTie } from "react-icons/fa6";
import useTitle from "../../../hooks/useTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUsersCog } from "react-icons/fa";


const AllUser = () => {
      useTitle('All Users');
      const axiosSecure = useAxiosSecure();

      const { data: users = [] } = useQuery({
            queryKey: ['users'],
            queryFn: async () => {
                  const { data } = await axiosSecure.get('users');
                  return data;
            }
      })
      console.log(users)

      return (
            <section className="">
                  <SectionTitle heading={"manage all users"} subHeading={"How Many??"} />
                  <div className="lg:w-10/12 mx-auto bg-white shadow p-8">
                        <h3 className="text-xl font-semibold uppercase">total users: {users.length}</h3>
                        {/* cart table */}
                        <div className="overflow-x-auto pt-6">
                              <table className="table rounded-t-xl overflow-hidden">
                                    {/* head */}
                                    <thead className="bg-customGold text-slate-50 h-16">
                                          <tr>
                                                <th></th>
                                                <th>NAME</th>
                                                <th>EMAIL</th>
                                                <th>ROLL</th>
                                                <th>ACTION</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {
                                                users.map((user, idx) => <tr key={user._id} className="hover">
                                                      <th>{idx + 1}</th>
                                                      <td>{user.name}</td>
                                                      <td>{user.email}</td>
                                                      <td>
                                                            <button type="button" className="rounded p-2 bg-customGold hover:bg-customGold/90 group transition-all">
                                                                  <FaUsersCog size={20} className="text-slate-50" />
                                                            </button>
                                                      </td>
                                                      <td>
                                                            <button type="button"

                                                                  className="rounded p-2 bg-gray-200 hover:bg-red-600 group transition-all">
                                                                  <BiSolidTrash size={20} className="text-red-600 group-hover:text-slate-50 transition-all" /></button>
                                                      </td>
                                                </tr>)
                                          }
                                    </tbody>
                              </table>
                        </div>
                  </div>
            </section>
      )
}

export default AllUser