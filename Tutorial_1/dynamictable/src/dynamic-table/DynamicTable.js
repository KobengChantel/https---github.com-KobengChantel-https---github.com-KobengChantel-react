import { useEffect } from "react";
import TableData from "./TableData";

function DynamicTable() {
  // Get table column names
  const column = Object.keys(TableData[0]);

  // Function to generate table header (th) based on column names
  const ThData = () => {
    return column.map((data) => {
      return <th key={data}>{data}</th>; // Return th element with column name as key
    });
  };

  // Function to generate table rows (tr) and table data (td)
  const tdData = () => {
    return TableData.map((data, index) => {
      return (
        <tr key={index}> {/* Use index as key for each row */}
          {column.map((v, i) => {
            return <td key={i}>{data[v]}</td>; // Use column value as key for each cell, and render corresponding data
          })}
        </tr>
      );
    });
  };

  return (
    <table className="table">
      <thead>
        <tr>{ThData()}</tr> {/* Render table header */}
      </thead>
      <tbody>{tdData()}</tbody> {/* Render table body */}
    </table>
  );
}

export default DynamicTable;
