import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Select,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios';
  
  export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [name,setName] = useState("");
    const [email,setEmail]  = useState("");
    const [password,setPassword] = useState("");
    const [track,setTrack] = useState("");
    const [level,setLevel] = useState("");

    const handleClick = ()=>{
        const data = {
            name,email,password,track,level
        }
        axios.post(`http://localhost:7500/user/signUP`,(data)).then((res)=>console.log(res.data))
    }
  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input value={name} onChange={(e)=>setName(e.target.value)} type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input value={password} onChange={(e)=>setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <HStack>
              <Box w={"49%"} >
                <FormControl id="track" isRequired>
                    <FormLabel>Track</FormLabel>
                    <Select onChange={(e)=>setTrack(e.target.value)} placeholder='Select Option'>
                        <option value='mern'>MERN</option>
                        <option value='java'>JAVA</option>
                        <option value='node'>NODE</option>
                    </Select>
                </FormControl>
                </Box>
                <Box w={"49%"}>
                <FormControl id="track" isRequired>
                    <FormLabel>Level</FormLabel>
                    <Select onChange={(e)=>setLevel(e.target.value)} placeholder='Select Option'>
                        <option value='1'>Begineer</option>
                        <option value='2'>Intermediate</option>
                        <option value='3'>Advance</option>
                    </Select>
                </FormControl>
                </Box>
                </HStack>
              <Stack spacing={10} pt={2}>
                <Button
                  onClick={handleClick}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link to="/" color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }