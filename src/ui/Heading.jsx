import styled, { css } from 'styled-components';
// const text = 'text-align: center;

const Heading = styled.h1`
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
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

    ${(props) =>
    props.type === 'h4' &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    `}

    line-height: 1.4;
  color: ${(props) => props.theme.text};
`;

export default Heading;
