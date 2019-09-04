import React, {Component} from 'react';
import axios from 'axios';
import HistorianList from './HistorianList';

class Historian extends Component{

    constructor(){
        super();
        this.state = {
          historian: []
        }
    }

    componentWillMount(){
        this.getHistorian();
    }

    getHistorian(){
        axios.get('http://localhost:3002/api/system/historian')
          .then(response => {

            var historianList = response.data;

            this.setState({historian: historianList}, () => {

            })
        })
        .catch(err => console.log(err));
      }

    render() {
        const historianList = this.state.historian.map((hist, i) => {
            return(
              <HistorianList key={hist.transactionId} item={hist} />
            )
          })

        return (
            <div>
                <br />
                <h3> HISTORIAN</h3>
                <ul className="collection">
                {historianList}
                </ul>
             </div>
        )
    }

}

export default Historian;