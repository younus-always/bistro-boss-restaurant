const MenuCard = ({ item }) => {
      const { name, image, recipe, price } = item || {};
      return (
            <>
                  <div className="card glass shadow-md max-w-sm mx-auto">
                        <figure className="relative">
                              <img
                                    src={image}
                                    alt="" className="w-full"/>
                                    <p className="absolute top-4 right-4 font-semibold py-1 px-3 bg-black text-slate-50 text-sm">${price}</p>
                        </figure>
                        <div className="card-body bg-base-200 items-center justify-center">
                              <h2 className="card-title">{name}</h2>
                              <p className="text-center">{recipe}</p>
                              <div className="card-actions mt-2">
                                    <button className="py-3 px-4 rounded-lg border-b-2 border-b-orange-400 text-orange-400 uppercase font-semibold bg-gray-200 hover:bg-black hover:border-b-transparent transition-all">Add to cart</button>
                              </div>
                        </div>
                  </div>
            </>
      )
};

export default MenuCard;