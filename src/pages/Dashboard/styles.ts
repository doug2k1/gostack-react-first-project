import styled, { css } from 'styled-components';
import { shade } from 'polished';

const green = '#04d361';
const textColor = '#3a3a3a';
const errorColor = '#c53030';

export const Title = styled.h1`
  font-size: 48px;
  color: ${textColor};
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

interface FormProps {
  hasError: boolean;
}

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    color: ${textColor};
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    border: 2px solid #fff;
    border-right: 0;

    ${({ hasError }) =>
      hasError &&
      css`
        border-color: ${errorColor};
      `}
    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: ${green};
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: 700;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, green)};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    padding: 24px;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
      }
    }

    svg {
      color: #cbcbd6;
      margin-left: auto;
    }
  }
`;

export const Error = styled.p`
  color: ${errorColor};
  margin-top: 10px;
`;
