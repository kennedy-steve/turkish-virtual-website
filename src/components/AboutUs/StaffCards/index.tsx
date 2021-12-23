import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export type StaffCardItem = {
    name: string,
    position: string,
    started: string,
    bio: JSX.Element,
    ifcUsername: string,
    imageSrc: string,
    avatarSize: 'avatar__photo--lg' | 'avatar__photo--xl',
}

function getInfiniteFlightCommunityProfile(ifcUsername: string): string {
    const infiniteFlightCommunityBaseUrl = 'https://community.infiniteflight.com/u/';

    return `${infiniteFlightCommunityBaseUrl}${ifcUsername}`;
}

function StaffCard({
    name,
    position,
    started,
    bio,
    ifcUsername,
    imageSrc,
    avatarSize,
    }: StaffCardItem
) {
    return (
        <div className="col col--4">
            <div className={styles.staffCard}>
                <div className="avatar">
                    <a
                        className={clsx('avatar__photo-link avatar__photo', avatarSize)}
                        href={getInfiniteFlightCommunityProfile(ifcUsername)}
                    >
                        <img
                        alt={name}
                        src= {imageSrc}
                        />
                    </a>
                    <div className="avatar__intro">
                        <div className="avatar__name">{name} - {position}</div>
                        <small className="avatar__subtitle">
                            {bio}
                        </small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function StaffCards(
    staffCardList: StaffCardItem[]
) {
    return (
        
        <section className={styles.partnerCards}>
            <div className="row">
                {staffCardList.map(card => (
                    <StaffCard
                        name={card.name}
                        position={card.position}
                        started={card.started}
                        bio={card.bio}
                        ifcUsername={card.ifcUsername}
                        imageSrc={card.imageSrc}
                        avatarSize={card.avatarSize}
                    />
                ))}
            </div>
        </section>
        
    )
}