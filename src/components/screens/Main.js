import React from 'react';
import Spotlight from '../includes/Spotlight';
import Cards from '../includes/Cards';
import Huge from '../includes/Huge';
import Dark from '../includes/Dark';
import Theme from '../includes/Theme';
import Pages from '../includes/Pages';

export default function Main() {
    return (
        <>
           <Spotlight /> 
           <Cards />
           <Huge />
           <Dark />
           <Theme />
           <Pages />
        </>
    )
}
