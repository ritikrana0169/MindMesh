import React from 'react'
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
  } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
// MdDelete
import { MdDelete } from "react-icons/md";
import { data } from './data';
export const AdminDeleteUsers = () => {
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
                data.map((el)=>(
                    <Tr key={el.id}>
                    <Td>{el.id}.</Td>
                        <Td>{el.Name}</Td>
                        <Td>{el.Email}</Td>
                        {/* <Td>1</Td>
                        <Td>Mern</Td>
                        <Td>User</Td> */}
                        <Td>
                        <Center>
                            <Button
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


