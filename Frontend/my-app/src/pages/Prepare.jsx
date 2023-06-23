import { Box, Button, Text, Textarea } from '@chakra-ui/react'
import {BsRecordCircle} from "react-icons/bs"
import React, { useState } from 'react'

const Prepare = () => {

    const [data,setData] = useState("");
    const ques = "What is Javascript";
    const handleChange = (e)=>{
        e.preventDefault();
        setData(e.target.value);
    }
    const handleClick = ()=>{
        console.log(data);
    }

  return (
    <Box>
        <Box border={"1px solid gray"} borderRadius={"10px"} w={"80%"} m={"20px auto"} p={"20px"} >
            <Box>
                <Text w={"96%"} fontSize='3xl' margin={"auto"} p={"20px"} textAlign={"left"}>Question : {ques}?</Text>
                <Textarea
                onChange={handleChange}
                w={"95%"}
                placeholder='Answer'
                height="270px"
                resize="none"
                fontSize="md"
                padding="4"
                />
            </Box>
            <Button marginTop={"20px"} leftIcon={<BsRecordCircle/>} colorScheme='green' variant='outline' >Record</Button>            
        </Box>
        <Button onClick={handleClick} marginTop={"30px"} colorScheme='blue' variant='outline' >Submit</Button>
    </Box>
  )
}

export default Prepare