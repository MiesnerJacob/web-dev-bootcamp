import React from "react";
import Input from "./Input.jsx";

function Login() {
    return (
        <form className="form">
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;