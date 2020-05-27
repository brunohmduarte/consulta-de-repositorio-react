import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  color: #333;
`

export const Container = styled.div`
  width: 100%;
  max-width: 991px;
  margin: 0 auto;
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: sans-serif;
`

export const ListItem = styled.li`
  background: #333;
  color: white;
  margin: .5rem 0;
  padding: .5rem;
`

export const LinkHome = styled(Link)`
  display: block;
  width: 5rem;
  text-align: center;
  text-decoration: none;
  margin: 2rem auto;
  padding: .5rem 0;
  background-color: #333;
  color: white;
  `