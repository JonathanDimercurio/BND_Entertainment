import { logger } from "firebase-tools/lib/logger";
import React from "react"
import "./Gameboard.modal.css"
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
                    {this.state.isSelected ? 
                        <div class="fill" style={{position: "relative", width: 100+"%", height: 100+"%", border: "solid 1px black" }}>
                            <img src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTE4MDAzNDEwNzk1MjAyMDYy/jake-gyllenhaal-16242387-1-402.jpg" alt="" style={{width: "100%", height: "100%"}}/>
                        </div>
                        :
                        ""    
                    }   
            </div>     
        );
    }
}
