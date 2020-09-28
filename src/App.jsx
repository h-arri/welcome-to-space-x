import React from 'react';
import ReactDom from 'react-dom';
import styles from './App.scss';
import Card from "./components/card/Card";

const App = () => {
    return (<>
        <header className={styles.header}><h2>Welcome to SpaceX!</h2></header>
        <main className={styles.container}>
            <Card title="History"/>
            <Card title="History"/>
            <Card title="History"/>
            <Card title="History"/>
            <Card title="History"/>
        </main>
    </>);
};

ReactDom.render(<App/>, document.querySelector("#root"));
