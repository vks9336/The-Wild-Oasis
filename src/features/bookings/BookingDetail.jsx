import styled from 'styled-components';

import BookingDataBox from './BookingDataBox';
import Row from '../../ui/Row';
import Heading from '../../ui/Heading';
import Tag from '../../ui/Tag';
import ButtonGroup from '../../ui/ButtonGroup';
import Button from '../../ui/Button';
import ButtonText from '../../ui/ButtonText';
import Spinner from '../../ui/Spinner';

import { useMoveBack } from '../../hooks/useMoveBack';
import { useBooking } from './useBooking';
import { useNavigate } from 'react-router-dom';
import { useCheckout } from '../check-in-out/useCheckout';
import Modal from '../../ui/Modal';
import { useDeleteBooking } from './useDeleteBooking';
import ConfirmDelete from '../../ui/ConfirmDelete';

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { booking, isLoading } = useBooking();
  const { checkout, isCheckingOut } = useCheckout();
  const { deleteBooking, isDeleting } = useDeleteBooking();

  const moveBack = useMoveBack();

  const statusToTagName = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'silver',
  };
  const navigate = useNavigate();

  if (isLoading || !booking) return <Spinner />;
  const { status, id: bookingId } = booking;

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status || '']}>
            {status?.replace('-', ' ')}
          </Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === 'unconfirmed' && (
          <Button
            size="medium"
            variation="primary"
            onClick={() => navigate(`/checkin/${bookingId}`)}
          >
            Check in
          </Button>
        )}

        {status === 'checked-in' && (
          <Button
            size="medium"
            variation="primary"
            onClick={() => checkout({ bookingId })}
            disabled={isCheckingOut}
          >
            Check out
          </Button>
        )}
        <Modal>
          <Modal.Open opens="delete">
            <Button size="medium" variation="danger">
              Delete Booking
            </Button>
          </Modal.Open>
          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="booking"
              disabled={isDeleting}
              onConfirm={() => {
                deleteBooking(bookingId);
                navigate(-1);
              }}
            />
          </Modal.Window>
        </Modal>
        <Button size="medium" variation="primary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
