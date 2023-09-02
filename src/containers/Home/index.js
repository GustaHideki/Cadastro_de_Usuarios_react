import React, { useState, useRef, } from "react";
import { Container, Image,InputLabel, Input,} from './style'
import axios from 'axios'
import H1 from '../../components/title'
import ContainerItens from "./../../components/containerItens"
import Button from "../../components/button"
import People from "../../assents/people.svg";
import Arrow from '../../assents/arrow.svg'
import {useHistory} from 'react-router-dom'



function App() {
  //const users =[];

  const [users, setUsers] = useState([]);
  const InputName = useRef();
  const InputAge = useRef();
  const History = useHistory();


  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: InputName.current.value,
      age: InputAge.current.value
    });
    console.log(newUser)


    setUsers([...users, newUser])

    History.push("/usuarios")

}

  return <Container>
    <Image alt="logo-imagem" src={People} />
    <ContainerItens>
      <H1>olá!</H1>

      <InputLabel>Nome:</InputLabel>
      <Input ref={InputName} placeholder="Nome" />

      <InputLabel>Idade:</InputLabel>
      <Input ref={InputAge} placeholder="Idade" />

      <Button  onClick={addNewUser}>Cadastrar <img alt="seta" src={Arrow} /></Button>


    </ContainerItens>

  </Container>

}

export default App;