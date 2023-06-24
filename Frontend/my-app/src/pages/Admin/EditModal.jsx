import React, { useEffect, useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Input,
  } from '@chakra-ui/react'
import { AiTwotoneEdit } from 'react-icons/ai'
import axios from 'axios'

export const EditModal = ({id}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [data,setData] = useState("")
    useEffect(()=>{
        getData()
    },[])


    const handlechange=(e)=>{
        const {name,value} = e.target
        setData(prev=>{
            return {...prev , [name]:value}
        })
    }
    const getData = async()=>{
        axios.get(`https://reqres.in/api/users/${id}`).then((res)=>{
            setData(res.data.data)
        })
        .catch((err)=>{
            alert(err)
        })
    }

    const handlePatch=()=>{
        axios.patch(`https://reqres.in/api/users/${id}` , data)
        .then((res)=>{
            alert("Edited!")
            getData()
            console.log(res)
        })
        .catch((err)=>{
            alert(err)
        })
    }

    console.log(data)
    return (
        <div>
            <Button colorScheme="green" onClick={onOpen}><AiTwotoneEdit /></Button> 

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input type='text' name="first_name" value={data.first_name} onChange={handlechange} />
                        <Button onClick={handlePatch} position={"relative"} top={"2vh"} colorScheme='blue' >Edit</Button>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}
