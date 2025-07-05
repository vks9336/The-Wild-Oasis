import styled from 'styled-components';
import { useUser } from '../features/authentication/useUser';

import Spinner from '../ui/Spinner';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isLoadingUser, isAuthenticated } = useUser();

  // 2. If there is no authenticated user, redirect to the /login page

  useEffect(
    function () {
      if (!isAuthenticated && !isLoadingUser) {
        navigate('/login');
      }
    },
    [isAuthenticated, isLoadingUser, navigate],
  );

  // 3. While loading show a spinner
  if (isLoadingUser)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. If there is a user render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
