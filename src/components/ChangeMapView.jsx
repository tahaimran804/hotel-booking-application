import { useMap } from "react-leaflet";
import { useEffect } from "react";

const ChangeMap = ({ center }) => {
    const map = useMap();

    useEffect(() => {
        if (center) {
            map.flyTo(center, 12);
        }
    }, [center, map]);

    return null;
};

export default ChangeMap;
