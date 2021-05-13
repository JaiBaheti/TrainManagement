import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";


export default function Routers() {
    return (<Router>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/dash">Dashboard</Link></li>
        </ul>
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/about"><About /></Route>
            <Route path="/dash"><Dashboard /></Route>
        </Switch>
    </Router>
    );
}
function Home() {
    return (
        <h2>Home Component</h2>
    )
}
function About() {
    return (
        <h2>About Component</h2>
    );
}

function Dashboard() {
    let { path, url } = useRouteMatch();
    return (<div>
        <h2>About Dashboard</h2>
        <ul>
            <li><Link to={`${url}/netflix`}>Netflix</Link></li>
            <li><Link to={`${url}/prime`}>Ama Prime</Link></li>
            <li><Link to={`${url}/apple`}>Apple Tv</Link></li>
        </ul>
        <Switch>
            <Route exact path={path}><h3>Please select channel</h3></Route>
            <Route path={`${path}/:channel`}><Channel /></Route>

        </Switch>
    </div>
    );
}
function Channel() {
    let { channel } = useParams();
    return (
        <h2>you selected {channel}</h2>
    );
}