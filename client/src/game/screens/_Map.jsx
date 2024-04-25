import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HUD from '../components/HUD'
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { format } from 'timeago.js';

export default function _Map() {
    const currentUser = "cbao";

    const [mapboxAccessToken, setMapboxAccessToken] = useState(null);
    const [treasures, setTreasures] = useState([]);
    const [currentPlaceId, setCurrentPlaceId] = useState(null);
    const [newTreasure, setNewTreasure] = useState(null);
    const [error, setError] = useState(null); // State to hold error message
    const [loading, setLoading] = useState(true);


    //React-map-gl Token
    useEffect(() => {
        async function fetchMapboxAccessToken() {
            try {
                const response = await axios.get('/env');
                const { mapboxAccessToken } = response.data;
                setMapboxAccessToken(mapboxAccessToken);
            } catch (error) {
                console.error('Error fetching Mapbox access token:', error);
            }
        }
        fetchMapboxAccessToken();
    }, []); 

    //Fetch Data from MongoDB Atlas
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/treasures');
                setTreasures(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to fetch treasures. Check connection or backend ');
            }
        };
        fetchData();
    }, []);

    //Handle Current Click for Marker
    const handleMarkerClick = (id) =>{
        setCurrentPlaceId(id);
    }

    //Handle Adding Marker
    const handAddClick = (e) => {
        console.log('Double-click event:', e);
        const { lng, lat } = e.lngLat;
        setNewTreasure({ long: lng, lat: lat });
        console.log('New Treasure after setting:', newTreasure); // Add this line to check the state immediately after setting
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="relative h-screen overflow-hidden">
            <HUD></HUD>
            {mapboxAccessToken && (
                <div className="absolute inset-0">
                <Map
                    mapboxAccessToken={mapboxAccessToken}
                    initialViewState={{
                        longitude: 46,
                        latitude: 17,
                        zoom: 4,
                        minZoom: 4, // Set minimum zoom level
                    }}
                    className="w-full h-full absolute top-0 left-0"
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    onDblClick = {handAddClick}
                >
                {treasures.map((treasure) => (
                    <div key={treasure._id}>
                        <Marker 
                            longitude={treasure.long} 
                            latitude={treasure.lat} 
                            anchor="bottom" 
                        >
                            <FontAwesomeIcon icon={faLocationDot} 
                            className={`text-3xl sm:text-4xl lg:text-5xl ${treasure.username === currentUser ? 'text-accentPurple' : 'text-accentRed'} cursor-pointer`}
                            onClick={() => handleMarkerClick(treasure._id)}/>
                            <div>You are here</div>
                        </Marker>
                        {treasure._id === currentPlaceId && (
                        <Popup
                            longitude={treasure.long} 
                            latitude={treasure.lat}
                            closeButton={true}
                            closeOnClick={false}
                            anchor="left"
                            onClose={()=>setCurrentPlaceId(null)}
                        >
                            <h1>Created by{treasure.username}</h1>
                            <p>{format(treasure.createdAt)}</p>
                        </Popup>
                        )}
                    </div>
                ))}
                {newTreasure &&(
                <Popup
                    longitude={newTreasure.long} 
                    latitude={newTreasure.lat}
                    closeButton={true}
                    closeOnClick={false}
                    anchor="left"
                    onClose={()=>setNewTreasure(null)}
                >
                <div>
                    <form>
                        <label>Title
                            <input type="text" />
                        </label>
                        <label>Description
                            <textarea />
                        </label>
                    </form>
                </div>
                </Popup>
                )}
                </Map>  
                </div>
            )}
        </div>
    );
}
