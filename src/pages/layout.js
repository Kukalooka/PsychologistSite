import { Outlet, Link } from "react-router-dom";
import Navigation from "./components/navigation.js"
import Footer from "./components/footer.js"

const Layout = () => {
  return (
    <>
        <Navigation />

        <Outlet />

        <Footer />
    </>
  )
};

export default Layout;