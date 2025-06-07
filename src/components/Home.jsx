import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'


function createData(id, todo, completed,userId) {
  return { id, todo, completed ,userId};
}


  

const Home = () => {
  
  const[users,setUsers]=useState([]);
    useEffect(()=>{
        axios.get('https://dummyjson.com/todos').then((res)=>{
            setUsers(res.data.todos);
        }).catch((error)=>{
            console.log(error);

        });

    },[]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">To Do Item</TableCell>
            <TableCell align="right">Completion Status</TableCell>
            <TableCell align="right">User ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.userId}
              </TableCell>
              <TableCell align="right">{user.todo}</TableCell>
              <TableCell align="right">{user.completed.toString()}</TableCell>
              <TableCell align="right">{user.userId}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Home