import { FaBook, FaCalendarDays, FaEnvelope, FaUsers, FaUtensils, FaWallet } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrList } from "react-icons/gr";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoMdCart } from "react-icons/io";
import { IoHome, IoHomeSharp } from "react-icons/io5";
import { MdFastfood } from "react-icons/md";
import { TbStarsFilled } from "react-icons/tb";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {

      const isAdmin = true;
      return (
            <>
                  <section className="flex w-full h-screen">
                        {/* navigation sidebar */}
                        <nav className="w-2/12 bg-customGold p-8">
                              {/* User  */}
                              <h2 className="uppercase text-2xl font-semibold">bistro boss <span className="text-lg">restaurant</span></h2>
                              <div className="mt-8 text-center">
                                    {/* user and admin menu list */}
                                    <ul className="uppercase text-slate-800 space-y-3 text-base">
                                          {
                                                isAdmin ?
                                                      <>
                                                            <li>
                                                                  <NavLink to='' end
                                                                        className={({ isActive }) => `${isActive ? 'text-slate-50' : ''} flex items-center gap-2 hover:text-slate-50 transition-colors`} ><IoHomeSharp size={22} /> admin home</NavLink>
                                                            </li>
                                                            <li>
                                                                  <NavLink to='addItem'
                                                                        className={({ isActive }) => `${isActive ? 'text-slate-50' : ''}  flex items-center gap-2 hover:text-slate-50 transition-colors`}> <FaUtensils size={22} />add item</NavLink>
                                                            </li>
                                                            <li>
                                                                  <NavLink to='manageItems'
                                                                        className={({ isActive }) => `${isActive ? 'text-slate-50' : ''}  flex items-center gap-2 hover:text-slate-50 transition-colors`}><GrList size={22} />manage items</NavLink>
                                                            </li>
                                                            <li>
                                                                  <NavLink to='manageBookings'
                                                                        className={({ isActive }) => `${isActive ? 'text-slate-50' : ''}  flex items-center gap-2 hover:text-slate-50 transition-colors`}><FaBook size={22} />manage bookings</NavLink>
                                                            </li>
                                                            <li>
                                                                  <NavLink to='allUsers'
                                                                        className={({ isActive }) => `${isActive ? 'text-slate-50' : ''}  flex items-center gap-2 hover:text-slate-50 transition-colors`}><FaUsers size={22} />all users</NavLink>
                                                            </li>
                                                      </>
                                                      : <>
                                                            <li>
                                                                  <NavLink to='' end
                                                                        className={({ isActive }) => `${isActive ? 'text-slate-50' : ''} flex items-center gap-2 hover:text-slate-50 transition-colors`} ><IoHomeSharp size={22} /> user home</NavLink>
                                                            </li>
                                                            <li>
                                                                  <NavLink to='reservation'
                                                                        className={({ isActive }) => `${isActive ? 'text-slate-50' : ''}  flex items-center gap-2 hover:text-slate-50 transition-colors`}> <FaCalendarDays size={22} />reservation</NavLink>
                                                            </li>
                                                            <li>
                                                                  <NavLink to='payment'
                                                                        className={({ isActive }) => `${isActive ? 'text-slate-50' : ''}  flex items-center gap-2 hover:text-slate-50 transition-colors`}><FaWallet size={22} />payment history</NavLink>
                                                            </li>
                                                            <li>
                                                                  <NavLink to='cart'
                                                                        className={({ isActive }) => `${isActive ? 'text-slate-50' : ''}  flex items-center gap-2 hover:text-slate-50 transition-colors`}><IoMdCart size={22} />my cart</NavLink>
                                                            </li>
                                                            <li>
                                                                  <NavLink to='review'
                                                                        className={({ isActive }) => `${isActive ? 'text-slate-50' : ''}  flex items-center gap-2 hover:text-slate-50 transition-colors`}><TbStarsFilled size={22} /> add review</NavLink>
                                                            </li>
                                                            <li>
                                                                  <NavLink to='booking'
                                                                        className={({ isActive }) => `${isActive ? 'text-slate-50' : ''}  flex items-center gap-2 hover:text-slate-50 transition-colors`}><MdFastfood size={22} />my booking</NavLink>
                                                            </li>
                                                      </>
                                          }
                                    </ul>
                                    <div className="divider"></div>
                                    {/* all user access menu list */}
                                    <ul className="uppercase text-slate-800 space-y-3 text-base">
                                          <li>
                                                <Link to='/'
                                                      className="flex items-center gap-2 hover:text-slate-50 transition-colors"><IoHome size={22} />home</Link>
                                          </li>
                                          <li>
                                                <Link to='/menu'
                                                      className="flex items-center gap-2 hover:text-slate-50 transition-colors"><GiHamburgerMenu size={22} />menu</Link>
                                          </li>
                                          <li>
                                                <Link to='/shop/salad'
                                                      className="flex items-center gap-2 hover:text-slate-50 transition-colors"><HiMiniShoppingBag size={22} />shop</Link>
                                          </li>
                                          <li>
                                                <Link to='/contact'
                                                      className="flex items-center gap-2 hover:text-slate-50 transition-colors"><FaEnvelope size={22} />contact</Link>
                                          </li>
                                    </ul>
                              </div>

                        </nav>
                        {/* dashboard content */}
                        <div className="w-10/12 px-10 bg-gray-100 overflow-y-auto">
                              <Outlet />
                        </div>
                  </section >
            </>
      )
}

export default Dashboard