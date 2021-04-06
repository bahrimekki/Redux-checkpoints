import Task from "../Task/Task";
import React, { useState } from "react";
import { useSelector } from "react-redux";
export default function ListTask() {
    const todos = useSelector((state) => state.Reducer.todos);
    const [filtere, setFiltere] = useState("all");
    const buton = {
        width: "33%",
        height: "100%",
        border: "none",
        fontSize: "25px",
        color: "#ffffff",
        cursor: "pointer",
        backgroundColor: "#313e4f",
    };
    const butoff = {
        width: "33%",
        height: "100%",
        border: "none",
        fontSize: "25px",
        color: "#ffffff",
        cursor: "pointer",
        backgroundColor: "#1dd2af",
    };
    function all() {
        setFiltere("all");
    }
    function don() {
        setFiltere(true);
    }
    function undon() {
        setFiltere(false);
    }
    return (
        <div className="ListTask">
            <div
                style={{
                    display: "flex",
                    height: "40px",
                    width: "654px",
                    alignItems: "center",
                    justifyContent: "space-between ",
                    backgroundColor: "#1dd2af",
                    position: "fixed",
                }}
            >
                <button
                    style={filtere === "all" ? buton : butoff}
                    onClick={all}
                >
                    all
                </button>
                <button style={filtere === true ? buton : butoff} onClick={don}>
                    don
                </button>
                <button
                    style={filtere === false ? buton : butoff}
                    onClick={undon}
                >
                    indon
                </button>
            </div>
            <div style={{ paddingTop: "40px" }}>
                {filtere === "all"
                    ? todos.map((task, index) => (
                          <Task
                              toDo={task}
                              key={index}
                              index={index}
                              task={task}
                              SubmitChange
                          />
                      ))
                    : todos
                          .filter((task) => task.isDone === filtere)
                          .map((task, index) => (
                              <Task toDo={task} key={index} index={index} />
                          ))}
            </div>
        </div>
    );
}
