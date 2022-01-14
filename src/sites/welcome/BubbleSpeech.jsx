import React, {useEffect, useRef, useState, Fragment} from 'react';
import '../utils/components/css/Bubble.css';

export default function BubbleSpeech({ dialogs=[], style })
{
    const [idx, setIdx] = useState(0);
    const [bubbleOut, setBubbleOut] = useState(true);
    const bubbleRef = useRef();
    useEffect(()=> {
        let i = 0;
        let mounted = true;
        let typingTmout = null;     
        if (bubbleRef.current)
        {
            bubbleRef.current.innerHTML = '';
            typeWriter();   
        }
        function typeWriter()
        {
            if (bubbleOut && dialogs[idx] && i < dialogs[idx].length && mounted)
            {
                bubbleRef.current.innerHTML += dialogs[idx].charAt(i);
                i++;
                typingTmout = setTimeout(typeWriter, 50);
            }
            else if (!dialogs[idx])
            {
                setBubbleOut(false);
            }
        };
        return () => {
            mounted = false;
            if (typingTmout) clearTimeout(typingTmout);
        };
    }, [idx, bubbleOut, dialogs]);

    const handleIndexIncrement = (e) => {
        e.preventDefault();
        setIdx(idx<dialogs.length?idx+1:idx);
    };
    const handleIndexDecrement = (e) => {
        e.preventDefault();
        setIdx(idx>0?idx-1:idx);
    };
    const handleBubbleToggle = (e) => {
        e.preventDefault();
        setBubbleOut(bubbleOut?false:true);
        setIdx(0);
    };

    return (
        <div id='container-bubble-speech' style={{...style}}>
            <img 
                src='/Javi32x32.png' 
                alt='javi-bmp' 
                width={256} height={256} 
                onClick={handleBubbleToggle}
                style={{
                    cursor:'pointer',
                    imageRendering:'pixelated',
                    position:'absolute',
                    bottom: 10
                }}/>
            { 
                bubbleOut && 
                <Fragment>
                    <div id='bubble-speech' ref={bubbleRef} />
                    <svg width='20' height='20' style={{ position:'absolute', top:'55%', left:'228px'}}>
                        <path d='M0 0 L20 10 L0 20 Z' fill='black' stroke='rgb(78, 154, 6)'/>
                    </svg>
                    <button onClick={handleIndexDecrement} style={{ position:'absolute', left:5, bottom:10 }}> {'<<'} </button>
                    <button onClick={handleIndexIncrement} style={{ position:'absolute', left:200, bottom:10 }}> {'>>'} </button>
                </Fragment>
            }
        </div>
    );
};