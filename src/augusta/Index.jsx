import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import { Upload } from './Upload';
import { View } from './View';

function Augusta({ match }){
    const { path } = match;

    return (
        <div className="p-4">
            <div className="container">
                <Switch>
                    <Route exact path={path} component={Welcome}/>
                    <Route path={`${path}/upload`} component={Upload}/>
                    <Route path={`${path}/view`} component={View}/>
                </Switch>
            </div>
        </div>
    );
}

function Welcome({ match }){
    const { path } = match;
    return (
        <div>
            <h1>Welcome to Augusta</h1>
            <p><Link to={`${path}/upload`}>Upload a Picture</Link></p>
            <p><Link to={`${path}/view`}>View Uploaded Augustas</Link></p>
        </div>
    );
}

export { Augusta };