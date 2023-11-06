import axios from 'axios';
import './DisplayItem.css';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function DisplayItem(props){

    const purchaseItem = () => {
        console.log(`Purchase request for ${props.item.id}`);
        axios.put(`/shoppinglist/${props.item.id}`).then((response) => {
            console.log(`${props.item.name} purchased`);
            props.getShoppingList();
        }).catch((error) => {
            console.log('PUT error', error);
            alert('Something went wrong trying to buy this item');
        })
    };
        
    const removeItem = () => {
        console.log('item to remove:', props.item.id);
        axios.delete(`/shoppinglist/${props.item.id}`).then((response) => {
            console.log('you successfully deleted your item');
            props.getShoppingList()
        }).catch((error) => {
            console.log(`DELETE ERROR`, error);
            alert('your item was not deleted');
        })   
    }

    const purchased = () => {
        if(props.item.purchased === true){
            return <>Item Purchased</>
        }
        else if(props.item.purchased === false){
            return <Button variant="contained" onClick={purchaseItem}>Buy</Button>
        }
    }

        return(
            <div className={props.item.purchased ? 'purchased' :'incart'}>
                <p className="name">{props.item.name}</p>
                <p>Quantity Needed: {props.item.quantity}</p>
                <p>Unit: {props.item.unit}</p>
                <p>{purchased(props.item.purchased)}</p>
                <Button variant="contained" onClick={removeItem}>Remove</Button>
            </div>

        );

}

export default DisplayItem;
