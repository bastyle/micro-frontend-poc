import React from "react";
import ReactDOM from "react-dom";
import StudentForm from "studentApp1/StudentForm";
import "./assets/bootstrap/css/bootstrap.min.css";

const App = () => (
    <div className="container bg-secondary">
        <StudentForm />
        <section class="position-relative py-4 py-xl-5">
            <h2 class="text-center mb-4">Student App 3.</h2>
        </section>

    </div>
);
ReactDOM.render(<App />, document.getElementById("app"));