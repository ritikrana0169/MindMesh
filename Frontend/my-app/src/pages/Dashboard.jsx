import { Box, Button, HStack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';


const Dashboard = () => {

  const quotes = [
    {title:"Programming today is a race between software engineers striving to build bigger and better idiot-proof programs and the Universe trying to produce bigger and better idiots. So far, the Universe is winning."},
    {title:"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."},
   {title:" Web development is difficult, only then it is fun to do. You just have to set your standards. If it were to be easy, would anyone do it?"}
  ]

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(quotes[currentQuoteIndex].title);
  const [isQuoteVisible, setIsQuoteVisible] = useState(false);
  const [emaildata, setEmaildata] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      setIsQuoteVisible(false);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setCurrentQuote(quotes[currentQuoteIndex].title);
    setIsQuoteVisible(true);
  }, [currentQuoteIndex]);

  const username = localStorage.getItem('name');

  useEffect(()=>{
    axios.post(`http://localhost:7500/exercise/get-report`,{email:localStorage.getItem("email")}).then((res)=>{setEmaildata(res.data.report)
    console.log(res.data)  
  }).catch((err)=>console.log(err))
  },[])
    
  return (
    <div>
        <Navbar/>
        <Box w={"98%"}
        h={"140px"}
        m={"10px"}
        borderRadius={"7px"}
        backgroundColor={"rgb(24, 0, 37)"}
        transition="opacity 0.5s ease-in-out" // Apply transition effect
        opacity={isQuoteVisible ? 1 : 0} 
        _hover={{ opacity: 0.8 }}  >
          <Text p={"10px"} textAlign={"left"} color={"white"}>{currentQuote}</Text>
        </Box>
        <HStack>
        <Box h={"70vh"} w={"70%"}>
            <Box textAlign={"left"} h={"auto"} m={"15px"} borderRadius={"7px"} bgColor={"rgb(225,233,250)"} >
            {/* {answer ?<Text p={"10px"} fontSize='3xl' >Hi {username.toUpperCase()}!, Resume your journey</Text> : <Text p={"10px"} fontSize='3xl' >Hi {username.toUpperCase()}!,You haven't started your preparation</Text>} */}
            <Text p={"10px 10px 0px 10px"}>You'll notice a significant improvement in your understanding as you begin to prepare </Text>
            <Text padding={"0px 10px 10px 10px "}>using Mindmesh...</Text>
            <Button m={"10px"} marginBottom={"100px"} colorScheme='blue' variant='outline'>
                <Link to="/prepare">
                    Start Preparation
                </Link>
            </Button>
            </Box>
            </Box>
              <Box borderRadius={"7px"} mt={"-140px"} h={"280px"} w={"25%"} bgColor={"black"}>
                <Text color={"rgb(151, 170, 213)"} p={"10px"} fontSize='3xl' >Your Last Score</Text>
                <Text color={"rgb(177, 190, 218)"} p={"10px 10px 0px 10px"} fontSize='8xl'>{emaildata}/100</Text>
                {/* <Text color={"rgb(180, 191, 213)"} textAlign={"right"} pr={"10px"} fontSize='3xl'>Out of 100%</Text> */}
              </Box> 
        </HStack>
        <Footer/>
    </div>
  )
}

export default Dashboard