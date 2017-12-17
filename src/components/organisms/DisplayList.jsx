import React, { Component } from 'react';

import SingleItem from '../atoms/SingleItem';

import { connect } from 'react-redux';


class DisplayList extends Component {
    render() {
        
        return (
            <div className="">
                <h2>THIS IS THE LIST</h2>
                
                <ul>
                    {this.props.itemsOnShopingList.map((item, i) => {
                        return (
                            <li key={i}>
                                <SingleItem
                                    item={item}
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
    return state
}

export default connect(mapStateToProps)(DisplayList);