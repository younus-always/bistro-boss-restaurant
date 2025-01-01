import Banner from "../../components/Menu/Banner";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Footer from "../../shared/Footer";
import MenuItems from "../../shared/MenuItems";
import Navber from "../../shared/Navber";
import Cover from "../../shared/Cover";
import dessertImg from "../../assets/menu//dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../hooks/useMenu";
import useTitle from "../../hooks/useTitle";
import Loading from "../../components/Loading";

const OurMenu = () => {
      useTitle('Menu')
      const [menu, loading] = useMenu();
      // Filter by category
      const dessert = menu.filter(m => m.category === "dessert")
      const salad = menu.filter(m => m.category === "salad")
      const offered = menu.filter(m => m.category === "offered")
      const soup = menu.filter(m => m.category === "soup")
      const pizza = menu.filter(m => m.category === "pizza")
      const popular = menu.filter(m => m.category === "popular")
      const drinks = menu.filter(m => m.category === "drinks")

      if (loading) return <Loading />

      return (
            <>
                  <Navber />
                  <Banner />
                  <div className="w-11/12 max-w-7xl mx-auto pt-10">
                        <SectionTitle subHeading={"---Don't miss---"} heading={"today's offer"} />
                  </div>
                  <MenuItems items={offered} category={"salad"} />
                  <Cover image={dessertImg} title={'DESSERTS'} />
                  <MenuItems items={dessert} category={'dessert'} />
                  <Cover image={pizzaImg} title={'PIZZA'} />
                  <MenuItems items={pizza} category={'pizza'} />
                  <Cover image={saladImg} title={'SALADS'} />
                  <MenuItems items={salad} category={'salad'} />
                  <Cover image={soupImg} title={'SOUP'} />
                  <MenuItems items={soup} category={'soup'} />
                  <Footer />
            </>
      )
}

export default OurMenu