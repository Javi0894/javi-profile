import React, { useRef, useEffect, useContext } from 'react';
import { LayoutContext } from '../contexts';
import '../../css/Sidebar.css'

export default function SidebarItem({icon:Icon , label, style, onClick})
{
    const [openNavBar] = useContext(LayoutContext);
    const labelRef = useRef();
    useEffect(() => {
        if (labelRef.current){
            const {current} = labelRef;
            current.style.transition = 
            `opacity ${openNavBar?"1000ms":"100ms"} 0s`;
            current.style.opacity = openNavBar?1:0;
        }
    }, [openNavBar]);
    return (
        <div className="IconContainer" style={{...style}} onClick={onClick}>
            { openNavBar && <p ref={labelRef} className="IconLabel">{label}</p>}
            <Icon className="FoldIcon"/>
        </div>
    );
}