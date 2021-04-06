import "./App.css";
import React from "react";
import AddTask from "./Component/AddTask/AddTask";
import ListTask from "./Component/ListTask/ListTask";

function App() {
    return (
        <div className="App">
            <div
                style={{
                    height: "20px",
                    width: "654px",
                    backgroundColor: "#ffffff",
                    position: "fixed",
                    top: "0px",
                }}
            ></div>
            <AddTask />
            <ListTask />
        </div>
    );
}

export default App;
