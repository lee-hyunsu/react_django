import React, { Component } from 'react';
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from './Room';
import { Grid, Button, ButtonGroup, Typography } from '@material-ui/core';
import {
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Link, 
    Redirect, 
} from "react-router-dom";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    renderHomePage(){
        return(
            <Grid container spacing={3}>
                <Grid item xs={12} align="center"></Grid>
                <Grid item xs={12} align="center"></Grid>
            </Grid>
        );
    }

    render() {
        return(
        <Router>
            <Switch>
                <Route exact path='/'>
                    <p>This is the home page</p>
                </Route>
                <Route path='/join' component={RoomJoinPage} />
                <Route path='/create' component={CreateRoomPage} />
                <Route path='/room/:roomCode' component={Room} />
            </Switch>
        </Router>
        );
    }
}