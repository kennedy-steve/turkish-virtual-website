import React from 'react';

import {
    PlaneCardItem,
    PlaneCards
} from '../PlaneCards';

const TurkishAirlines737Max8: PlaneCardItem = {
    model: '737 Max 8',
    make: 'Boeing',
    livery: "Turkish Airlines",
    range: 3550,
    seats: 210,
    description: (
        <>
            It's a cool plane dude.
        </>
    ),
    imageUrl: '/img/fleet/turkish-airlines-boeing-737-max-8.png',
}

const InsertPlaneHere: PlaneCardItem = {
    model: '999',
    make: 'McDonalds',
    livery: 'UpdogAirlines',
    range: 9999,
    seats: 2,
    description: (
        <>
            McPlane goes floosh.
        </>
    ),
    imageUrl: '/img/fleet/Turkish-Airlines-Boeing-787-9.jpeg',
}


const PlaneCardList: PlaneCardItem[] = [
    TurkishAirlines737Max8,
    InsertPlaneHere,
    InsertPlaneHere,
    InsertPlaneHere,
    InsertPlaneHere,
    InsertPlaneHere,
]

export default function TurkishAirlinesCards(){
    return PlaneCards(PlaneCardList);
}