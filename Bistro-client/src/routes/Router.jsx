import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import SignIn from "../pages/Signin/SignIn";
import SignUp from "../pages/Signup/SignUp";
import Error from "../pages/ErrorPage/Error";
import Contact from "../pages/Contact/Contact";
import OurMenu from "../pages/OurMenu/OurMenu";
import OurShop from "../pages/OurShop/OurShop";
import Private from "./Private";
import Dashboard from "../layout/Dashboard";
import UserHome from "../pages/Dashboard/User/UserHome";
import Reservation from "../pages/Dashboard/User/Reservation";
import Payment from "../pages/Dashboard/User/Payment";
import AddReview from "../pages/Dashboard/User/AddReview";
import MyBooking from "../pages/Dashboard/User/MyBooking";
import MyCart from "../pages/Dashboard/User/MyCart";
import AllUser from "../pages/Dashboard/Admin/AllUser";


const router = createBrowserRouter([
      {
            path: '/',
            errorElement: <Error />,
            element: <Main />,
            children: [
                  {
                        path: '/',
                        element: <Home />
                  },
                  {
                        path: '/contact',
                        element: <Contact />
                  },
                  {
                        path: '/dashboard',
                        element: <Private><Dashboard /></Private>
                  },
                  {
                        path: '/menu',
                        element: <OurMenu />
                  },
                  {
                        path: '/shop/:category',
                        element: <OurShop />
                  },
                  {
                        path: '/signin',
                        element: <SignIn />
                  },
                  {
                        path: '/signup',
                        element: <SignUp />
                  }
            ]
      },
      {
            path: 'dashboard',
            element: <Private><Dashboard /></Private>,
            children: [
                  {
                        index: true,
                        element: <UserHome />
                  },
                  {
                        path: 'reservation',
                        element: <Reservation />
                  },
                  {
                        path: 'payment',
                        element: <Payment />
                  },
                  {
                        path: 'cart',
                        element: <MyCart />
                  },
                  {
                        path: 'review',
                        element: <AddReview />
                  },
                  {
                        path: 'booking',
                        element: <MyBooking />
                  },
                  // admin routes
                  {
                        path: 'allUsers',
                        element: <AllUser />
                  }
            ]
      }
])

export default router;