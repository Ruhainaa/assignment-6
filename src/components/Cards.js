import React, { Component } from 'react'
import axios from 'axios'

export class Cards extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             coronavirus:[]
        }
    }
    componentDidMount = () =>{
        axios.get('https://corona.lmao.ninja/v2/countries/gh').then((res) => {
            this.setState({
                coronavirus: res.data,
            });
    }).catch((err) => {
        console.log(err);
    })
}
    render() {
        return (
            <div>
  <div className="header">
    <div>
      <p id="logo">P</p>
    </div>
    <div className="text">
      <p>PaSE Covid-19 App</p>
    </div>
  </div>
  <div className="dashboard">
    <div className="cases">
      <p>Cases <i className="fa fa-caret-up" /></p>
      <span>{this.state.coronavirus.cases}</span>
    </div>
    <div className="cases">
      <p>Recovered <i className="fa fa-caret-down fa-1.5x" /></p>
      <span>{this.state.coronavirus.recovered}</span>
    </div>
    <div className="cases">
      <p>Active <i className="fa fa-caret-up" /></p>
      <span>{this.state.coronavirus.active}</span>   
    </div>
    <div className="cases">
      <p>Death <i className="fa fa-caret-up" /></p>
      <span>{this.state.coronavirus.deaths}</span>
    </div>
  </div>
  </div>

        
        )
    }
}

export default Cards
