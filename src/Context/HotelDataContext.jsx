// import axios from "axios";
// import { createContext, useContext, useEffect, useState } from "react";

// export const hotelContext = createContext();

// const HotelDataProvider = ({ children }) => {
//     const [countries, setCountries] = useState([])
//     const [selectedCountry, setSelectedCountry] = useState(null)
//     const [cities, setCities] = useState([])
//     const [selectedCity, setSelectedCity] = useState(null)
//     useEffect(() => {
//         const fetchUserData = async () => {
//             try {
//                 const json = JSON.stringify({});
//                 const response = await axios.post('http://172.16.255.62:5001/hotels?action=get_countries', JSON.stringify({ params: json }), {
//                     headers: {
//                         'Content-Type': 'application/x-www-form-urlencoded',
//                     },
//                 });
//                 if (response.data.success === true) {
//                     setCountries(response.data.data)
//                 }
//             } catch (error) {
//                 console.error('Error fetching user data:', error);
//             }
//         };
//         fetchUserData()
//     }, []);
//     useEffect(() => {
//         if (selectedCountry) {
//             console.log(selectedCountry)
//             const fetchCities = async () => {
//                 try {
//                     const json = JSON.stringify({ country_name: selectedCountry.country_name, country_code: selectedCountry.country_code });
//                     const response = await axios.post('http://172.16.255.62:5001/hotels?action=get_cities_by_country', JSON.stringify({ params: json }), {
//                         headers: {
//                             'Content-Type': 'application/x-www-form-urlencoded',
//                         },
//                     });
//                     if (response.data.success === true) {
//                         setCities(response.data.data)
//                     }
//                 } catch (error) {
//                     console.error('Error fetching cities:', error);
//                 }
//             };
//             fetchCities()
//         }
//     }, [selectedCountry]);
//     return (
//         <hotelContext.Provider value={{ countries, selectedCountry, setSelectedCountry, cities, selectedCity, setSelectedCity }}>
//             {children}
//         </hotelContext.Provider>
//     )
// }
// export default HotelDataProvider;






//  const [hotels, setHotels] = useState([])

//     useEffect(() => {
//         const fetchCountries = async () => {
//             try {
//                 const response = await axios.post(
//                     'http://10.10.10.17:5001/hotels?action=get_hotels_suggestions', JSON.stringify({ params: json }), {
//                     headers: {
//                         'Content-Type': 'application/x-www-form-urlencoded',
//                     }
//                 })
//                 if (response.data.success) {
//                     setHotels(response.data.data)
//                 }
//             } catch (error) {
//                 console.error('Countries Error:', error)
//             }
//         }
//         fetchCountries()
//     }, [])