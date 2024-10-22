import React from "react";

const GetDirectionsButton = () => {
  const destination = {
    lat: -25.345075,
    lng: 131.032597,
  };
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination.lat},${destination.lng}&travelmode=driving`;

  return (
    <div>
      <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
        <button className="get-directions-button">Get Directions</button>
      </a>
    </div>
  );
};

export default GetDirectionsButton;
