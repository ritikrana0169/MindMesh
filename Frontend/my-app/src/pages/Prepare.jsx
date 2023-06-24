import { Box, Button, Text, Textarea } from '@chakra-ui/react';
import { BsRecordCircle } from 'react-icons/bs';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';

const Prepare = () => {
  const [data, setData] = useState('');
  const [questions, setQuestions] = useState([]);
  const [ques, setQues] = useState('');
  const [i, setI] = useState(2);
  const navigate = useNavigate();
  const [ans, setAns] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setData(e.target.value);
  };

  const handleClick = () => {

    if (data.trim().split(/\s+/).length < 10) {
        alert('Please enter at least 10 words.');
        return;
      }

    setI((prevI) => prevI + 1);

    axios
      .post('http://localhost:7500/exercise/compare', {
        question: questions[i],
        answer: data,
      })
      .then((res) => {
        setAns((prevAns) => [...prevAns, res.data.data]);
        console.log(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });

    setData('');
    setQues(questions[i]);
    console.log(ans)
  };

  useEffect(() => {
    axios
      .post('http://localhost:7500/exercise/getquestions', {
        track: 'MERN',
        level: 'beginner',
      })
      .then((res) => {
        setQuestions(res.data.data);
        setQues(res.data.data[i]);
        console.log(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (i >= 7) {
      alert('Preparation done');
      navigate('/dashboard');
    }
  }, [i, navigate]);

  console.log(ans)

  return (
    <Box>
      <Navbar />
      <Box border="1px solid gray" borderRadius="10px" w="80%" m="20px auto" p="20px">
        <Box>
          <Text w="96%" fontSize="3xl" margin="auto" p="20px" textAlign="left">
            Question {ques}
          </Text>
          <Textarea
            onChange={handleChange}
            value={data}
            w="95%"
            placeholder="Answer"
            height="270px"
            resize="none"
            fontSize="md"
            padding="4"
          />
        </Box>
        <Button marginTop="20px" leftIcon={<BsRecordCircle />} colorScheme="green" variant="outline">
          Record
        </Button>
      </Box>
      <Button disabled={i >= 7} onClick={handleClick} marginTop="30px" colorScheme="blue" variant="outline">
        Submit
      </Button>
      <Footer />
    </Box>
  );
};

export default Prepare;
