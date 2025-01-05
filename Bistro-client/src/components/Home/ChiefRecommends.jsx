import SectionTitle from "../SectionTitle/SectionTitle";
import chief from "../../assets/home/featured.jpg"

const ChiefRecommends = () => {
      return (
            <section className="w-11/12 max-w-7xl mx-auto py-10">
                  <SectionTitle subHeading="Should Try" heading="chief recommends" />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
                        <div className="card glass shadow-md max-w-sm mx-auto">
                              <figure>
                                    <img
                                          src={chief}
                                          alt="" />
                              </figure>
                              <div className="card-body bg-base-200 items-center justify-center">
                                    <h2 className="card-title">Caeser Salad</h2>
                                    <p className="text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                                    <div className="card-actions mt-2">
                                          <button className="py-3 px-4 rounded-lg border-b-2 border-b-orange-400 text-orange-400 uppercase font-semibold bg-gray-200 hover:bg-black hover:border-b-transparent transition-all">Add to cart</button>
                                    </div>
                              </div>
                        </div>
                        <div className="card glass shadow-md max-w-sm mx-auto">
                              <figure>
                                    <img
                                          src={chief}
                                          alt="" />
                              </figure>
                              <div className="card-body bg-base-200 items-center justify-center">
                                    <h2 className="card-title">Life hack</h2>
                                    <p className="text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                                    <div className="card-actions mt-2">
                                          <button className="py-3 px-4 rounded-lg border-b-2 border-b-orange-400 text-orange-400 uppercase font-semibold bg-gray-200 hover:bg-black hover:border-b-transparent transition-all">Add to cart</button>
                                    </div>
                              </div>
                        </div>
                        <div className="card glass shadow-md max-w-sm mx-auto">
                              <figure>
                                    <img
                                          src={chief}
                                          alt="" />
                              </figure>
                              <div className="card-body bg-base-200 items-center justify-center">
                                    <h2 className="card-title">Life hack</h2>
                                    <p className="text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                                    <div className="card-actions mt-2">
                                          <button className="py-3 px-4 rounded-lg border-b-2 border-b-orange-400 text-orange-400 uppercase font-semibold bg-gray-200 hover:bg-black hover:border-b-transparent transition-all">Add to cart</button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default ChiefRecommends