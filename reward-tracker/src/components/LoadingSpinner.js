import React from "react";
import '../styles/LoadingSpinner.css';
/**
 * Loading spinner component to indicate data loading
 */

const LoadingSpinner = () => {
    return (
        <>
            <div className="spinner" />
            <div className="spinner-text">Loading...</div>
        </>
    )
}
export default LoadingSpinner;
