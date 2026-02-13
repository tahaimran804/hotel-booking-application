import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Hotels from "./pages/Hotel_List_and_details/Hotels"
import Layout from "./components/Layout"
import HotelDetails from "./pages/Hotel_List_and_details/HotelDetails"
import UserProfile from "./pages/UserProfile"
import Favorite_hotels from "./pages/Favorite_hotels"
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

const App = () => {
  return (
    <BrowserRouter basename="/hotel-booking-application">
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Home />} path="/" />
          <Route element={<Hotels />} path="/hotels" />
          <Route element={<HotelDetails />} path="/hoteldetails" />
          <Route element={<UserProfile />} path="/profile" />
          <Route element={<Favorite_hotels />} path="/favorite-hotels" />
          <Route element={<About />} path="/about-us" />
          <Route element={<HelpAndFaq />} path="/help-faq" />
          <Route element={<Blog />} path="/blog" />
          <Route element={<BlogDetails />} path="/blog-details" />
          <Route element={<Error />} path="*" />
        </Route>
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route element={<AdminLayout />}>
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/manage-all-users" element={<Manage_All_User />} />
          <Route path="/manage-all-hotel-listings" element={<Manage_hotel_listings />} />
          <Route path="/analytics-dashboard" element={<Analytics />} />
          <Route path="/manage-tracking-ids" element={<TrackingIDs />} />

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