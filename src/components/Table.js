import React from "react";

const Table = ({ arr }) => {
  return (
    <div className="table-wrap" style={{ overflowX: "auto" }}>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">Time</th>
            <th scope="col">Temperature</th>
            <th scope="col">Feels like</th>
            <th scope="col">Humidity</th>
            <th scope="col">Weather</th>
            <th scope="col">Wind speed</th>
            <th scope="col">Visibility</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((item) => (
            <tr className="table-success">
              {Object.values(item).map((val) => (
                <td>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
