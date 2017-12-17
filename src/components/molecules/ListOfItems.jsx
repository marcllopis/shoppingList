import React, { Component } from 'react';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

import SingleItem from '../atoms/SingleItem';
import Button from '../atoms/Button';



// deconstruct object for props

class ListOfItems extends Component {


    render() {

        const {items} = this.props.state

        return (
            <div>

                {items.length > 0 ?
                    <h4>Here you have all your items</h4>
                    :
                    <h4>Add some items</h4>
                }

                <ul>
                    {items.map((item, i) => {
                        return (
                            <li key={i}>
                                <SingleItem
                                    item={item}
                                />
                                <Button
                                    item={item}
                                    actions={this.props}
                                    place={"list"}
                                    action={"add"}
                                    text={"Add to shopping list"}
                                />
                                <Button
                                    item={item}
                                    actions={this.props}
                                    place={"list"}
                                    action={"remove"}
                                    text={"Remove"}
                                />

                            </li>
                        )
                    })}
                </ul>
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




export default connect(mapStateToProps, mapDispatchToProps)(ListOfItems);

