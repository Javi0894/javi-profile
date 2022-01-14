import React from 'react';
import '../utils/components/css/Card.css';

export default function InfoCard({name, children})
{
    return (
        <div className='info-card'>
            <h2>{name}</h2>
            {children}
        </div>
    );
}