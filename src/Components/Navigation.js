import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return(
        <>
          <div>
            <Link to="/">Home{' |'}</Link>
            <Link to="/fundtransfer">Fund Transfer{' |'}</Link>
            <Link to="/statement">Statement{' |'}</Link>
            <Link to="/contact">Contact</Link>   
          </div> 
        </>
      );
    }
           
export default Navigation;
