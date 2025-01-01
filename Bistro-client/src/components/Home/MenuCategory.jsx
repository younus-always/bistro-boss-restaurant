import SectionTitle from "../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import useMenu from "../../hooks/useMenu";

const MenuCategory = () => {
      const [menu] = useMenu();
      const popularMenu = menu.filter(m => m.category === "popular");

      return (
            <section className="w-11/12 max-w-7xl mx-auto pt-4 pb-10">
                  <SectionTitle subHeading={"---From 11:00am to 10:00pm---"} heading={"order online"} />
                  <div className="py-5">
                        <Swiper
                              slidesPerView={3}
                              spaceBetween={30}
                              freeMode={true}
                              pagination={{
                                    clickable: true,
                              }}
                              modules={[FreeMode, Pagination]}
                              className="mySwiper "
                        >
                              {
                                    popularMenu.map(p => <SwiperSlide key={p._id} className="relative">
                                          <img src={p.image} alt="" className="w-72" />
                                          <span className="absolute bottom-4 text-center text-xl font-semibold text-slate-50 w-full">{p.category}</span>
                                    </SwiperSlide>)
                              }

                        </Swiper>
                  </div>
            </section >
      )
}

export default MenuCategory