import mindmesh from "../Logo/mindmesh.png"

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    HStack,
} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleClick = () => {
        const payload = {
            email,
            password
        }
        axios.post(`http://localhost:7500/user/login`, (payload)).then((res) => {
            console.log(res.data)
        localStorage.setItem("token",res.data.accessToken)
        localStorage.setItem("name",res.data.user.name)
        localStorage.setItem("email",res.data.user.email)
        localStorage.setItem("track",res.data.user.track)
        localStorage.setItem("level",res.data.user.level)
            if(res.data.accessToken){
                navigate("/dashboard")
            }
        }).catch((err)=>alert(err))
    }

    return (
        <HStack>
            <div className="w-4/12 bg-gray-200 h-screen">
                <h1 className="text-left pl-16 mt-16 text-2xl font-bold leading-9 tracking-tight text-gray-900" >MindMesh</h1>
                <h1 className="text-left pl-16 font-medium text-lg text-blue-600">To learn and know </h1>
                <h1 className="text-left pl-16 font-medium text-lg text-blue-600">more about MindMesh, Please Signup!!</h1>
                <img className="mt-20" src={mindmesh} alt="img" />
            </div>
            <Flex
                minH={'100vh'}
                ml={"20%"}
                align={'center'}
                justify={'center'}
                >
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                        <Text fontSize={'lg'} color={'gray.600'}>
                            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
                        </Text>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                            </FormControl>
                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                    <Checkbox>Remember me</Checkbox>
                                    <Link color={'blue.400'}>Forgot password?</Link>
                                </Stack>
                                <Button
                                    onClick={handleClick}
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
                                    Sign in
                                </Button>
                                <Stack pt={6}>
                <Text align={'center'}>
                  New user? <NavLink to="/signup" style={{color:"blue"}}>Sign Up</NavLink>
                </Text>
              </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </HStack>
    );
}