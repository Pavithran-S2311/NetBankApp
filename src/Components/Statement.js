import React, {useEffect, useState} from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"
const Statement = () => {
    const [statment,setStatement]=useState([])
    useEffect(()=> {
        axios.get("http://localhost:3009/transactionget")
       .then(res =>{setStatement(res.data)})
      },[])
      console.log(statment)

    return(
        <div>
            <h2>Account Statements</h2>
            <table className='table'>
                <thead className='thead-dark'>
                  <tr>
                      <th >Date</th>
                      <th >Time</th>
                      <th >Account Name</th>
                      <th >Account No</th>
                      <th >Amount</th>
                  </tr>
                </thead>
                  {statment.map((data)=>{
                    return(
                      <tbody key={data.date}>
                      <tr >
                      <td>{data.Date}</td>
                      <td>{data.Time}</td>
                      <td>{data.AccountName}</td>
                      <td>{data.AccountNo}</td>
                      <td>{data.Amount}</td>
                    </tr>
                    </tbody>
                    )
                  })}
              </table>
          </div>
               
                   
    );
    
}

export default Statement;
