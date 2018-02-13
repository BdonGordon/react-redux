﻿import * as React from 'react';
import { HomeProps } from '../containers/HomeContainer';

/*interface SampleProps {
    users: Array<any>;
}*/

class Home extends React.Component<HomeProps.IProps, null> {
    constructor(props: any) {
        super(props);
    }

    createList() {
        return this.props.users.map((user) => { //this was a problem since users property from SampleProps is option and CAN be undefined ? , therefore falsified strictNullChecks in tsconfig
            return (
                <li key={user.id} onClick={() => this.props.selectUser(user)} >
                    {user.first} {user.last}
                </li>
            );
        });
    }

    render() {
        return (
            <div className="App">
                <h4> Username List: </h4>
                <ul>
                    {this.createList()}
                </ul>
                <hr />
                <h4> User Details: </h4>
            </div>
        );
    }
}

export default Home;