import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Donor from './Donor';
import Hospital from './HospitalRegister';
import Homepage from './Homepage';
import Register from './Register';
import UserRegister from './UserRegister';
import Login from './Login';
import Patients from './Patients';
import DonorRegister from './DonorRegister';
import RecipientRegister from './RecipientRegister';
import organTestedReport from './organTestedReport';
import RecipientReport from './recipientreport';
import Transfer from './transfer';
import DonorHome from './DonorHome';
import RecipientHome from './RecipientHome';
import Historian from './Historian';
import ReportDisplay from './ReportDisplay';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/hospitalRegister' component={Hospital}/>
            <Route exact path='/donor' component={Donor}/>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/userregister' component={UserRegister}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/Patients' component={Patients}/>
            <Route exact path='/donorregister' component={DonorRegister}/>
            <Route exact path='/recipientregister' component={RecipientRegister}/>
            <Route exact path='/hospital/organTestedReport' component={organTestedReport}/>
            <Route exact path='/hospital/recipientreport' component={RecipientReport}/>
            <Route exact path='/hospital/transfer' component={Transfer}/>
            <Route exact path='/donorhome' component={DonorHome}/>
            <Route exact path='/recipienthome' component={RecipientHome}/>
            <Route exact path='/historian' component={Historian}/>
            <Route exact path='/:id/report' component={ReportDisplay}/>
        </Switch>
    </main>
)

export default Main;