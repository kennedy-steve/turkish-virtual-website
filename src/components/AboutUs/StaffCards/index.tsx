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
    }: StaffCardItem,
) {
    return (
        <div className={clsx(styles.staffCard, 'shadow--md')}>
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
                    <div className="avatar__name">{name}</div>
                    <small className="avatar__subtitle">
                        <i>{position}</i>
                        <br/>
                        {bio}
                    </small>
                </div>
            </div>
        </div>
    )
}

export function StaffCards(
    staffCardList: StaffCardItem[],
    columns: string = 'col col--4'
) {
    return (
        
        <section className={styles.partnerCards}>
            <div className="row">
                {staffCardList.map(card => (
                    <div className={columns}>
                        <StaffCard
                            name={card.name}
                            position={card.position}
                            started={card.started}
                            bio={card.bio}
                            ifcUsername={card.ifcUsername}
                            imageSrc={card.imageSrc}
                            avatarSize={card.avatarSize}
                            key={card.ifcUsername}
                        />
                    </div>
                ))}
            </div>
        </section>
        
    )
}