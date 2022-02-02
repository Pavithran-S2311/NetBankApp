import React, {useState} from 'react';

const Home = () => {
     const[person] = useState({
         name1: "ASHOK",
         dob: "07/08/1995",
         cust_id: "25687563",
         account_no:"311722854001",
         account_type:"SAVINGS",
         email: "ashok123@gmail.com",
         address: "No.327,North Street,Chennai-600020"
       } );
     return(
        <div>
            <h2>Account Details:</h2>
            <b>Name: {person.name1}</b> <br/> 
            <b>Date of Birth: {person.dob}</b> <br/>
            <b>Customer ID: {person.cust_id}</b> <br/>
            <b>Account Number: {person.account_no}</b> <br/>
            <b>Account Type: {person.account_type}</b> <br/>
            <b>Email: {person.email}</b> <br/> 
            <b>Address: {person.address}</b>
        </div>
    );
}

export default Home;
