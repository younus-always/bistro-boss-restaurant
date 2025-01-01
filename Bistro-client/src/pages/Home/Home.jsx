import Banner from "../../components/Home/Banner";
import Navber from "../../shared/Navber";
import Footer from "../../shared/Footer";
import ChiefRecommends from "../../components/Home/ChiefRecommends";
import MenuCategory from "../../components/Home/MenuCategory";
import chefService from "../../assets/home/chef-service.jpg";
import CheckIt from "../../components/Home/CheckIt";
import Testimonials from "../../components/Home/Testimonials";
import CheckItBanner from "../../components/Home/CheckItBanner";
import Tilt from "react-parallax-tilt";
import useTitle from "../../hooks/useTitle";
import Loading from "../../components/Loading";
import useLoding from "../../hooks/useLoding";

const Home = () => {
      useTitle('Home');
      const pageLoading = useLoding();
      // Loader
      if (pageLoading) return <Loading />

      return (
            <>
                  <Navber />
                  <Banner />
                  <MenuCategory />
                  {/*  Bistro Boss */}
                  <div className="w-11/12 max-w-7xl mx-auto relative flex items-center justify-center">
                        <img src={chefService} alt="" className="min-h-96 object-cover" />
                        <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor="#003049" glarePosition="top" glareBorderRadius="0px" className="w-10/12 mx-auto absolute">
                              <div className="bg-white/60 backdrop-blur-lg text-slate-900 py-10 px-4 md:py-14 md:px-6 text-center ">
                                    <h3 className="uppercase text-2xl md:text-3xl font-medium mb-3">bistro boss</h3>
                                    <p className="w-11/12 md:w-9/12 lg:w-8/12 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                              </div>
                        </Tilt>
                  </div>

                  <CheckIt />
                  {/* Call Us */}
                  <div className="max-w-7xl h-60 mx-auto bg-black text-slate-50 py-7 my-6 flex items-center justify-center">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">Call Us : +880194756347865</h3>
                  </div>

                  <ChiefRecommends />
                  <CheckItBanner />
                  <Testimonials />
                  <Footer />
            </>
      )
}

export default Home