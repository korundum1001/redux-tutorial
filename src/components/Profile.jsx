import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
    const {isAuth} = useSelector((state) => state.authReducer)

    return (
        <div>"
            <h1>{isAuth ? "sudah login": "belum login"}</h1>
        </div>
    )
}

export default Profile