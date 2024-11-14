
import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);
    const [isHidden, setIsHidden] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = 100;

            if (scrollPosition >= threshold && isHidden) {
                setIsHidden(false);
            } else if (scrollPosition < threshold && !isHidden) {
                setIsHidden(true);
            }

            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const maxScroll = documentHeight - windowHeight;

            const scrollProgress = (scrollPosition / maxScroll) * 100;
            setProgress(scrollProgress);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isHidden]);

    return (





        <div className='ScrollProg'>
            {!isHidden && <h1>{Math.round(progress)}%</h1>}

        </div>
    );
};

export default ScrollProgress;
