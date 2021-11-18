import { logger } from "firebase-tools/lib/logger";
import React from "react"
import "./Gameboard.modal.css"
import {useHistory} from 'react-router-dom'
import Square from "./Square"



export default class Gameboard extends React.Component
{
    m=10;
    n=10;
    

    moveImage = () =>{
        
    }


    constructor(props){
        super(props);  
        this.grid =  Array(this.m).fill().map(x=> Array(this.n).fill(<Square  m={this.m} n ={this.n}/>));
        
    }
    
    componentDidMount() {
        
    }

    componentWillMount() {

    }


    render () {
        return (
        <div>
            <div className="map" 
            style={{backgroundImage: "url("+this.props.history.location.state.MapName+")", 
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                overflow: "hidden",
            }}
            >
                {this.grid.map((row,key)=>{
                    row.map( ( index,i_key )=> { return index } )
                    return row})}
                <img src={this.props.mapName} className="img" />
            </div> 
            <div style={{position:"absolute", justifyContent:"end", top:"92%", left:"9%"}}>
                <button onClick={() => {
                            this.props.history.push('\add-token', {});
                        }
                }>
                    Add Token
                </button> 
            </div>
        </div>
        );
    }
} 


