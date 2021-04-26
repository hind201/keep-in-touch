import React from 'react';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Contact from './Component/Contact'
import Getcontact from './Component/Getcontact'
import Reponse from './Component/Reponse'

const App = () => {
return(
    
<Router>
    <Switch>
        <Route exact path="/"component={Contact}/>
        <Route exact path="/contact"component={Getcontact}/>
        <Route exact path="/reponse/:id"component={Reponse}/>
    </Switch>
</Router>
);
}

export default App;