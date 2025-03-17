import {MapContainer, TileLayer, Marker, useMap} from "react-leaflet";
import {useEffect, useState} from "react";

import {regDataType} from "../../../types";
import L from "leaflet";

interface MoveMapProps{
    position: [number, number];
}

interface Props {
    setRegData:(data:Partial<regDataType>)=>void
    regData:Partial<regDataType>
}

const MyMapComponent = ({regData,setRegData}:Props) => {
    const [position, setPosition] = useState<[number, number]>([51.505, -0.09])
    const [isDragging, setIsDragging] = useState<boolean>(false);



    const buttonClick=()=>{
        navigator.geolocation.getCurrentPosition(function(position) {
            const currentCoordinate=({latitude:position.coords.latitude, longitude:position.coords.longitude})
             setPosition([currentCoordinate.latitude,currentCoordinate.longitude])

        })
    }
    useEffect(() => {
        setRegData({...regData,"coordinates": {
                "latitude":""+position[0],
                "longitude":""+position[1],
            }})
    }, [position]);

    const MoveMap = ({ position }:MoveMapProps) => {
        const map = useMap();
        useEffect(() => {
            if(!isDragging){
                map.flyTo(position, map.getZoom(), { duration: 1.5 });
            }
        }, [position,isDragging]);
        return null;
    };


    const handleDragger = (e: L.LeafletEvent) => {
        const marker = e.target;
        const newPosition: [number, number] = [marker.getLatLng().lat, marker.getLatLng().lng];
        setPosition(newPosition);
        setRegData({...regData,"coordinates": {
                "latitude":""+position[0],
                "longitude":""+position[1],
            }})

    }
    const dragStart=()=>{
        setIsDragging(true)
    }

    // const dragEnd=()=>{
    //     setIsdragging(false)
    // }

    return (
        <div className={"inputForm"}>
            <div className={"w-1/5 mx-auto"}>
                <button className={"loginButton"}
                        onClick={buttonClick}> Get your location</button>
            </div>
            <MapContainer
                center={position}
                zoom={12}
                scrollWheelZoom={true}
                style={{width: "100%", height: "400px"}}
            >
                {/*<TileLayer*/}
                {/*    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"*/}
                {/*    attribution='&copy; <a href="https://www.esri.com/">Esri</a>'*/}
                {/*/>*/}

                {/*<TileLayer*/}
                {/*    url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"*/}
                {/*    attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'*/}
                {/*/>*/}
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://carto.com/">Carto</a>'
                />
                <Marker position={position}
                        draggable={true}
                        eventHandlers={{
                            dragstart: dragStart,
                            // dragend: dragEnd,
                            dragend:handleDragger,
                        }}


                >
                <MoveMap position={position}/>
                    {/*<Popup></Popup>*/}
                </Marker>
            </MapContainer>

        </div>
    );
};

export default MyMapComponent;