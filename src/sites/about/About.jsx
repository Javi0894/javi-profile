import React, {useState, Fragment} from 'react';
import {BiChevronLeft, BiChevronRight} from 'react-icons/bi';
import InfoCard from './InfoCard';

export default function About()
{
    const [cardNo, setCardNo] = useState(0);

    const cards = [
        { 
            name:'Personal Information'
        },
        {
            name:'Education'
        },
        {
            name:'Publications'
        },
        {
            name:'Motivation as a Software Developer'
        }
    ];

    const handleNextCard = (e) => {
        e.preventDefault();
        setCardNo(cardNo<cards.length-1?cardNo+1:cardNo);
    };
    const handlePreviousCard = (e) => {
        e.preventDefault();
        setCardNo(cardNo>0?cardNo-1:cardNo);
    };

    return (
        <Fragment>
            <InfoCard name={cards[cardNo].name}/>
            <button onClick={handlePreviousCard} style={{ position:'absolute', right:20, top:20, fontSize: 30}}> <BiChevronLeft/> </button>
            <button onClick={handleNextCard} style={{ position:'absolute', right:20, bottom:20, fontSize: 30}}><BiChevronRight/> </button>
                
        </Fragment>
    );
}