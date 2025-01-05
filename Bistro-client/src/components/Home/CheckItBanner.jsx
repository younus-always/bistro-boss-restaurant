import checkItCover from "../../assets/home/featured.jpg";
import SectionTitle from "../SectionTitle/SectionTitle";

const CheckItBanner = () => {
      return (
            <section style={{ backgroundImage: `url(${checkItCover})` }} className="bg-cover bg-fixed">
                  <div className="bg-black/70 text-slate-50 pb-20">
                        <div className="w-11/12 max-w-7xl mx-auto py-10">
                              <SectionTitle subHeading={"Check It Out"} heading={"from our menu"} />
                        </div>

                        <div className="w-11/12 max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                              <div>
                                    <img src={checkItCover} alt="" className="max-w-sm mx-auto" />
                              </div>
                              <div className="max-w-md mx-auto text-center lg:text-start">
                                    <h3 className="text-lg font-semibold">March 20, 2023</h3>
                                    <h3 className="text-lg font-semibold">where can i get some?</h3>
                                    <p className="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                                    <button className="py-2.5 px-4 rounded-lg border-b-2 border-b-slate-50 hover:bg-slate-50  text-sm text-slate-50 hover:border-transparent hover:text-slate-900 font-bold transition-all uppercase mt-3">read more</button>
                              </div>
                        </div>

                  </div>
            </section>
      )
}

export default CheckItBanner