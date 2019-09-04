import React, {Component} from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Added from '@material-ui/icons/Loyalty';
import Tested from '@material-ui/icons/Done';
import Transplanted from '@material-ui/icons/Favorite';
import { Link } from 'react-router-dom';

class OrganListRecipient extends Component{
    constructor(props){
        super(props);
        this.state = {
            item:props.item
        }
    }


    render () {
        return(
            <VerticalTimeline>

            <br />
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={this.state.item.addTime}
                    iconStyle={{ background: 'rgb(212, 98, 72)', color: '#fff' }}
                    icon={<Added />}
                >
                    <h3 className="vertical-timeline-element-title" >Organ Added</h3>
                    <h4 className="vertical-timeline-element-subtitle">Organ Type : {this.state.item.name}</h4>
                    
                    Hospital : {(this.state.item.hospital).replace('resource:org.organ.net.Hospital#','')}
                        <br />
                    Organ ID : {this.state.item.organId}
                   
                </VerticalTimelineElement>

                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={this.state.item.testTime}
                iconStyle={{ background: 'rgb(209, 197, 67)', color: '#fff' }}
                icon={<Tested />}
                >
                <h3 className="vertical-timeline-element-title">Organ Tested</h3>
                <Link to={"/"+localStorage.ptspotter_recipientId+"/report"}>Click to View Report</Link>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={this.state.item.transplantTime}
                iconStyle={{ background: 'rgb(33, 176, 100)', color: '#fff' }}
                icon={<Transplanted />}
                >
                <h3 className="vertical-timeline-element-title">Organ Transplanted</h3>
                Donor : {(this.state.item.donor).replace('resource:org.organ.net.Donor#','')}
                    <br />
                <Link to={"/"+localStorage.ptspotter_donorId+"/report"}>Click to View Donor's Report</Link>
                </VerticalTimelineElement>

            </VerticalTimeline>
        )
    }
}

export default OrganListRecipient;