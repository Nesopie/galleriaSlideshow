import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import StarryNight from './Gallery/starry-night.js';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/starry-night" component={StarryNight}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
