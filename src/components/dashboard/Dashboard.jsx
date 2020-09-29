import styles from "./Dashboard.scss";
import Menu from "../menu/Menu";
import { connect, useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { getHistoryApi } from "../../store/actions/history";
import Card from "../card/Card";
import { getLaunchesApi } from "../../store/actions/launches";

const Dashboard = () => {
    const dispatch = useDispatch();
    const history = useSelector(state => state.history.history);
    const launches = useSelector(state => state.launches.launches);

    const [show, setShow] = useState('history');
    const [selected, setSelected] = useState([]);

    const handleShow = (menuitem) => {
        switch (menuitem) {
            case 'history':
                setShow('history');
                if (history.length <= 0) {
                    dispatch(getHistoryApi());
                }
                break;
            case 'launches':
                setShow('launches');
                if (launches.length <= 0) {
                    dispatch(getLaunchesApi());
                }
                break;
            default:
                return;
        }
    };

    const handleItemSelected = (index) => {
        let selectedIndexes = [...selected];
        let selectedIndex = selectedIndexes.indexOf(index);
        if (selectedIndex > -1) {
            selectedIndexes.splice(selectedIndex, 1);
        } else {
            selectedIndexes.push(index);
        }
        setSelected([...selectedIndexes]);
        // these selected items can then be shared using a FloatingButton component
    };


    return (<>
        <header className={styles.header}><h2>Welcome to SpaceX!</h2></header>
        <section className={styles.menu}>
            <Menu handleSelect={handleShow}/>
        </section>
        <main className={styles.wrapper}>{
            show === 'history' ? history.map(item => (
                    <Card key={item.id} selected={selected} data={item}
                          onClick={() => handleItemSelected(item.id)} type='history'/>))
                : launches.map(item => (
                    <Card key={item.flight_number} selected={selected} data={item}
                          onClick={() => handleItemSelected(item.id)} type='launches'/>))
        }
        </main>
    </>)
};

export default connect()(Dashboard);