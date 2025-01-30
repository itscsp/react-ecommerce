import React from 'react';

const Rating = ({ rate, totalStars = 5, size = 20, activeColor = "#ffd055", emptyColor = "#d3d3d3" }) => {
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    const fillColor = i <= rate ? activeColor : emptyColor;
    stars.push(
      <svg
        key={i}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        style={{ marginRight: '2px' }}
      >
        <path
          fill={fillColor}
          d="M12 .587l3.668 7.568 8.332 1.205-6.002 5.848 1.419 8.292L12 18.897l-7.417 3.88L6.002 15.16l-6.002-5.848 8.332-1.205z"
        />
      </svg>
    );
  }

  return <div style={{ display: 'flex' }}>{stars}</div>;
};

export default Rating;
