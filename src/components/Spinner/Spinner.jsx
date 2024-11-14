// Spinner
import React, { useState, useEffect } from "react";
import { ClockLoader } from "react-spinners";
import Home from '../Home/Home'
const Spinner = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {loading ? (
                <div className="spinner-container  fixed-top">
                    <ClockLoader className="ClockLoader" color="#fff" size={150} />
                </div>
            ) : (
                <div>

                    <Home />
                </div>
            )}
        </div>
    );
};

export default Spinner;
