import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import SignIn from "../pages/Signin/SignIn";
import SignUp from "../pages/Signup/SignUp";
import Error from "../pages/ErrorPage/Error";
import Contact from "../pages/Contact/Contact";
import OurMenu from "../pages/OurMenu/OurMenu";
import Dashboard from "../pages/Dashboard/Dashboard";
import OurShop from "../pages/OurShop/OurShop";

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
                        element: <Dashboard />
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
      }
])

export default router;