import { logger } from "firebase-tools/lib/logger";
import React from "react"
import "./Gameboard.modal.css"

export default class Gameboard extends React.Component
{
    m=10;
    n=10;
    

    moveImage = () =>{
        
    }

    composeGrid = () =>{

    }

    constructor(props){
        super(props);  
        this.grid =  Array(this.m).fill(<Square m={this.m} n ={this.n} />).map(x => Array(this.n).fill(<Square m={this.m} n ={this.n} />));
    }
    
    componentDidMount() {

    }

    render () {
        return (
        <div className="map" 
        style={{backgroundImage: "url("+this.props.location.state.MapName+")", 
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            overflow: "hidden",
        }}
        >
            {/* {this.grid.map((row)=>{row.map(index=>{return(<>index</>)})})} */}
            {this.grid.map(row=>{
                row.map(index=>{ return index})
                return row})}
            {/*<img src={this.props.mapName} className="img" />*/}
        </div> 
        );
    }
} 


class Square extends React.Component 
{
    constructor(props)
    {
        super(props)
    }

    render(){
        return( 
            this.props.image ?
            <img src={this.props.image}  style={{position: "relative", display:"inline-block", width: 100/(this.props.m)+"%", height: 80/(this.props.n)+"%", border: "solid 1px black"}}/>
                :
            <div  style={{position: "relative",display:"inline-block", width: 100/(this.props.m)+"%", height: 80/(this.props.n)+"%", border: "solid 1px black"}} />
            
        );
    }
}
