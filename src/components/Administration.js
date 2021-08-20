import React, { Component } from "react";
import ReactDataSheet from "react-datasheet";
// Be sure to include styles at some point, probably during your bootstrapping
import "react-datasheet/lib/react-datasheet.css";
import "./Administration.css";

// function Administration() {
//   return (
//     <div className="container">
//       <h1>Administration page</h1>
//     </div>
//   );
// }

class Administration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [
        [
          { value: "First Name" },
          { value: "Last Name" },
          { value: "Address 1" },
          { value: "Address 2" },
          { value: "City" },
          { value: "State" },
          { value: "ZIP" },
          { value: "Country" },
        ],
        [
          { value: "" },
          { value: "" },
          { value: "" },
          { value: "" },
          { value: "" },
          { value: "" },
          { value: "" },
          { value: "" },
        ],
      ],
    };
  }

  render() {
    return (
      <ReactDataSheet
        id="thegrid"
        data={this.state.grid}
        valueRenderer={(cell) => cell.value}
        onCellsChanged={(changes) => {
          const grid = this.state.grid.map((row) => [...row]);
          changes.forEach(({ cell, row, col, value }) => {
            grid[row][col] = { ...grid[row][col], value };
          });
          this.setState({ grid });
        }}
      />
    );
  }
}

export default Administration;
