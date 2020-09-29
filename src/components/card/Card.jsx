import React from "react";
import styles from './Card.scss';
import Reddit from '../../icons/reddit.png';
import Article from '../../icons/article.png';
import Wikipedia from '../../icons/wikipedia.png';
import Icon from "../icon/Icon";
import CardContent from "../card-content/CardContent";

const Card = (props) => {
    const {data, selected, onClick} = props;
    let className = styles.selectable + ` ${selected.includes(data.id) ? styles.selected : ''}`;

    return (<article className={styles.card}>
        <div className={className} onClick={onClick}>
<CardContent data={data} />
            <div className={styles.check}><span className={styles.checkmark}>✔</span></div>
        </div>
    </article>);
};

export default Card;
