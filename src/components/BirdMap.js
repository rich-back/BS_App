import { MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet";
// import birdicon from "./images/bird-icon.png"
import L, { map } from "leaflet";
import { useEffect, useRef, useState } from "react";


const BirdMap = ({ birds }) => {

    const birdIcon = L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/8845/8845053.png',
        iconSize: [45,70],
        iconAnchor: [22, 70],
        popupAnchor: [0, -68]
    })




  return (
<>
    <MapContainer center={[0,0]} zoom={2} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    
      {birds.map((bird) => {
        return <Marker 
        
        icon={birdIcon}
        key={bird.id}
        position={[bird.lat, bird.lng]}
        riseOnHover={true}>
        <Popup>
            You are listening to:<br></br>
            The {bird.sex} {bird.en}<br></br>
            <strong><i>{bird.gen} {bird.sp}</i></strong><br></br>
            recorded at {bird.loc} by {bird.rec} on {bird.date} at {bird.time}
            <img className='sono' src={bird.sono.small}/>
            <figure>
             <audio
            className="audio"
            controls
            src={bird.file}>
            </audio>
            <figcaption>Listen to the {bird.en}:</figcaption>
            </figure>
            

        </Popup>
        </Marker>;
      })}
    </MapContainer>

</>

  );
};

export default BirdMap;
