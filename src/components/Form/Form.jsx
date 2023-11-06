// form component
import React from 'react';
import axios from 'axios';
import './Form.css';
// import * as React from 'react';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

function Form(props) {

    const clickHandler = (event) => {
        // axios POST will go here
        event.preventDefault();
        let itemName = document.querySelector('#item-name').value;
        document.querySelector('#item-name').value = "";
        let itemQuantity = document.querySelector('#item-quantity').value;
        document.querySelector('#item-quantity').value = "";
        let itemUnit = document.querySelector('#item-unit').value;
        document.querySelector('#item-unit').value = "";
    
        let newItem = {
            name: itemName,
            quantity: itemQuantity,
            unit: itemUnit
        };
    
        axios.post('/shoppinglist',(newItem)).then((response) =>{
            console.log("Response from server: ", response);
            props.getShoppingList();
        })
        .catch((error) => {
            console.error("Error in POST '/shoppinglist' in Form component", error);
            alert("Error in POST '/shoppinglist' in Form component. See console.")
        })
    }


    // main module function
    return (
        <div id="input-form">
            <h2>Add an item:</h2>
            <h5 className='required'>* denotes required</h5>
            <form onSubmit={clickHandler}>
                <label for="item-name" className="required">*</label><input required id="item-name" type="text" placeholder="item name..."/>
                <label for="item-quantity" className="required">*</label><input required id="item-quantity" type="number" placeholder="quantity..."/>
                <input id="item-unit" type="text" placeholder="unit of measure..."/>
                <button>Add Item</button>
            </form>
        </div>
    );
}

export default Form;