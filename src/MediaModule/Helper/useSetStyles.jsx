import { useState, useEffect } from 'react';

export default function useIntersection(media) {

        
    const computeStyles = (numOfImages, index) => {

        const decrement = 1 / numOfImages;

        const opacity = 1 - (decrement * index);
        const translateX = 20 * index;
        const translateY = -20 * index;
        const zIndex = numOfImages - index;

        return { 
            width: `400px`,
            height: `400px`,
            opacity: `${opacity}`,
            transform: `translate(${translateX}px, ${translateY}px)`,
            gridColumn: `1`,
            gridRow: `1`,
            zIndex: `${zIndex}`,
        }
    }

    const computeAllStyles = () => {
        const newStyles = [];
        for (let i = 0; i < media.length; i++) {
            newStyles.push(computeStyles(media.length, i));
        }
        return newStyles;
    }

    const [ mediaStyles, setMediaStyles ] = useState(computeAllStyles());

    useEffect(() => {
        setMediaStyles(computeAllStyles());
    },[media]);

    return mediaStyles;
}