import SectionTitle from "../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';

const Testimonials = () => {
      const [reviews, setReviews] = useState([]);
      useEffect(() => {
            axios.get('http://localhost:4000/reviews')
                  .then(res => setReviews(res.data))
      }, [])

      return (
            <section className="w-11/12 max-w-7xl mx-auto py-10">
                  <SectionTitle subHeading={"What Our Clients Says"} heading={"testimonials"} />
                  <Swiper
                        pagination={{
                              type: 'fraction',
                        }}
                        autoplay={{
                              delay: 2500,
                              disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                  >
                        {
                              reviews.map(review => <SwiperSlide key={review._id}>
                                    <div className="flex flex-col items-center justify-center text-center w-8/12 mx-auto my-10">
                                          <Rating
                                                style={{ maxWidth: 140 }}
                                                value={review.rating}
                                                readOnly
                                          />
                                          <p className="pt-5">{review.details}</p>
                                          <h3 className="text-2xl font-semibold text-yellow-500 mt-4">{review.name}</h3>
                                    </div>
                              </SwiperSlide>)
                        }
                  </Swiper>
            </section>
      )
}

export default Testimonials