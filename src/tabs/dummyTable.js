import React from "react";

const dummyTable = () => {
  const cityData = [
    { id: 1, city: "New York", population: 8398748 },
    { id: 2, city: "Los Angeles", population: 3990456 },
    { id: 3, city: "Chicago", population: 2705994 },
    { id: 4, city: "Houston", population: 2320268 },
    { id: 5, city: "Phoenix", population: 1680992 },
    { id: 6, city: "Philadelphia", population: 1584138 },
    { id: 7, city: "San Antonio", population: 1547253 },
    { id: 8, city: "San Diego", population: 1423851 },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>City</th>
          <th>Population</th>
        </tr>
      </thead>
      <tbody>
        {cityData.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.city}</td>
            <td>{row.population}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default dummyTable;
