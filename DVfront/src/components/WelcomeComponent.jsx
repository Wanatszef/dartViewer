import React from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function WelcomeComponent() {
    const [navigationDirection, setNavigationDirection] = useState(null);
    const [isRegisterVisible, setIsRegisterVisible] = useState(true);
    const [loginButtonText, setLoginButtonText] = useState("login");

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsRegisterVisible(false);
            setNavigationDirection("/main");
            setLoginButtonText("Home");
        }
        else
        {
            setNavigationDirection("/login");
        }
    }, []);

    const navigate = useNavigate();

    const navigateToLoginPage = function() {
        navigate(navigationDirection);
    }

    const navigateToRegisterPage = function() {
        navigate('/register');
    }

    return (
        <>
            <h1>Welcome to DartViewer</h1>
            <button onClick={navigateToLoginPage} >{loginButtonText}</button>
            {isRegisterVisible && (
                <button onClick={navigateToRegisterPage} >Register</button>
            )}
        </>
    );
}

export default WelcomeComponent;
