import React from "react";
import ReactDOM from "react-dom";


import StudentForm from "./StudentForm";
import "./assets/bootstrap/css/bootstrap.min.css";

const App = () => (
    <div className="container">
        <StudentForm />
        <h6 class="text-center mb-4">(StudentApp1)</h6>
    </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
