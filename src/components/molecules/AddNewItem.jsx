import React, { Component } from 'react';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

import Form from '../atoms/Form';
import Button from '../atoms/Button';

class AddNewItem extends Component {

    state = {
        item: ""
    }
    getItem = (item) => {
        this.setState({ item })
    }

    render() {        

        return (
            <div className="wrapper-inline">
                <Form
                    item={this.state.item}
                    getItem={this.getItem}
                />
                <Button
                    item={this.state.item}
                    place={"storage"}
                    action={this.props.addItem}
                    text={"Add to storage"}
                />
            </div>
        );
    }
}



function mapStateToProps(state) {
    return {
        state
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...actions }, dispatch)
}




export default connect(mapStateToProps, mapDispatchToProps)(AddNewItem);
