import Banner from "../../components/Contact/Banner"
import ContactForm from "../../components/Contact/ContactForm"
import Location from "../../components/Contact/Location"
import Loading from "../../components/Loading"
import useLoding from "../../hooks/useLoding"
import useTitle from "../../hooks/useTitle"
import Footer from "../../shared/Footer"
import Navber from "../../shared/Navber"

const Contact = () => {
      useTitle('Contact');
      const pageLoading = useLoding();
      // Loader
      if (pageLoading) return <Loading />
      return (
            <>
                  <Navber />
                  <Banner />
                  <Location />
                  <ContactForm />
                  <Footer />
            </>
      )
}

export default Contact