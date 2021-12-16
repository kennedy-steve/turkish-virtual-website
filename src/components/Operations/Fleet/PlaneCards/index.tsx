import React from 'react';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export type PlaneCardItem = {
    model: string,
    make: string,
    livery: string,
    description: JSX.Element,
    imageUrl: string,
}

function PlaneCard({
    model,
    make,
    livery,
    description,
    imageUrl,
    }: PlaneCardItem
) {
    return (
        <div className="col col--4">
            <div className={styles.planeCard}>
                <div className="card">
                    <div className="card__image">
                        <img
                            className={styles.planeCardImage}
                            src={imageUrl}
                            alt={model}
                            title={model}
                        />
                    </div>
                    <div className="card__body">
                        <h3>{make} {model}</h3>
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function PlaneCards(
    planeCardList
) {
    return (
        
        <section className={styles.partnerCards}>
            <div className="row">
                {planeCardList.map(card => (
                    <PlaneCard
                        model={card.model}
                        make={card.make}
                        livery={card.livery}
                        description={card.description}
                        imageUrl={card.imageUrl}
                    />
                ))}
            </div>
        </section>
        
    )
}