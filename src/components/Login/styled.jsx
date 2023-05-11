import styled from 'styled-components';
import heroBg from '../../assets/img/heroBg.jpg';
import mobileHeroBg from '../../assets/img/mobileHeroBg.jpg';

// style for main container
export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${heroBg});
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 414px) {
    background-image: url(${mobileHeroBg});
    background-size: 140%;
    background-position: left bottom;
  }
`;

// style for form container
export const FormContainer = styled.div`
  width: 508px;
  height: 558px;
  background-color: rgba(24, 50, 107, 0.5);
  backdrop-filter: blur(15px);
  border-radius: 14px;

  @media screen and (max-width: 600px) {
    width: 320px;
    height: 460px;
  }
`;

// style for the form itself
export const FormFields = styled.form`
  display: flex;
  flex-direction: column;
  margin: 120px 48px;

  @media screen and (max-width: 600px) {
    margin: 62px 37px;
  }
`;

// style for form title
export const Title = styled.h1`
  color: #72efdb;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  font-size: 35px;
  font-weight: bold;
`;

// style for input field
export const Field = styled.input`
  border: none;
  background: none;
  border-bottom: 1px solid #e9e9f0;
  margin-bottom: 44px;
  height: 31px;
  color: #ffffff;
  font-size: 17px;

  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  ::placeholder {
    color: #ffffff;
  }
`;

// access button style
export const Access = styled.button`
  width: 204px;
  height: 46px;
  border: none;
  border-radius: 24px;
  background: #72efdb;
  margin: 30px 101px 0;
  color: #0b1741;
  font-size: 19px;
  font-weight: medium;
  cursor: pointer;

  &:hover {
    transition: all 0.1s ease;
    transform: translate(2%) scale(0.8);
  }

  @media screen and (max-width: 600px) {
    margin: 20px 15px 0;
  }
`;
