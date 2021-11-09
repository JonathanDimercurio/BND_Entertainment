import { logger } from "firebase-tools/lib/logger";
import React from "react"
import "./Gameboard.modal.css"

export default class Gameboard extends React.Component
{


    m=16;
    n=10;
    

    moveImage = () =>{
        
    }


    constructor(props){
        super(props);  
        this.grid =  Array(this.m).fill().map(x=> Array(this.n).fill(<Square  m={this.m} n ={this.n}/>));
    }
    
    componentDidMount() {
        
    }

    render () {
        return (
        <div className="map" 
        style={{backgroundImage: "url("+this.props.location.state.MapName+")", 
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
        );
    }
} 


class Square extends React.Component 
{

    constructor(props)
    {
        super(props)

        this.state = {
            isSelected: false
        }
    }
    
    

    onclick = () =>{
        if (this.state.isSelected){
            this.setState({
                isSelected: false
              })
        } else {
        this.setState({
            isSelected: true
          })
        }
    }

    render(){
        return( 

            
            this.props.image ?
            <img src={this.props.image}  onClick={this.onclick} style={{position: "relative", display:"inline-block", width: 100/(this.props.m)+"%", height: 93/(this.props.n)+"%", border: "solid 1px black"}}/>
                :
            <div  onClick={this.onclick} style={{overflow: "hidden", position: "relative",display:"inline-block", width: 100/(this.props.m)+"%", height: 93/(this.props.n)+"%", border: "solid 1px black"}}>
                <div>
                    {this.state.isSelected ? 
                        <img src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTE4MDAzNDEwNzk1MjAyMDYy/jake-gyllenhaal-16242387-1-402.jpg"/>
                        :
                        ""
                    }
                    </div>
            </div>
                
            
            
        );
    }
}
