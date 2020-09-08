import React, { Component } from 'react'

export class TableData extends Component {
    render() {
        return (
             <div class="data">
            <table border="1px">
                <thead>
                    <tr>
                        <th>Countries</th>
                        <th>Active Cases</th>
                        <th>Recovered</th>
                        <th>Total Death</th>
                        <th>Total Cases</th>
                    </tr>
                </thead>
                <tbody id="tbd"> 
                    <div id="loading"></div>
                   
                </tbody>
            </table>

            <div> 
                <div className="tips">
                    <p>Health Tips</p>
                </div>
                <div className="tips">
                    <p>News &amp; Updates</p>
                    <img src="./img/covid19 image.jpg" alt="scientist in a lab" width="195px" height="100px"></img>
                </div>
            </div>
        </div>
            
    

        )
    }
}

export default TableData
