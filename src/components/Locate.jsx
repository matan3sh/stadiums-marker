import React from 'react';

export const Locate = ({ panTo }) => {
  return (
    <button
      className='locate'
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            });
          },
          () => null
        );
      }}
    >
      <img src='compass.svg' alt='compass-locate Me' />
    </button>
  );
};
