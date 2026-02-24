import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Hotels from "./pages/Hotel_List_and_details/Hotels"
import Layout from "./components/Layout"
import HotelDetails from "./pages/Hotel_List_and_details/HotelDetails"
import UserProfile from "./pages/User/UserProfile"
import Favorite_hotels from "./pages/User/Favorite_hotels"
import HelpAndFaq from "./pages/HelpAndFaq"
import Blog from "./pages/Articlepages/Blog"
import BlogDetails from "./pages/Articlepages/BlogDetails"
import About from "./pages/About"
import Error from "./pages/Error"
import AdminLogin from "./admin/Pages/Login"
import Dashboard from "./admin/Pages/Dashboard"
import AdminLayout from "./admin/Components/AdminLayout"
import Manage_All_User from "./admin/Pages/Manage_All_User"
import Manage_hotel_listings from "./admin/Pages/Manage_hotel_listings"
import Analytics from "./admin/Pages/Analytics"
import ManageAboutContent from "./admin/Pages/ManageAboutContent"
import ManageBlogContent from "./admin/Pages/ManageBlogContent"
import ManageTermsContentConditions from "./admin/Pages/ManageTermsContentConditions"
import ManageFAQContent from "./admin/Pages/ManageFAQContent"
import ManagePrivacyContentPolicy from "./admin/Pages/ManagePrivacyContentPolicy"
import TrackingIDs from "./admin/Pages/TrackingIDs"
import ScrollTop from "./components/ScrollTop"
import Faq from "./pages/Faq"
import UserLayout from "./components/UserLayout"
import Recentlyviewed from "./pages/User/Recentlyviewed"
import Search_Preferences from "./pages/User/Search_Preferences"
import Admin_Profile from "./admin/Pages/Admin_Profile"

const App = () => {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Home />} path="/" />
          <Route element={<Hotels />} path="/hotels" />
          <Route element={<HotelDetails />} path="/hotel-details" />
          <Route element={<About />} path="/about-us" />
          <Route element={<HelpAndFaq />} path="/help-faq" />
          <Route element={<Faq />} path="faqDetails" />
          <Route element={<Blog />} path="/blog" />
          <Route element={<BlogDetails />} path="/blog-details" />
          <Route element={<Home />} path="*" />
          <Route element={<UserLayout />}>
            <Route element={<UserProfile />} path="/user-profile" />
            <Route element={<Favorite_hotels />} path="/profile/favorite-hotels" />
            <Route element={<Recentlyviewed />} path="/profile/recently-viewed" />
            <Route element={<Search_Preferences />} path="/profile/search-preferences" />
          </Route>


        </Route>
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route element={<AdminLayout />}>
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/manage-all-users" element={<Manage_All_User />} />
          <Route path="/manage-all-hotel-listings" element={<Manage_hotel_listings />} />
          <Route path="/analytics-dashboard" element={<Analytics />} />
          <Route path="/manage-tracking-ids" element={<TrackingIDs />} />
          <Route path="/admin-profile" element={<Admin_Profile />} />

          <Route path="/manage-about-content" element={<ManageAboutContent />} />
          <Route path="/manage-blog-content" element={<ManageBlogContent />} />
          <Route path="/manage-privacy-content-policy" element={<ManagePrivacyContentPolicy />} />
          <Route path="/manage-terms-content-conditions" element={<ManageTermsContentConditions />} />
          <Route path="/manage-faq-content" element={<ManageFAQContent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App