import SectionTitle from "../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import useMenu from "../../hooks/useMenu";
import Loading from "../Loading";

const CheckIt = () => {
      const [menu] = useMenu();
      const popularMenu = menu.filter(m => m.category === "popular");

      return (
            <section className="w-11/12 max-w-7xl mx-auto py-10">
                  <SectionTitle subHeading={"---Check It Out---"} heading={"from our menu"} />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-6">
                        {
                              popularMenu.map(p => <div key={p._id}
                                    className="flex items-center gap-4">
                                    <img src={p.image} alt="" className="w-28 rounded-tr-full rounded-br-full rounded-bl-full object-cover border-2 border-orange-500" />
                                    <div>
                                          <h3 className="text-xl font-semibold">{p.name}  ------------</h3>
                                          <p>{p.recipe}</p>
                                    </div>
                                    <span className="text-orange-500 font-medium">${p.price}</span>
                              </div>)
                        }
                  </div>
                  <div className="text-center py-4">
                        <Link to='/our-menu' className="py-2.5 px-4 rounded-lg border-b-2 border-b-orange-600 hover:bg-orange-600  text-sm text-slate-800 hover:border-transparent hover:text-slate-50 font-bold transition-all uppercase">View full menu</Link>
                  </div>
            </section>
      )
}

export default CheckIt