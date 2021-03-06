import React from 'react'
import "../../../css/main.css";
import "../../../css/game_choice.css";
import poppy from "../../../img/personagens/poppy/normal/poppy.png";
import pitagoras from '../../../img/itens/pitagoras.png';


export default class Box extends React.Component{
    render(){
        return(
            <div id="all_game_run_es" className="all_game">
                <img src={pitagoras} className="pitagoras"/>
                <div className="poppy-1-container">
                    <img className="poppy-1" src={poppy} />
                </div>
                <div className="name"></div>
                <div className="textArea"></div>
            </div>       
        );
    } 
}
