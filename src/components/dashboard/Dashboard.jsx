import styles from "./Dashboard.scss";
import Menu from "../menu/Menu";
import { connect, useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { getHistoryApi } from "../../store/actions/history";
import Card from "../content/Card";

const Dashboard = () => {
    const dispatch = useDispatch();
    const history = useSelector(state => state.history.history);
    const loading = useSelector(state => state.history.loading);

    const [selected, setSelected] = useState([]);

    const handleShow = (menuitem) => {
        console.log('menu ', menuitem);
        switch (menuitem) {
            case 'history':
                dispatch(getHistoryApi());
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
    };

    return (<>
        <header className={styles.header}><h2>Welcome to SpaceX!</h2></header>
        <section className={styles.menu}>
            <Menu handleSelect={handleShow}/>
        </section>
        <main className={styles.wrapper}>{
            history.map(item => (
                <Card key={item.id} selected={selected} data={item}
                      onClick={() => handleItemSelected(item.id)}/>))
        }
        </main>
    </>)
};

export default connect()(Dashboard);