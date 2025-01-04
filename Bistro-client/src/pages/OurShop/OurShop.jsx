import { useState } from "react";
import Banner from "../../components/Shop/Banner";
import Footer from "../../shared/Footer";
import Navber from "../../shared/Navber";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useTitle from "../../hooks/useTitle";
import useMenu from "../../hooks/useMenu";
import Loading from "../../components/Loading";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";

const OurShop = () => {
      useTitle("Shop");
      const categories = ["salad", "pizza", "soups", "dessert", "drinks"];
      const { category } = useParams();
      const initialIndex = categories.indexOf(category);
      const [tabIndex, setTabIndex] = useState(initialIndex);
      const [menu, loading] = useMenu();

      // Filter by category
      const dessert = menu.filter(m => m.category === "dessert")
      const salad = menu.filter(m => m.category === "salad")
      const soups = menu.filter(m => m.category === "soup")
      const pizza = menu.filter(m => m.category === "pizza")
      const drinks = menu.filter(m => m.category === "drinks")
      const popular = menu.filter(m => m.category === "popular")
      const offered = menu.filter(m => m.category === "offered")

      if (loading) return <Loading />

      return (
            <>
                  <Navber />
                  <Banner />
                  {/* category tab with categories card */}
                  <section className="w-11/12 max-w-7xl mx-auto py-10">
                        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                              <TabList className="uppercase font-semibold flex items-center justify-center gap-6 text-center">
                                    {
                                          categories.map((tab, idx) => <Tab key={idx} className="w-fit cursor-pointer">{tab}</Tab>)
                                    }
                              </TabList>
                              {/* category card */}
                              <TabPanel className="pt-8">
                                    <OrderTab items={salad} />
                              </TabPanel>
                              <TabPanel>
                                    <OrderTab items={pizza} />
                              </TabPanel>
                              <TabPanel>
                                    <OrderTab items={soups} />
                              </TabPanel>
                              <TabPanel>
                                    <OrderTab items={dessert} />
                              </TabPanel>
                              <TabPanel>
                                    <OrderTab items={drinks} />
                              </TabPanel>
                        </Tabs>
                  </section>
                  <Footer />

            </>
      )
}

export default OurShop