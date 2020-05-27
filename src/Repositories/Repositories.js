import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import * as S from './Styled';

export default function Repositories() {

  const history = useHistory()
  const [ repositories, setRepositories ] = useState([]);

  useEffect(() => {
    let repositoriesNames = localStorage.getItem("repositoriesNames")
    
    // Tratamento de erro
    if (repositoriesNames == null) {
      history.push("/")
    }
    
    repositoriesNames = JSON.parse(repositoriesNames)
    setRepositories(repositoriesNames)
    localStorage.clear()
  }, [history])

  return (
    <S.Container>
      <S.Title>Repositórios</S.Title>
      <S.List>
        { 
          repositories.map((repository) => {
            return (
              <S.ListItem>{ repository }</S.ListItem>
            )
          }) 
        }
      </S.List>
      <S.LinkHome to="/">Voltar</S.LinkHome>
    </S.Container>
  )
}