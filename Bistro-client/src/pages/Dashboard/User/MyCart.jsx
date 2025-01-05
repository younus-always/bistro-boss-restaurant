import { BiSolidTrash } from "react-icons/bi";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";

const MyCart = () => {
      useTitle('My Cart');
      const axiosSecure = useAxiosSecure();
      const [cart, refetch] = useCart();
      const totalPrice = cart.reduce((prev, cart) => prev + cart.price, 0);

      // cart item delete function
      const handleDeleteCart = id => {
            console.log(id)
            Swal.fire({
                  title: "Are you sure?",
                  text: "You wan't to delete this item!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                  if (result.isConfirmed) {
                        axiosSecure.delete(`/carts/${id}`)
                              .then(res => {
                                    if (res.data.deletedCount) {
                                          refetch();
                                          Swal.fire({
                                                title: "Deleted!",
                                                text: "Your item has been deleted.",
                                                icon: "success"
                                          });
                                    }
                              })
                  }
            });

      }

      return (
            <section className="">
                  <SectionTitle heading={"wanna add more?"} subHeading={"My Cart"} />
                  <div className="lg:w-10/12 mx-auto bg-white shadow p-8">
                        <div className="flex items-center justify-between">
                              <h3 className="text-xl font-semibold uppercase">total orders: {cart.length}</h3>
                              <h3 className="text-xl font-semibold uppercase">total price: ${totalPrice}</h3>
                              <button type="button" className="uppercase font-bold py-2 px-3 rounded bg-customGold text-slate-50">pay</button>
                        </div>
                        {/* cart table */}
                        <div className="overflow-x-auto pt-6">
                              <table className="table rounded-t-xl overflow-hidden">
                                    {/* head */}
                                    <thead className="bg-customGold text-slate-50 h-16">
                                          <tr>
                                                <th></th>
                                                <th>ITEM IMAGE</th>
                                                <th>ITEM NAME</th>
                                                <th>PRICE</th>
                                                <th>ACTION</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {
                                                cart.map((c, idx) => <tr key={c._id} className="hover">
                                                      <th>{idx + 1}</th>
                                                      <td>
                                                            <img src={c.image} alt={c.name} className="w-16 object-cover ring-2 ring-base-300" /></td>
                                                      <td>{c.name}</td>
                                                      <td>${c.price}</td>
                                                      <td>
                                                            <button type="button"
                                                                  onClick={() => handleDeleteCart(c._id)}
                                                                  className="rounded p-2 bg-gray-200 hover:bg-red-600 group transition-all"><BiSolidTrash size={20} className="text-red-600 group-hover:text-slate-50 transition-all" /></button>
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

export default MyCart