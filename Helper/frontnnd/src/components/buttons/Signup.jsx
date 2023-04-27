import React, { useState } from 'react'

const Signup = () => {
    const [user_name, setUsername] = useState("")
    const [phone_no, setPhoneNo] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function signupUser(event) {
        event.preventDefault();
        console.log("signup  function working");
        const response = await fetch("http://localhost:5000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_name,
                phone_no,
                email,
                password,
            }),
        });
        const data = await response.json();
        console.log(data);
    }

    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-outline-primary ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
                <span className="fa fa-user-plus me-1"></span> Register
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Register</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onClick={signupUser}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInput" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="exampleInput"
                                        onChange={(e) => {
                                            setUsername(e.target.value)
                                        }} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInput" className="form-label">Phone no</label>
                                    <input type="text" className="form-control" id="exampleInput"
                                        onChange={(e) => {
                                            setPhoneNo(e.target.value)
                                        }} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                        }} />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => {
                                        setPassword(e.target.value)
                                    }} />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-outline-primary w-100 mt-5">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
