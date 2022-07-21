import React from "react";
import { ReactDOM } from "react-dom";
import ListWatch from "../ListWatch";

it("should render with crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ListWatch/>, div);

})