import React from "react";
import { ReactDOM } from "react-dom";
import SearchNavBar from "../SearchNavBar";


it("should render with crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SearchNavBar/>, div);

})