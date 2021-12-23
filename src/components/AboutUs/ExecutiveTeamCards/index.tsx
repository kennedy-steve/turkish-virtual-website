import React from 'react';

import {
    StaffCardItem,
    StaffCards,
} from '../StaffCards';

// Avatar size for executive team should all be the same
const avatarSizeForExecutiveTeam = 'avatar__photo--xl';

const ChiefExecutiveOfficer: StaffCardItem = {
    name: 'Ran',
    position: 'Chief Executive Officer',
    started: 'Sometember 2020',
    bio: (
        <>
            Ran is cool, cool, cool. Yep. Filler text.
        </>
    ),
    ifcUsername: 'ran',
    imageSrc: '/img/about-us/ran.png',
    avatarSize: avatarSizeForExecutiveTeam,   
};

const ChiefOperatingOfficer: StaffCardItem = {
    name: 'Bosnia',
    position: 'Chief Operating Officer',
    started: 'Sometember 2020',
    bio: (
        <>
            Bosnia is cool, cool, cool. Yep. Filler text.
        </>
    ),
    ifcUsername: 'Cpt_Bosnia',
    imageSrc: '/img/about-us/ran.png',
    avatarSize: avatarSizeForExecutiveTeam,   
};

const ExecutiveTeamCardList: StaffCardItem[] = [
    ChiefExecutiveOfficer,
    ChiefOperatingOfficer,
    ChiefExecutiveOfficer,
    ChiefOperatingOfficer,
];

export default function ExecutiveTeamCards() {
    return StaffCards(
        ExecutiveTeamCardList,
        'col col--6',
    );
}