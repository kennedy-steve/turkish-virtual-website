import React from 'react';

import {
    StaffCardItem,
    StaffCards,
} from '../StaffCards';

// Avatar size for management team should all be the same
const avatarSizeForManagementTeam = 'avatar__photo--lg';

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
    avatarSize: avatarSizeForManagementTeam,   
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
    avatarSize: avatarSizeForManagementTeam,   
};

const ManagementTeamCardList: StaffCardItem[] = [
    ChiefExecutiveOfficer,
    ChiefOperatingOfficer,
    ChiefExecutiveOfficer,
    ChiefOperatingOfficer,
];

export default function ManagementTeamCards() {
    return StaffCards(
        ManagementTeamCardList,
        'col col--4',
    );
}