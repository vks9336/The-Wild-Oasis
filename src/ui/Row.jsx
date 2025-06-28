import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.type === 'horizontal' ? 'row' : 'column'};
  gap: ${(props) => (props.type === 'horizontal' ? '0' : '1.6rem')};
  justify-content: ${(props) =>
    props.type === 'horizontal' ? 'space-between' : 'initial'};
  align-items: ${(props) =>
    props.type === 'horizontal' ? 'center' : 'initial'};
`;

Row.defaultProps = {
  type: 'vertical',
};

export default Row;
