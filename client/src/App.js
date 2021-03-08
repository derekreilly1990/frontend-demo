import React, {useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/NavBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";


import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    app: {
        display: 'flex',
        flexDirection: 'column'
    },
    contentContainer: {
        display: 'flex',
        height: '100%'
    },
    content: {
        flex: '1 1 100%',
        background: 'linear-gradient(#dfe9ec 30%, #fff 90%)',
        borderRadius: 3,
        color: 'white',
        height: '100%',
        flexWrap: 'wrap'
    },
});


function App() {
    useEffect(() => {
        document.title = "Smart Hardware Store"
    });

    const classes = useStyles();

    return (
    <div className={"App"}>
        <Router>
          <header >
              <Navbar />
          </header>
            <div className={classes.contentContainer}>
                <div className={classes.content}>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/about' component={About}/>
                    </Switch>
                </div>
            </div>
        </Router>
    </div>
  );
}

export default App;
