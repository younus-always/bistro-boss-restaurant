import { Link } from "react-router-dom";

const MenuItems = ({ items, category }) => {

      return (
            <section className="w-11/12 max-w-7xl mx-auto py-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-6">
                        {
                              items.slice(0, 6).map(d => <div key={d._id}
                                    className="flex items-center gap-4">
                                    <img src={d.image} alt="" className="w-28 rounded-tr-full rounded-br-full rounded-bl-full object-cover border-2 border-orange-500" />
                                    <div>
                                          <h3 className="text-xl font-semibold">{d.name}  ------------</h3>
                                          <p>{d.recipe}</p>
                                    </div>
                                    <span className="text-orange-500 font-medium">${d.price}</span>
                              </div>)
                        }
                  </div>
                  <div className="text-center py-4">
                        <Link to={category ? `/shop/${category}` : '/shop'} className="py-2.5 px-4 rounded-lg border-b-2 border-b-slate-900 hover:bg-orange-600  text-sm text-slate-800 hover:border-transparent hover:text-slate-50 font-bold transition-all uppercase">order your favourite food</Link>
                  </div>
            </section>
      )
}

export default MenuItems