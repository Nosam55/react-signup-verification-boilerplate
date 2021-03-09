import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import { Upload } from './Upload';

function Augusta({ match }){
    const { path } = match;

    return (
        <div className="p-4">
            <div className="container">
                <Switch>
                    <Route exact path={path} component={Welcome}/>
                    <Route path ={`${path}/upload`} component={Upload}/>
                </Switch>
            </div>
        </div>
    );
}

function Welcome({ match }){
    const { path } = match;
    return (
        <div>
            <h1>Upload an Augusta</h1>
            <Link to={`${path}/upload`}>Upload a Picture</Link>
        </div>
    );
}

export { Augusta };