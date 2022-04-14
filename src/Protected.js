import React, { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import Container from './Container';
import { useNavigate } from 'react-router-dom'; 

const Protected = () => {
  
    const nav = useNavigate(); 
    useEffect(
      () => {
          Auth.currentAuthenticatedUser().catch(
              () => {
                  nav('/profile')
                }
            );
        }
        ,[]
    );
  return (
      <Container>
          <h1>
              Protected route
          </h1>
      </Container>
  );
}

export default Protected;