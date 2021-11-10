import { logger } from "firebase-tools/lib/logger";
import React from "react"
import "./Gameboard.modal.css"

export default class Square extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    onclick = () =>{
        console.log("clicked on me");
    }

    render(){
        return(

            this.props.image ?
            <img src={this.props.image}  onClick={this.onclick} style={{position: "relative", display:"inline-block", width: 100/(this.props.m)+"%", height: 93/(this.props.n)+"%", border: "solid 1px black"}}/>
                :
            <div  onClick={this.onclick} style={{position: "relative",display:"inline-block", width: 100/(this.props.m)+"%", height: 93/(this.props.n)+"%", border: "solid 1px black"}} />


        );
    }
}
