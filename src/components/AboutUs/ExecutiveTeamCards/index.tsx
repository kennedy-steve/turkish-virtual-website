import React from 'react';

import {
    StaffCardItem,
    StaffCards,
} from '../StaffCards';

const ChiefExecutiveOfficer: StaffCardItem = {
    name: 'Ran',
    position: 'Chief Executive Officer',
    started: 'January 2020',
    bio: (
        <>
            Ran is cool
        </>
    ),
    ifcUsername: 'ran',
    imageSrc: '/img/about-us/ran.png',
    avatarSize: 'avatar__photo--lg',   
};

const ExecutiveTeamCardList: StaffCardItem[] = [
    ChiefExecutiveOfficer,
    ChiefExecutiveOfficer,
    ChiefExecutiveOfficer,
    ChiefExecutiveOfficer,
];

export default function ExecutiveTeamCards() {
    return StaffCards(ExecutiveTeamCardList);
}