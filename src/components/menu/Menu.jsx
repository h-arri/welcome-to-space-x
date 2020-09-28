import React from 'react';
import styles from './Menu.scss';

const Menu = (props) => {
    const handleSelect = menuitem => {
        props.handleSelect(menuitem);
    };

    return <section className={styles.menu}>
        <button className={styles.menuitem} onClick={() => handleSelect('history')}><h2>History</h2></button>
        <button className={styles.menuitem} onClick={() => handleSelect('launches')}><h2>Launches</h2></button>
    </section>
};

export default Menu;
