import React, { Component } from "react";
import { Checkbox } from "./styles";

export class CheckBox extends Component {
  render() {
    return (
      <Checkbox>
        <input
          type="checkbox"
          id={this.props.id}
          checked={this.props.checked || false}
          onChange={() => {
            console.log(`teste`);
          }}
        />
        <span className="overlay">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
      </Checkbox>
    );
  }
  componentDidMount() {
    const checkboxes = document.getElementById(`${this.props.id}`);
    checkboxes.addEventListener("change", () => {
      this.props.onChange();
    });
  }
}
