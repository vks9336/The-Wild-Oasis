import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import ButtonIcon from '../../ui/ButtonIcon';
import Spinner from '../../ui/Spinner';
import { useLogout } from './useLogout';

function Logout() {
  const { logout, isLoggingOut } = useLogout();

  if (isLoggingOut) return <Spinner />;
  return (
    <ButtonIcon disabled={isLoggingOut} onClick={logout}>
      <HiArrowRightOnRectangle />
    </ButtonIcon>
  );
}

export default Logout;
