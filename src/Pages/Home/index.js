import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

import '../../App.css';
import * as S from './styled';

export default function Home() {
  const history = useHistory()
  const [usuario, setUsuario] = useState("")
  const [ error, setError ] = useState(false)

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(res => {
        const repositories = res.data
        const repositoriesNames = []

        repositories.map((repository) => {
          return repositoriesNames.push(repository.name)
        })

        localStorage.setItem("repositoriesNames", JSON.stringify(repositoriesNames))

        setError(false) 
        history.push('/repositories')
        
      })
      .catch(err => {
        setError(true)
        setUsuario("")
      })
  }

  return (
    <S.HomeContainer>
      <S.Content>
        <S.Title>Consulta de Repositório no Github</S.Title>
        <S.Input type="text" className="inputUsuario" value={usuario} placeholder="Digite o usuário do Github..." onChange={e => setUsuario(e.target.value)} />
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Content>
      { error ? <S.ErrorMsg>Oooops! Parece que ocorreu um erro. Tente novamento mais tarde.</S.ErrorMsg> : '' }
    </S.HomeContainer>
  );
}
