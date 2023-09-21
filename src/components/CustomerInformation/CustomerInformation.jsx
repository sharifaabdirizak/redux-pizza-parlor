import { useState } from "react"
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function customInformation() {
    const [customerName, setCustomerName] = useState('');
    const [Address, setAddress] = useState('');
    const [City, setCity] = useState('');
    const [zipcode, setZipCode] = useState('')
}

const history = useHistory();
const dispatch = useDispatch();

const handleNameChange = (event) => {
    setOrderToAdd({...orderToAdd,
    customerName : event.target.value,
})};


const handleAddressChange = (event) => {
    setOrderToAdd({...orderToAdd,
    address : event.target.value,
})};

const handleCityChange = (event) => {
    setOrderToAdd({...orderToAdd,
    city : event.target.value,
})};

const handleZipcodeChange = (event) => {
    setOrderToAdd({...orderToAdd,
    zipcode : event.target.value,
})};


const handleDelivery = (event) => {
    setOrderToAdd({...orderToAdd,
    type : event.target.value,
})};


const setPickup = (event) => {
    event.preventDefault()
    console.log('orderToAdd')

    dipatch ({
        type: 'Set Customer',
        payload: orderToAdd
    }); history.push('/checkout')
}
    
