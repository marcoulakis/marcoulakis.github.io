import React from 'react';
import ReactDOM from 'react-dom';
import Game from "../templates/porta/poppy/p1/game_talk";
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import "../css/tutorial.css";
import Menu from "../another/menu";
import ena from '../game_level/f0p0d000';
import Typical from '../typical';
import refresh from "../img/icons/refresh.svg";
import TheBackgroundScreams from '../audio/pages/TheBackgroundScreams';
import sign from '../img/logos/sign_standard.png'
import escada from '../img/cenarios/escada.png'
export default class t3 extends React.Component{
    render(){
        
        function refreshPage(){
            window.location.reload();
        } 


        function link() {
            ReactDOM.render(
                <Router>
                    <Route path="/game/f/" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/game/f/f0p0d000" component={ena} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        function link1() {
            ReactDOM.render(
                <Router>
                    <Route path="/menu" exact={false} component={TheBackgroundScreams} />
                    <Switch>
                        <Route path="/menu" component={Menu} />
                    </Switch>
                </Router>,
                document.getElementById('root')
            );
        }

        return(
            <div className= "all_game">
                <Game />
                <Link onClick={link} to="/game/f/f0p0d000">
                    <div id="b1" className="Play_">
                        <p className="back_">Jogar</p>
                    </div>
                </Link>
                <div className="bar_game___"/>
                <Link onClick={link1} to="/menu">
                    <div id="n1" className="B_menu">
                        <p className="next">Voltar para o menu</p>
                    </div>
                </Link>
                <h1 className="poppy">Poppy</h1>
                <img onClick={refreshPage} src={refresh} alt="refresh"  className="refresh_text"></img>
                <Typical
                steps={['Certo!',750, 
                'Então parece que você tá pronto para jogar!', 10]}
                loop={1}
                wrapper="p"
                className="texto"
                />
                <p className="texto"></p>

                <img src={sign} className="load_b4"></img>
                <img src={escada} className="load_b4"></img>

            </div>
        );
    }
}