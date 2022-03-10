import React, { useEffect } from 'react';
import '../scss/Media.scss';

export default function Media(props) {

    const {
        innerRef,
        inViewpoint,
        state : [
            media,
            setMedia
        ]
    } = props;

    const computeStyles = (numOfImages, index) => {

        const decrement = 1 / numOfImages;

        const opacity = 1 - (decrement * index);
        const translateX = 20 * index;
        const translateY = -20 * index;
        const zIndex = numOfImages - index;

        return { 
            width: `500px`,
            height: `500px`,
            opacity: `${opacity}`,
            transform: `translate(${translateX}px, ${translateY}px)`,
            gridColumn: `1`,
            gridRow: `1`,
            zIndex: `${zIndex}`
        }
    }

    const bringToFront = (index) => {
        setMedia([
            media[index],
            ...media.slice(0, index),
            ...media.slice(index + 1, media.length)
        ])
    }
    
    useEffect(() => {
        if (inViewpoint) {
            const rotateMediaInOrder = () => {
                setMedia([
                    ...media.slice(1, media.length),
                    media[0]
                ])
            }
            rotateMediaInOrder();
        }
    },[inViewpoint])
  

    return (
        <div ref={innerRef} className='media-container'>
            {media ? media.map((m, index) => {
                return <img className="media-container__media" onClick={e => bringToFront(index)} src={m} style={computeStyles(media.length, index)} alt={m} key={index} />
            }): <div> NONE </div>}
        </div>
    );
}