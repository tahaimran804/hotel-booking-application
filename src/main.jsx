import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import 'react-loading-skeleton/dist/skeleton.css'
import App from './App.jsx'
import ToggleProvider from './Context/ToggleMenu.jsx'
import LoginFromProvider from './Context/OpenLoginFrom.jsx';
// import HotelDataProvider from './Context/HotelDataContext.jsx';

createRoot(document.getElementById('root')).render(
  <ToggleProvider>
    <LoginFromProvider>
      {/* <HotelDataProvider> */}
      <App />
      {/* </HotelDataProvider> */}
    </LoginFromProvider>
  </ToggleProvider>
)
