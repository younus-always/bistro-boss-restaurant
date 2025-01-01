import { Link, NavLink } from "react-router-dom";
import cart from "../assets/icon/cart.png";

const Navber = () => {

      const menuList =
            <>
                  <li><NavLink to='/' className="hover:text-yellow-500 text-slate-50">
                        Home
                  </NavLink></li>
                  <li><NavLink to="/contact" className="hover:text-yellow-500 text-slate-50">
                        Contact Us
                  </NavLink></li>
                  <li><NavLink to='/dashboard' className="hover:text-yellow-500 text-slate-50">
                        Dashboard
                  </NavLink></li>
                  <li><NavLink to="/menu" className="hover:text-yellow-500 text-slate-50">
                        Our Menu
                  </NavLink></li>
                  <li><NavLink to="/shop/salad" className="hover:text-yellow-500 text-slate-50">
                        Our Shop
                  </NavLink></li>
            </>

      const mobileMenu =
            <>
                  <li><NavLink to='/' className="hover:text-yellow-500 text-slate-50">
                        Home
                  </NavLink></li>
                  <li><NavLink to="/contact" className="hover:text-yellow-500 text-slate-50">
                        Contact Us
                  </NavLink></li>
                  <li><NavLink to='/dashboard' className="hover:text-yellow-500 text-slate-50">
                        Dashboard
                  </NavLink></li>
                  <li><NavLink to="/menu" className="hover:text-yellow-500 text-slate-50">
                        Our Menu
                  </NavLink></li>
                  <li><NavLink to="/shop/salad" className="hover:text-yellow-500 text-slate-50">
                        Our Shop
                  </NavLink></li>
            </>

      return (
            <>
                  <nav className="z-50 bg-slate-800/30 backdrop-blur-2xl absolute w-full left-0 top-0 py-2">
                        <div className="navbar w-11/12 max-w-7xl mx-auto p-0">
                              <div className="w-6/12 lg:w-4/12 flex items-center gap-2">
                                    <div className="dropdown">
                                          <div tabIndex={0} role="button" className="py-2 px-3 rounded-lg bg-yellow-400 lg:hidden">
                                                <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      className="h-5 w-5"
                                                      fill="none"
                                                      viewBox="0 0 24 24"
                                                      stroke="currentColor">
                                                      <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M4 6h16M4 12h8m-8 6h16" />
                                                </svg>
                                          </div>
                                          <ul
                                                tabIndex={0}
                                                className="menu-sm dropdown-content bg-slate-500 rounded-box z-[1] mt-3 w-52 p-2 shadow text-base font-bold text-slate-50">
                                                {mobileMenu}
                                          </ul>
                                    </div>
                                    <h2>
                                          <Link to="/" className="text-xl text-slate-50">Bistro Boss</Link>
                                    </h2>
                              </div>

                              <div className="w-6/12 lg:w-8/12 flex items-center justify-end gap-3">
                                    <div className="hidden lg:flex">
                                          <ul className="flex items-center gap-3
                                          text-base uppercase font-bold to-slate-50">
                                                {menuList}
                                          </ul>
                                    </div>
                                    <div className="flex items-center gap-2">
                                          <button className="relative">
                                                <img src={cart} alt="shopping-cart" className="w-12 " />
                                                <span className="absolute bg-red-500 text-slate-50 font-medium bottom-1 right-[3px] rounded-full w-4 h-4 flex items-center justify-center text-xs p-2">0</span>
                                          </button>
                                          <Link to='/signin' className="text-slate-50 font-semibold py-2 px-3 rounded bg-blue-700">Login</Link>
                                    </div>
                              </div>
                        </div>
                  </nav>
            </>
      )
}

export default Navber