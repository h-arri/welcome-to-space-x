import React from "react";
import styles from './Card.scss';
import Reddit from '../../icons/reddit.png';
import Article from '../../icons/article.png';
import Wikipedia from '../../icons/wikipedia.png';
import Icon from "../Icon/Icon";

const Card = (props) => {
    const {data, selected, onClick} = props;
    let className = styles.selectable + ` ${selected.includes(data.id) ? styles.selected : ''}`;
    const iconStyle = {margin: '4% 1% 0'}

    return (<article className={styles.card}>
        <div className={className} onClick={onClick}>
            <div className={styles.content}>
                <h1 className={styles.title}>{data.title}</h1>
                <p className={styles.details}>{data.details}</p>
                <aside className={styles.links}>
                    {data.links.reddit && <a href={data.links.reddit}>
                        <Icon icon={Reddit} alt="Reddit" style={iconStyle}/>
                    </a>}

                    {data.links.article && <a href={data.links.article}>
                        <Icon icon={Article} alt="Article" style={iconStyle}/>
                    </a>}
                    {data.links.wikipedia && <a href={data.links.wikipedia}>
                        <Icon icon={Wikipedia} alt="Wikipedia" style={iconStyle}/>
                    </a>}
                </aside>
            </div>
            <div className={styles.check}><span className={styles.checkmark}>✔</span></div>
        </div>
    </article>);
};

export default Card;
