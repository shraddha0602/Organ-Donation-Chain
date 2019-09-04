import React, {Component} from 'react';
import axios from 'axios';
import OrganList from './OrganList';
import {Navigation} from './NavPatient';


class DonorHome extends Component{
    constructor(props) {
        super(props);
        this.state = {
            organs: []
        }
    }

    componentWillMount(){
        this.getOrgans();
    }

    getOrgans(){
        axios.get('http://localhost:3000/api/Organ?access+token='+localStorage.ptspotter_accessToken)
          .then(response => {
            var organList = [];

            organList = response.data.filter(function(i) {
                return i.donor === "resource:org.organ.net.Donor#"+localStorage.ptspotter_donorId;
            });

            this.setState({organs: organList}, () => {

            })
        })
        .catch(err => console.log(err));
      }

      render() {
        const organList = this.state.organs.map((organ, i) => {
            return(
              <OrganList key={organ.organId} item={organ} />
            )
        })
        return (
            <div>
             <div className="Nav">
                    <Navigation/>
                 </div>
                       
                        <div className="timeline">
                            {organList}
                            </div>
                       
            </div>
        )
    }

}
export default DonorHome;