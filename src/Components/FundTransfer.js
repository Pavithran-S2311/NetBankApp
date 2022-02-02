import React, { useState } from 'react';
import axios from 'axios';

const FundTransfer = () => {
      
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds(); 
    const [transaction,setTransaction]=useState({
        todayDate:date,
        todayTime:time,
        accountName:'',
        accountNo:'',
        Amount:''
})

const getTransaction = (event) => 
{
    setTransaction(()=>({...transaction,[event.target.name]:event.target.value}));
    console.log(event.target.name)
}

const getSubmit = (event) =>
    {
        axios.post("http://localhost:3009/transaction",
        {
            Date:transaction.todayDate,
            Time:transaction.todayTime,
            AccountName:transaction.accountName,
            AccountNo:transaction.accountNo,
            Amount:transaction.Amount,  
        }).then((res)=>console.log(res.status))
        console.log(transaction.todayDate)
        console.log(transaction.todayTime)
        console.log(transaction.accountName)
        console.log(transaction.accountNo)
        // console.log(transaction.Amount)
        alert('Money Transferred')
    }

    return(
        <div>
            <h2>Fund Transfer</h2>
            <div>
                <label>Date:</label>
                <input 
                    type="text" 
                    onChange={getTransaction}
                    name="todayDate"
                    value={date}>
                </input>
            </div>
            <div>
            <label>Time:</label>
                <input 
                    type="text" 
                    onChange={getTransaction}
                    name="todayTime"
                    value={time}>
                </input>
            </div>
            <div>
                <label>Account No:</label>
                <input 
                    type="text" 
                    onChange={getTransaction}
                    name="accountNo">
                </input>
            </div>
            <div>
                <label>Account Name:</label>
                <input 
                    type="text" 
                    onChange={getTransaction}
                    name="accountName">
                </input>
            </div>
            <div>
                <label>Amount:</label>
                <input 
                    type="text"  
                    onChange={getTransaction}
                    name="Amount">
                </input>
            </div>
            <button onClick={getSubmit}>Transfer</button>
        </div>
    )

}
export default FundTransfer;