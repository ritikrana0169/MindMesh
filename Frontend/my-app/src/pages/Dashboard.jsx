import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';




const Dashboard = () => {
    
  return (
    <div>
        <Navbar/>
        <Box h={"70vh"}>
            <Box textAlign={"left"} w={"70%"} h={"auto"} m={"15px"} borderRadius={"7px"} bgColor={"rgb(225,233,250)"} >
            <Text p={"10px"} fontSize='3xl' >You haven't started your preparation</Text>
            <Text p={"10px 10px 0px 10px"}>You'll notice a significant improvement in your understanding as you begin to prepare </Text>
            <Text padding={"0px 10px 10px 10px "}>using Mindmesh...</Text>
            <Button m={"10px"} marginBottom={"100px"} colorScheme='blue' variant='outline'>
                <Link to="/prepare">
                    Start Preparation
                </Link>
            </Button>
            </Box>
            <Box>
                
            </Box>
        </Box>
        <Footer/>
    </div>
  )
}

export default Dashboard