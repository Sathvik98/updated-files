import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Login from './components/Login'; 
import Hospital from './components/Hospital'; 
import {Route, BrowserRouter as Router} from 'react-router-dom'; 
import Register from './components/Register'; 
import Anganwadi1st from './components/Anganwadi1st';
import Anganwadi from './components/Anganwadi';
import School1st from './components/School1st';
import School from './components/School';
import Orphanage from './components/Orphanage';


import Complaint from './components/Complaint';
// import Combine from './components/Combine';
// import Complaint from './components/Complaint';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={Login} />
            <Route path="/hospital" component={Hospital} />
            <Route path="/register" component={Register} />
         <Route path="/anganwadi1st" component={Anganwadi1st} />
         <Route path="/anganwadi" component={Anganwadi} />
         <Route path="/school1st" component={School1st} />
         <Route path="/school" component={School} />
         <Route path="/orphanage" component={Orphanage} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
