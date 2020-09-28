import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from "react-redux";
import store from "./store";
import Dashboard from "./components/dashboard/Dashboard";

const App = () => {
    return (<Provider store={store}>
        <Dashboard/>
    </Provider>);
};

ReactDom.render(<App/>, document.querySelector("#root"));
