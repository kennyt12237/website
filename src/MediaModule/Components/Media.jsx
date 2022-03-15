import React, { useState, useEffect } from 'react';
import useIntervalTimer from '../Helper/useIntervalTimer';
import useSetStyles from '../Helper/useSetStyles';
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

    const bringToFront = (index) => {

        setMedia([
            media[index],
            ...media.slice(0, index),
            ...media.slice(index + 1, media.length)
        ])
    }

    const rotateMediaInOrder = () => {
        setMedia([
            ...media.slice(1, media.length),
            media[0]
        ])
    }

	const reverseMedia = () => {
        setMedia([
			media[media.length - 1],
            ...media.slice(0, media.length - 1),
        ])
    }

	// const handleWheelEvent = (event) => {
	// 	console.log(event.deltaY)
	// 	if (event.deltaY > 20) {
	// 		rotateMediaInOrder();
	// 	} else if (event.deltaY < -20) {
	// 		reverseMedia();
	// 	}
	// }
	// const disableScrolling = () => {
	// 	document.addEventListener('wheel', preventDefault, {
	// 		passive: false,
	// 	  })
	// }
	
	// const enableScrolling = () => {
	// 	document.removeEventListener('wheel', preventDefault, false);
	// }

	// const preventDefault = (event) => {
	// 	event = event || window.event
	// 	if (event.preventDefault) {
	// 	  event.preventDefault()
	// 	}
	// 	event.returnValue = false
	//   }

	const { start, stop } = useIntervalTimer(rotateMediaInOrder, 3000);
    const mediaStyles = useSetStyles(media);
    
    useEffect(() => {
        if (inViewpoint) {
          start();
        } else {
            stop();
        }
        return () => stop();
    },[inViewpoint, media, start, stop])

    return (
        <div ref={innerRef} className='media-container' >
            {media ? media.map((m, index) => {
                return <img className="media-container__media" style={mediaStyles[index]} src={m} alt={m} key={index} />
            }): <div> NONE </div>}
        </div>
    );
}