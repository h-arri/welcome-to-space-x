import React from 'react';
import styles from "./CardContent.scss";
import Icon from "../icon/Icon";
import Reddit from "../../icons/reddit.png";
import Article from "../../icons/article.png";
import Wikipedia from "../../icons/wikipedia.png";
import YouTube from "../../icons/youtube.png";

const CardContent = (props) => {
    const {data} = props;
    const iconStyle = {margin: '4% 1% 0'};
    const titleStyle = styles.title + ' ' + (data.launch_success ? styles.success : styles.failure);

    return (<div className={styles.content}>
        <h1 className={titleStyle}>
            {data.title || `[${data.mission_name}]`}</h1>
        <h3 className={styles.location}>{data.launch_site?.site_name_long}</h3>
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
            {data.links.video_link && <a href={data.links.video_link}>
                <Icon icon={YouTube} alt="YouTube" style={iconStyle}/>
            </a>}
        </aside>
    </div>);
};

export default CardContent;
