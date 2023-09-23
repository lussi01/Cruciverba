import React, { useState } from 'react';
import './styles.css';

const TableWithInputs = () => {
  const [tableData, setTableData] = useState(Array(10).fill(Array(10).fill('')));

  const handleInputChange = (rowIndex, colIndex, value) => {
    const updatedTableData = tableData.map((row, rIndex) =>
      rIndex === rowIndex ? row.map((cell, cIndex) => (cIndex === colIndex ? value : cell)) : row
    );
    setTableData(updatedTableData);
  };

  return (
    <div className="container">
      <table>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>
                  <input
                    type="text"
                    value={cell}
                    required
                    maxLength{1}
                    onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableWithInputs;
