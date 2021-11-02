import { HashRouter,BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import StarryNight from './Gallery/starry-night.js';
import GirlWithPearlEarring from './Gallery/girl-with-a-pearl-earring.js';
import Guernica from './Gallery/guernica.js';
import PenitentMagalene from './Gallery/penitent-magdalene.js';
import TheStormOnTheSeaOfGalilee from './Gallery/the-storm-on-the-sea-of-galilee.js';
import TheGreatWaveOffKanagawa from './Gallery/the-great-wave-off-kanagawa.js';
import VanGoghSelfPortrait from './Gallery/van-gogh-self-portrait.js';
import TheSleepingGypsy from './Gallery/the-sleeping-gypsy.js';
import TheLadyWithAnErmine from './Gallery/lady-with-an-ermine.js'
import TheNightCafe from './Gallery/the-night-cafe.js'
import MonaLisa from './Gallery/mona-lisa.js'
import TheBasketOfApples from './Gallery/the-basket-of-apples.js';
import TheBoyInTheRedVest from './Gallery/the-boy-in-the-red-vest.js';
import ArnolfiniPortrait from './Gallery/arnolfini-portrait.js';
import TheSwing from './Gallery/the-swing.js'

const Routes = () => {
    return(
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/starry-night" component={StarryNight}/>
                <Route exact path="/girl-with-a-pearl-earring" component={GirlWithPearlEarring}/>
                <Route exact path="/guernica" component={Guernica}/>
                <Route exact path="/penitent-magdalene" component={PenitentMagalene}/>
                <Route exact path="/the-storm-on-the-sea-of-galilee" component={TheStormOnTheSeaOfGalilee}/>
                <Route exact path="/the-great-wave-off-kanagawa" component={TheGreatWaveOffKanagawa}/>
                <Route exact path="/van-gogh-self-portrait" component={VanGoghSelfPortrait}/>
                <Route exact path="/the-sleeping-gypsy" component={TheSleepingGypsy}/>
                <Route exact path="/the-lady-with-an-ermine" component={TheLadyWithAnErmine}/>
                <Route exact path="/the-night-cafe" component={TheNightCafe}/>
                <Route exact path="/mona-lisa" component={MonaLisa}/>
                <Route exact path="/the-basket-of-apples" component={TheBasketOfApples}/>
                <Route exact path="/the-boy-in-the-red-vest" component={TheBoyInTheRedVest}/>
                <Route exact path="/arnolfini-portrait" component={ArnolfiniPortrait}/>
                <Route exact path="/the-swing" component={TheSwing}/>
            </Switch>
        </HashRouter>
    );
}

export default Routes;
