import { useState, useEffect } from 'react';

export default function useIntersection(element, rootMargin, threshold) {

    const [ isVisible, setIsVisible ] = useState(false);
    
    useEffect(() => {
        const setVisibleCallBack = ([entry]) => {
            setIsVisible(entry.isIntersecting);
        } 

        const options = {
            rootMargin : rootMargin,
            threshold : threshold
        }
        const observer = new IntersectionObserver(setVisibleCallBack, options);
        element.current && observer.observe(element.current);
        console.log("set observer")
        });

        return isVisible;
}