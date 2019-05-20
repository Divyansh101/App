import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';



const RouterComponent = () => {
    return(
        <Router>
            <Scene 
                key = "root" >
                    <Scene 
                        key = "homepage" 
                        component = {HomePage} 
                        title = "Home" 
                        initial
                    />
                    <Scene 
                        navTransparent 
                        key = "detailsPage" 
                        component = { DetailsPage } 
                        title = "" 

                    />
            </Scene>
        </Router>
    )
}

export default RouterComponent;