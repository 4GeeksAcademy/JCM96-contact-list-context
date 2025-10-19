import { Outlet, useLocation } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
const noNavbarRoutes = ["/newcontact"];

export const Layout = () => {
    const location = useLocation();
    const showNavbar = !noNavbarRoutes.includes(location.pathname);
    return (
        <ScrollToTop>
            {showNavbar && <Navbar />}
                <Outlet />
            {/* <Footer /> */}
        </ScrollToTop>
    )
}