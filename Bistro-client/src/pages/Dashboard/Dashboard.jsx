import useTitle from "../../hooks/useTitle"
import Footer from "../../shared/Footer"
import Navber from "../../shared/Navber"

const Dashboard = () => {
      useTitle("Dashboard");
      return (
            <>
                  <Navber />
                  <Footer />

            </>
      )
}

export default Dashboard