import React from 'react';
import styles from './Card.scss';

const Card = (props) => {
    const { title } = props;
    return <article className={styles.card}><h2>{title}</h2></article>
};

export default Card;
