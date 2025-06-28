import styled, { css } from 'styled-components';

// const text = 'text-align: center;';

const Heading = styled.h1`
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.type === 'h2' &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

    ${(props) =>
    props.type === 'h3' &&
    css`
      font-size: 2rem;
      font-weight: 400;
    `}

    line-height: 1.4;
  color: #000000;
`;

export default Heading;
