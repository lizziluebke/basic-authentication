import React, { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import Container from './Container';

const Protected = ({history}) => {
  useEffect(
      () => {
          Auth.currentAuthenticatedUser().catch(
              () => {
                  history.push('/profile')
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