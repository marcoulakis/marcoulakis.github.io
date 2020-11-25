import React from 'react';
import ReactDOM from 'react-dom';
import Choices from "../game_template/porta/poppy/p2/game_choice";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/tutorial.css";
import t2_0 from './t0p0d2.0';
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import poppy from '../img/personagens/poppy/original/normal/poppy.png'

export default class t2e1 extends React.Component{
    render(){    
        
        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/" component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/t0p0d2.0" component={t2_0}/>
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Choices />
                <h1 className= "question_0">Você entendeu agora?</h1>
                <Link onClick={link} to="t0p0d2.0">
                    <div className="choice_0">
                        <p className="choice_0t">Entendi</p>
                    </div>
                </Link>
                <Link onClick={link} to="t0p0d2.0">
                    <div className="choice_1">
                        <p className="choice_1t">Com certeza</p>
                    </div>
                </Link>
                
                <img src={poppy} className="load_b4"></img>

            </div>
        );
    }
}