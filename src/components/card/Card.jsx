import React from "react";
import styles from './Card.scss';
import CardContent from "../card-content/CardContent";

const Card = (props) => {
    const {data, selected, onClick, type} = props;
    let className = styles.selectable + ` ${selected[type].includes(data.id ? data.id : data.flight_number) ? styles.selected : ''}`;

    return (<article className={styles.card}>
        <div className={className} onClick={onClick}>
<CardContent data={data} />
            <div className={styles.check}><span className={styles.checkmark}>✔</span></div>
        </div>
    </article>);
};

export default Card;
