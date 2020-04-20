import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { DashboardProps, DashboardState } from './dashboard.types';
import Admin from '../../components/Admin/admin';
import DonateForm from '../../components/DonateForm/donateform';
import RequestForm from '../../components/RequestForm/requestForm';
import Profile from '../../components/Profile/profile';
import './dashboard.scss';

class Dashboard extends Component<DashboardProps, DashboardState> {
    state = {
        dashboard: '',
    };

    render() {
        const { user } = this.props.location.state;
        const { dashboard } = this.state;

        return (
            <section className="DASHBOARD">
                <div className="center">
                    <div className="left">
                        <div className="dashboardlogo"></div>
                        <div className="company">
                            <div className="company-name">
                                Merced County <br /> Food Bank
                            </div>
                            <div className="company-description">Welcome, Admin </div>
                        </div>
                        <div className="navigation">
                            <ul>
                                <li>
                                    <div className="homeicon">
                                        <Link to="/">Home</Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="contacticon">
                                        <button onClick={() => this.setState({ dashboard: '' })}>Profile</button>
                                    </div>
                                </li>
                                {user.role === 'admin' ? (
                                    <li>
                                        <div className="contacticon">
                                            <button onClick={() => this.setState({ dashboard: 'admin' })}>Admin</button>
                                        </div>
                                    </li>
                                ) : null}
                                <li>
                                    <div className="donateicon">
                                        <button onClick={() => this.setState({ dashboard: 'donate' })}>Donate</button>
                                    </div>
                                </li>
                                <li>
                                    <div className="requesticon">
                                        <button onClick={() => this.setState({ dashboard: 'request' })}>Request</button>
                                    </div>
                                </li>
                                <li>
                                    <div className="contacticon">Contact</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {(() => {
                    switch (dashboard) {
                        case 'donate':
                            return <DonateForm {...this.props} />;
                        case 'request':
                            return <RequestForm {...this.props} />;
                        case 'admin':
                            return <Admin />;
                        default:
                            return <Profile {...this.props} />;
                    }
                })()}
            </section>
        );
    }
}

export default Dashboard;