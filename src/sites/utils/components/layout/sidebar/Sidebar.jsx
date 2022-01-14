import { BiLineChart, BiUser, BiGame, BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import React, { useRef, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutContext } from '../contexts';
import SidebarItem from './SidebarItem';
import '../../css/Sidebar.css'

export default function Sidebar()
{
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useContext(LayoutContext);
    const sidebarRef = useRef();
    
    useEffect(() => {
        const { current } = sidebarRef;
        current.style.width = isOpen?'230px':'65px'
    }, [isOpen]);

    const handleSidebarToggle = (e) => 
    {
        e.preventDefault();
        setIsOpen(isOpen?false:true);
    };

    const handleNavigationQuery = (site) => {
        return (e) => {
            e.preventDefault();
            navigate(`/?site=${site}`, {replace: true});
        }
    } 

    return (
        <div id='profile-sidebar' ref={sidebarRef}>
            <SidebarItem label='About' icon={BiUser} onClick={handleNavigationQuery('about')}/>
            <SidebarItem label='Experience' icon={BiLineChart} onClick={handleNavigationQuery('experience')}/>
            <SidebarItem label='Interests' icon={BiGame} onClick={handleNavigationQuery('interests')}/>
            <SidebarItem 
                label='Hide' 
                icon={isOpen?BiChevronLeft:BiChevronRight}
                style={{
                    
                    borderTop:'1px solid rgb(138, 226, 52)', 
                    marginTop:'auto'
                }}
                onClick={handleSidebarToggle}
            />
        </div>
    );
}