import React from 'react';
import BubbleSpeech from './BubbleSpeech';

export default function WelcomeSite()
{
    const dialogs = [
        'Welcome to my profile!',
        'Here you will be able to read about such es experience, skills, interests, etc...'
    ];

    return(<BubbleSpeech dialogs={dialogs} style={{bottom: 5, right:30}}/>);
};