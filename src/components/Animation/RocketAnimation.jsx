import React, { useState, useEffect } from 'react';
import './style.css';

const RocketAnimation = ({ isLoading, onAnimationEnd }) => {
    const [showAnimation, setShowAnimation] = useState(isLoading);

    useEffect(() => {
        if (!isLoading) {
            const animationTimeout = setTimeout(() => {
                setShowAnimation(false);
                onAnimationEnd(); 
            }, 2000);
            return () => clearTimeout(animationTimeout);
        }
    }, [isLoading, onAnimationEnd]);

    return (
        <div className='app-container'>
            {showAnimation && (
                <div className="rocket-animation">
                    🚀 loading...
                </div>
            )}
        </div>
    );
}

export default RocketAnimation;