import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
// import "leaflet/dist/leaflet.css";
import L from "leaflet";
import ChangeMap from "./ChangeMapView";
const createPriceIcon = (price) => {
    return L.divIcon({
        html: `
      <div class="px-2 py-2 rounded-sm bg-white text-xs 
      flex items-center justify-center gap-1
      border border-gray-200 shadow-md whitespace-nowrap">
        Rs <span>${price}</span>
      </div>
    `,
        className: "",
        iconSize: [100, 10],
        iconAnchor: [35, 16],
        popupAnchor: [0, -16],
    });
};


const HotelsMap = ({ hotels = [], selectedLocation }) => {
    const defaultCenter = [24.8607, 67.0011];
    return (
        <MapContainer
            center={defaultCenter}
            zoom={12}
            scrollWheelZoom={true}
            className="w-full h-full"
        >
            <TileLayer
                attribution='© OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <ChangeMap center={selectedLocation} />

            <MarkerClusterGroup chunkedLoading>
                {hotels?.map((hotel) => {
                    if (!hotel?.Map) return null;
                    const [latStr, lngStr] = hotel.Map.split("|");
                    const lat = parseFloat(latStr);
                    const lng = parseFloat(lngStr);
                    if (isNaN(lat) || isNaN(lng)) return null;
                    return (
                        <Marker
                            key={hotel.id}
                            position={[lat, lng]}
                            icon={createPriceIcon(hotel.price || 0)}
                        >
                            <Popup>
                                <strong>{hotel.HotelName}</strong>
                                <p>Rs {(hotel.price || 0).toLocaleString()}</p>
                            </Popup>
                        </Marker>
                    );
                })}
            </MarkerClusterGroup>
        </MapContainer>
    );
};

export default HotelsMap;
