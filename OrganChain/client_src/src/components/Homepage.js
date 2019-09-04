import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Navigation} from './Navbar';
import ParticleComponent from './ParticleComponent';

class Homepage extends Component{
    render() {
      return (
        <div>
        <ParticleComponent />
          <div className="Nav">
            <Navigation/>
             
          </div>
        <div>
        <div 
        style={{
          position: "absolute",
          top: '40%',
          left: '37%',
          color: '#ccc',
          fontFamily: "Arial Black",
        }}
        >
        <h1>Organ Donation Chain</h1>
        </div>
      
        <div  style={{
          position: "absolute",
          top: "50%",
          color: '#ccc',
          fontFamily: "Palatino",
          textAlign: "center",
          textDecorationStyle : "wavy"
          
        }} >
       <div className="text">
       <h5 > With the introduction of Blockchain Technology in Organ Transplant chain, we aim to introduce a system
           which would offer transparency, immutability, tamper-proof and secure transactions. The journey of each Organ, from donor to the 
           recipient would be tracked down and Blockchain would ensure no information is altered by the participants and no organs are sold
            to illegal markets. The authenticity of each organ could be proved with records in the ledger of concerning parties.
            
         </h5>
       </div>
         </div>
         </div>
        </div>

      )
    }
}

export default Homepage;