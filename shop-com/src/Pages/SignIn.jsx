import {Button,Flex,FormControl,FormLabel,Heading,Input,Stack,Box,Text} from '@chakra-ui/react';
import {useNavigate} from 'react-router'
import {Link } from 'react-router-dom'
import { useState } from 'react';

  export default function SplitScreen() {

    const signupData=JSON.parse(localStorage.getItem('signup'))
    console.log(signupData)
    const [formData, setFormData] = useState({});

    const navigate=useNavigate();

      const handelChange=(e)=>{
          setFormData({...formData,[e.target.name]: e.target.value});
      }

    const handelSubmit=(e)=>{
            e.preventDefault();
            localStorage.setItem("login",JSON.stringify(formData));
            handelCheck(formData);
          }

     const handelCheck=(formData)=>{
      if( signupData.email==formData.email && signupData.password==formData.password){
        alert("Login successfull")
        navigate("/")
      }
      else{
        alert("Validation Faild Worng credential")
      }
     }     
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1}  alignItems="center" justifyContent="center"  gap="45px" ml="100px" >
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'} textAlign="left">Sign in </Heading>
            <form onSubmit={handelSubmit}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="yourname@example.com" name="email" onChange={handelChange} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password"  placeholder="Please enter a minumum of 7 characters" name="password" onChange={handelChange} 
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack direction={{ base: 'column', sm: 'row' }} align={'start'}>
                
                {/* <Link color={'black.500'}>Forgot password?</Link> */}
              </Stack>
              <Button background="#3b3b52" color="white" borderRadius="15px" type="submit"  _hover={{
                    bg: '#242830',
                  }} >
                Sign in
              </Button>
            </Stack>
            </form>
          </Stack>
          <Box width="40%" textAlign="left" mt="-25px">
                <Heading fontSize="xl">Don't have an account?</Heading>
                <Text>With a SHOP.COM account, you can enjoy the following benefits: up to 50% Cashback on eligible purchases, redeem discount coupons, order status and history, saved payment options and addresses, exclusive emails and more. </Text>
               
               
                    <Box mt="15px" fontWeight="bold" border="1px solid black" width="60%" textAlign="center" height="30px" borderRadius="15px">
                    <Link to="/signup">
                     Create your new account
                     </Link>
                    </Box>
                   
         </Box>
        </Flex>
        
      </Stack>
    );
  }