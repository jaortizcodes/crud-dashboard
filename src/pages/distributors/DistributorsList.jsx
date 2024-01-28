import React from "react";
import { Link } from "react-router-dom";

function DistributorsList({ data }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((author, index) => (
            <tr key={index}>
              <td>{author.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DistributorsList;
