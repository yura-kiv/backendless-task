import React from "react";

const dummyList = () => {
  const cityList = [
    "New York - Population: 8,398,748",
    "Los Angeles - Population: 3,990,456",
    "Chicago - Population: 2,705,994",
    "Houston - Population: 2,320,268",
    "Phoenix - Population: 1,680,992",
    "Philadelphia - Population: 1,584,138",
    "San Antonio - Population: 1,547,253",
    "San Diego - Population: 1,423,851",
  ];

  return (
    <ul>
      {cityList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default dummyList;
