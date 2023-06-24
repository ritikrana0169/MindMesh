import React, { useEffect, useState } from 'react'
import axios from "axios"
import {
    Box,
    Button,
    Center,
    Icon,
    Image,
    Select,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    useToast,
  } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
// MdDelete
import { MdDelete } from "react-icons/md";
import { data } from './data';
export const AdminDeleteUsers = () => {
  const [data,setData] = useState([])
  const toast = useToast();
  useEffect(()=>{
    getData()
  },[])

  const getData= async()=>{
      try {
        const res = await axios.get("http://localhost:7500/user/AllUsers")
        console.log(res.data)
        setData(res.data)
      } catch (error) {
        console.log(error)
      }
  }

  const deleteAdmin= async(id)=>{
    axios.delete(`http://localhost:7500/user/deleteuser/${id}`).then((res)=>{
      toast({
        title: `Admin Removed`,
        status:"error",
        duration: 1000,
        isClosable: true,
      });
      getData()
      console.log(res)
    }).catch((err)=>{
      alert(err)
    })
  }
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
              {/* <Th>Level</Th>
              <Th>Category</Th>
              <Th>Role</Th> */}
            </Tr>
          </Thead>
          <Tbody>
            {
                data?.map((el)=>(
                    <Tr key={el._id}>
                    <Td>{el._id}.</Td>
                        <Td>{el.name}</Td>
                        <Td>{el.email}</Td>
                        {/* <Td>1</Td>
                        <Td>Mern</Td>
                        <Td>User</Td> */}
                        <Td>
                        <Center>
                            <Button
                            onClick={()=>{deleteAdmin(el._id)}}
                            colorScheme="red"
                            >
                            <MdDelete />
                            </Button>
                        </Center>
                        </Td>
                    </Tr>
                ))
            }
          </Tbody>
        </Table>
      </TableContainer>
      
    </div>
  )
}


