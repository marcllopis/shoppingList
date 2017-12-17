import React, { Component } from 'react';
import '../App.css'

import AddItem from './organisms/AddItem';
import DisplayList from './organisms/DisplayList';


import { connect } from 'react-redux';

class MyShopping extends Component {

    render() {
        return (
            <div className="flexing">
                <AddItem />
                <DisplayList />
            </div>
        );
    }
}


function mapStateToProps(state) {
    return state
}


export default connect(mapStateToProps)(MyShopping);