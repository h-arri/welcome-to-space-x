import React, { useState } from 'react';
import styles from './Menu.scss';

const Menu = (props) => {
    const [selectedItem, setSelectedItem] = useState('history');
    const handleSelect = menuitem => {
        setSelectedItem(menuitem)
        props.handleSelect(menuitem);
    };

    return <section className={styles.menu}>
        <button className={styles.menuitem + ` ${selectedItem === 'history' ? styles.selected : ''}`}
                onClick={() => handleSelect('history')}><h2>History</h2></button>
        <button className={styles.menuitem + ` ${selectedItem === 'launches' ? styles.selected : ''}`}
                onClick={() => handleSelect('launches')}><h2>Launches</h2></button>
    </section>
};

export default Menu;
