import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import L from "leaflet";
import { hotelsData } from "../Data/Data";

const createPriceIcon = (price) => {
    return L.divIcon({
        html: `<div class="price-marker">Rs ${price}</div>`,
        className: "",
        iconSize: [60, 30],
    });
};

const HotelsMap = ({ hoveredHotel }) => {
    return (
        <MapContainer
            center={[24.8607, 67.0011]}
            zoom={12}
            className="w-full h-full"
        >

            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MarkerClusterGroup>
                {hotelsData.map((hotel) => (
                    <Marker
                        key={hotel.id}
                        position={[hotel
                        
                        .location.lat, hotel.location.lng]}
                        icon={createPriceIcon(hotel.price)}
                    >
                        <Popup>
                            <strong>{hotel.name}</strong>
                            <p>Rs {hotel.price}</p>
                        </Popup>
                    </Marker>
                ))}
            </MarkerClusterGroup>

        </MapContainer>
    );
};

export default HotelsMap;
