import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { CgPhone } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import useTitle from "../../../hooks/useTitle";

const Reservation = () => {
      useTitle("Reservation");
      
      return (
            <section>
                  <SectionTitle subHeading={"Visit Us"} heading={"our location"} />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-6">
                        <div className="border">
                              <div className="bg-yellow-600 flex items-center justify-center text-slate-50 py-4">
                                    <CgPhone size={22} />
                              </div>
                              <div className="h-36 flex flex-col items-center justify-center mx-4 mb-4 py-6 bg-gray-200">
                                    <h4 className="uppercase font-bold">Phone</h4>
                                    <p className="font-medium">+8801948534773</p>
                              </div>
                        </div>
                        <div className="border">
                              <div className="bg-yellow-600 flex items-center justify-center text-slate-50 py-4">
                                    <FaLocationDot size={22} />
                              </div>
                              <div className="h-36 flex flex-col items-center justify-center mx-4 mb-4 py-6 bg-gray-200">
                                    <h4 className="uppercase font-bold">address</h4>
                                    <p className="font-medium">+8801948534773</p>
                              </div>
                        </div>
                        <div className="border">
                              <div className="bg-yellow-600 flex items-center justify-center text-slate-50 py-4">
                                    <MdOutlineWatchLater size={22} />
                              </div>
                              <div className="h-36 flex flex-col items-center justify-center mx-4 mb-4 bg-gray-200">
                                    <h4 className="uppercase font-bold">working hours</h4>
                                    <p className="font-medium">Mon - Fri: 08:00-22:00</p>
                                    <p className="font-medium">Sat - Sun: 10:00-23:00</p>
                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default Reservation