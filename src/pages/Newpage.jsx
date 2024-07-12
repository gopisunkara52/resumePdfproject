import { Box, Center, Flex, Text } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux';


const Newpage = () => {
  const pdfUrl = useSelector((state)=>state?.auth?.pdfUrl);
  console.log(pdfUrl);
  return (
    <>
    <Flex
      direction={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      h='full'
    >
      <Center>
        <Text color={'#FF8C00'} fontSize={"30px"} as={"b"}>Page Not Found</Text>
      </Center>

      <Center>
        <Text as='b' fontSize={'15px'} color={'grey'}>
          {' '}
          We can't seem to find the page you're looking for.
        </Text>
      </Center>
    </Flex>
  </>
  )
}

export default Newpage