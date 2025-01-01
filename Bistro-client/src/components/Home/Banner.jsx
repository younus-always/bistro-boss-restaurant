import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from "../../assets/home/01.jpg";
import banner2 from "../../assets/home/02.jpg";
import banner3 from "../../assets/home/03.png";
import banner4 from "../../assets/home/04.jpg";
import banner5 from "../../assets/home/05.png";
import banner6 from "../../assets/home/06.png";

const Banner = () => {
      return (
            <>
                  <Carousel autoPlay>
                        <div className="h-[500px] md:h-[580px] lg:h-[700px]">
                              <img src={banner1} alt="" className="h-full object-cover"  />
                        </div>
                        <div className="h-[500px] md:h-[580px] lg:h-[700px]">
                              <img src={banner2} alt="" className="h-full object-cover" />
                        </div>
                        <div className="h-[500px] md:h-[580px] lg:h-[700px]">
                              <img src={banner3} alt="" className="h-full object-cover" />
                        </div>
                        <div className="h-[500px] md:h-[580px] lg:h-[700px]">
                              <img src={banner4} alt="" className="h-full object-cover" />
                        </div>
                        <div className="h-[500px] md:h-[580px] lg:h-[700px]">
                              <img src={banner5} alt="" className="h-full object-cover" />
                        </div>
                        <div className="h-[500px] md:h-[580px] lg:h-[700px]">
                              <img src={banner6} alt="" className="h-full object-cover" />
                        </div>
                  </Carousel>
            </>
      )
}

export default Banner