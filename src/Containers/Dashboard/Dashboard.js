import React, {Component} from 'react';

import css from './Dashboard.module.css';

class Dashboard extends Component {


    render() {
        return(
            <main className={css.main}>
                <div className={css.h2Div}>
                    <h2>Welcome back,&nbsp;<span className={css.h2Span}>Admin</span></h2>
                </div>

                <div className={css.chartsDiv}>

                    <div className={css.latestDiv}>Latest</div>
                    <div className={css.performanceDiv}>Performance</div>
                    <div className={css.storageDiv}>Storage</div>
                    <div className={css.notificationDiv}>Notifications</div>
                    <div className={css.ordersDiv}>Orders</div>

                </div>


            </main>
        );
    }
}

export default Dashboard;