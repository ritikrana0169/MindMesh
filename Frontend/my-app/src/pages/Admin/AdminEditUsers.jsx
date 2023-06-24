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
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { data } from './data';
import { AiTwotoneEdit } from "react-icons/ai";
import { EditModal } from './EditModal';
export const AdminEditUsers = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:7500/user/AllUsers")
      console.log(res.data)
      setData(res.data)
    } catch (error) {
      console.log(error)
    }
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
              <Th>Level</Th>
              <Th>Category</Th>
              <Th>Role</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              data?.map((el) => (

                <Tr key={el._id}>
                  <Td>{el._id}.</Td>
                  <Td>{el.name}</Td>
                  <Td>{el.email}</Td>
                  <Td>{el.level}</Td>
                  <Td>{el.track}</Td>
                  <Td>{el.role}</Td>
                  <Td>
                    <Center>
                      {/* <Link to={`/admin/${el.id}`}> */}
                      {/* <Button
                        colorScheme="green"
                      > */}
                      <EditModal
                        id={el._id}
                        getData={getData}
                      />
                      {/* </Button> */}
                      {/* </Link> */}
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

