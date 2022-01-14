import React, { useEffect, useRef, useState } from 'react';
import { LayoutContext } from '../contexts'; 
import Sidebar from '../sidebar/Sidebar';
import '../../css/Main.css';
export default function Main({children})
{
    const [isOpen, setIsOpen] = useState(true);
    const panelRef = useRef();

    useEffect(() => {
        const {current} = panelRef;
        current.style.left = isOpen?'255px':'90px';
        current.style.width = isOpen?'calc(100% - 280px)':'calc(100% - 115px)';
    }, [isOpen]);

    return (
        <LayoutContext.Provider value={[isOpen, setIsOpen]}>
            <Sidebar/>
            <div id='main-panel' ref={panelRef}>
                {children}
            </div>
        </LayoutContext.Provider>
    );
}