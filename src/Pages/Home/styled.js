import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Content = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  color: #333;
`

export const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: .25rem;
  width: 100%;
  max-width: 50%;
  height: 2rem;
  padding: .5rem 1rem;
  font-size: 1.1rem;

  &:focus, &active {
    outline: none;
    box-shadow: none;
  }

  @media screen and (max-width: 767px) {
    max-width: 70%;
  }
`
export const Button = styled.button`
  margin-top: 1rem;
  padding: .5rem 1rem;
  font-size: 1.1rem;
  border: 1px solid #333;
  border-radius: .25rem;
  color: white;
  background-color: #333;
  cursor: pointer;

  &:focus, &active {
    outline: none;
    box-shadow: none;
  }
`

export const ErrorMsg = styled.span`
  display: block;
  font-size: .65rem;
  font-weight: 600;
  color: red;
  margin-top: 1rem;
`