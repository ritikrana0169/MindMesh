import React, { useEffect, useState } from 'react'
import axios from "axios"
import {
    Box,
    Button,
    Center,
    Image,
    Select,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
  } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { data } from './data';
export const AdminUsers = () => {
  const [data,setData] = useState([])

  useEffect(()=>{
    getData()
  },[])

  const getData= async()=>{
      try {
        const res = await axios.get("http://localhost:7500/user/AllUsers")
        setData(res.data)
      } catch (error) {
        console.log(error)
      }
  }
    console.log(data)
  return (
   <div style={{ height: "84vh", width: "85vw" }}>
      {/* <Heading textAlign='center'>All Products Data</Heading> */}
      {/* <br/> */}
      <Center>
        <Select
          placeholder="Select Category"
        //   onChange={(e) => {
        //     setEndPoint(e.target.value);
        //     setPage(1);
        //   }}
        >
          <option value="Mern">Mern</option>
          <option value="Node">Node</option>
          <option value="Java">Java</option>
        </Select>
      </Center>
      <TableContainer>
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>S.No.</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Level</Th>
              <Th>Category</Th>
              <Th>Role</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
                data?.map((el)=>(
                    <Tr key={el._id}>
                        <Td>{el._id}.</Td>
                        <Td>{el.name}</Td>
                        <Td>{el.email}</Td>
                        <Td>{el.level}</Td>
                        <Td>{el.track}</Td>
                        <Td>{el.role}</Td>
                        {/* <Link to={`/edit/${1}`}>
                        <button>Edit</button>
                        </Link> */}
                    </Tr>
                ))
            }
          </Tbody>
        </Table>
      </TableContainer>
      
    </div>
  )
}