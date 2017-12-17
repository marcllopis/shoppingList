import React, { Component } from 'react';

import AddNewItem from '../molecules/AddNewItem';
import ListOfItems from '../molecules/ListOfItems';


class AddItem extends Component {
    render() {
        return (
            <div className="">
                <h2>What do you need to buy?</h2>
                <AddNewItem
                
                />
                <ListOfItems

                />
            </div>
        );
    }
}

export default AddItem;
