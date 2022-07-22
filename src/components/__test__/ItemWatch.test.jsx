import React from "react";
import { ReactDOM } from "react-dom";
import ItemWatch from "../ItemWatch";

it("should render with crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ItemWatch/>, div);

})