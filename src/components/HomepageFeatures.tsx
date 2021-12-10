import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Join',
    image: '/img/undraw_going_up_ttm5.svg',
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore 
        magna aliqua.
      </>
    ),
  },
  {
    title: 'Explore',
    image: '/img/undraw_best_place_r685.svg',
    description: (
      <>
        Something about destinations, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore 
        magna aliqua.
      </>
    ),
  },
  {
    title: 'Partner',
    image: '/img/undraw_travel_together_re_kjf2.svg',
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore 
        magna aliqua.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
