import React, { useState } from 'react';
import ReactModal from 'react-modal'; // Install react-modal library

import "./assets/bootstrap/css/bootstrap.min.css";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        border: 'none',
        borderRadius: '10px',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
        backgroundColor: '#f4f4f4',
        width: '80%',
        maxWidth: '500px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
};

export default function StudentForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const [message, setMessage] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        const { name, email, phone } = formData;
        console.log("Submitted Data:", name, email, phone);

        setMessage("Thank you for submitting your information, " + name + "!");
        setModalIsOpen(true);
        setFormData({ name: "", email: "", phone: "" });
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <section class="position-relative py-4 py-xl-5">
                <div class="container position-relative">
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                            <div class="card mb-5">
                                <div class="card-body p-sm-5">
                                    <h2 class="text-center mb-4">Student Info.</h2>
                                    <h6 class="text-center mb-4">(StudentApp1)</h6>
                                    <form onSubmit={handleSubmit}>
                                        <div class="mb-3">
                                            <input
                                                class="form-control"
                                                type="text"
                                                id="name-2"
                                                required
                                                name="name"
                                                placeholder="Name"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div class="mb-3">
                                            <input
                                                class="form-control"
                                                type="email"
                                                id="email-2"
                                                name="email"
                                                required
                                                placeholder="Email"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <input
                                            class="form-control"
                                            type="text"
                                            name="phone"
                                            placeholder="Phone number"
                                            required
                                            minlength="10"
                                            maxlength="10"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                        <div class="mb-3"></div>
                                        <div>
                                            <button class="btn btn-primary d-block w-100" type="submit">
                                                Send
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ReactModal isOpen={modalIsOpen} style={customStyles}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Success!</h5>
                        <button type="button" className="btn-close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        <p>{message}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            </ReactModal>
        </div>
    );
}
