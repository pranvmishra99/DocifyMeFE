"use client";

import { useEffect } from 'react'
import { APIService } from '../services/loginService'

const ChildComponent: React.FC = () => {

    useEffect(() => {
        // Attach event handlers here
        const handleClick = () => {
            const username = "pmronnie"
            const password = "pmronnie99"
            const apiService = new APIService()
            console.log(apiService.validateUserLogin(username, password))
          }
    
        // Attach event listener
        document.addEventListener('click', handleClick);
    
        // Cleanup
        return () => {
          // Remove event listener on component unmount
          document.removeEventListener('click', handleClick);
        };
      }, []); 

  return (
    <button >Increment</button>
  );
};

export default ChildComponent;
