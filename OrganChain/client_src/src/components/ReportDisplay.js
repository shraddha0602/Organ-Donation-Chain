import React, {Component} from 'react';
import report from './pathrep03.jpg';

class ReportDisplay extends Component{
    render() {
        return (
            <div style={{marginLeft:'15%'}}>
                <img src={report} alt="golf" />
            </div>
        )
    }
}

export default ReportDisplay;