import React, { useState, useEffect } from "react";
import { Container,Image,User } from './style'
import H1 from './../../components/title'
import Button from "../../components/button"
import  ContainerItens  from "./../../components/containerItens";
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import Avatar from "../../assents/avatar.svg";
import Arrow from '../../assents/arrow.svg'
import Trash from '../../assents/trash.png'


function Users() {
  //const users =[];

  const [users, setUsers] = useState([]);
  const History = useHistory()

 
 function goBackPage (){
  History.push("/");
 }

  useEffect(()=> {
    async function fetchUsers (){
    const { data: newUsers } = await axios.get("http://localhost:3001/users");
    setUsers(newUsers)
  
  }
  fetchUsers()

  }, [])


   async function deleteUser(userId) {
     await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter(users => users.id !== userId)
    setUsers(newUsers)
  }




  return <Container>
    <Image alt="logo-imagem" src={Avatar} />
    <ContainerItens isBlur={true}>
      <H1>Usuários</H1> 

      <ul>
        {users.map(user => (
          <User key={user.id}>
            <p>{user.name} </p> <p>{user.age}</p>
            <button onClick={() => deleteUser(user.id)}><img src={Trash} alt="Lata-de-lixo" /></button>
          </User>

        ))}
      </ul>
      <Button isBack={true} onClick={goBackPage} >
      <img alt="seta" src={Arrow} />Voltar
      </Button>

    </ContainerItens>



  </Container>
}

export default Users;