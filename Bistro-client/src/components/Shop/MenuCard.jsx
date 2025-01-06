import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import {  useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAxionSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const MenuCard = ({ item }) => {
      const { _id, name, image, recipe, price } = item || {};
      const { user } = useAuth();
      const axiosSecure = useAxionSecure();
      const [, refetch] = useCart();
      const location = useLocation();
      const navigate = useNavigate();


      // Add to Cart 
      const handleAddToCard = () => {
            // send cart to the database
            if (user && user.email) {
                  const cartItem = {
                        menuId: _id,
                        email: user.email,
                        name,
                        image,
                        price
                  }
                  axiosSecure.post('/carts', cartItem)
                        .then(res => {
                              console.log(res.data)
                              if (res.data.insertedId) {
                                    toast.success(`Your ${name} food added to the cart.`, {
                                          position: "bottom-right"
                                    });
                                    // refetch cart to update the cart items count
                                    refetch();
                              };
                        });
            }
            else {
                  Swal.fire({
                        title: "You are not Logged In!",
                        text: "Please login to add to the cart",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, Login"
                  }).then((result) => {
                        if (result.isConfirmed) {
                              // send the user to the login page
                              navigate('/signin')
                        }
                  });
            }
      }

      return (
            <>
                  <div className="card glass shadow-md max-w-sm mx-auto">
                        <figure className="relative">
                              <img
                                    src={image}
                                    alt="" className="w-full" />
                              <p className="absolute top-4 right-4 font-semibold py-1 px-3 bg-black text-slate-50 text-sm">${price}</p>
                        </figure>
                        <div className="card-body bg-base-200 items-center justify-center">
                              <h2 className="card-title">{name}</h2>
                              <p className="text-center">{recipe}</p>
                              <div className="card-actions mt-2">
                                    <button onClick={handleAddToCard} className="py-3 px-4 rounded-lg border-b-2 border-b-orange-400 text-orange-400 uppercase font-semibold bg-gray-200 hover:bg-black hover:border-b-transparent transition-all">Add to cart</button>
                              </div>
                        </div>
                  </div>
            </>
      )
};

export default MenuCard;