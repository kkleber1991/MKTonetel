import { Box, Heading, Image, Text } from '@chakra-ui/core'
import React from 'react'

export default function ImgHome() {
    return (
        <Box
            mb={15}
            backgroundImage="url('/home-bg.jpg')"
            backgroundPosition="center"
            bgRepeat="no-repeat"
            h={[300, 400, 600]}
            objectFit="none" align="center" >
            <Box w="80%" pt={[0,40,100]} >
                <Heading color="white" >Bem vindo ao MKTonetel</Heading>
                <Text color="white" align="center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries.
                </Text>
            </Box>
        </Box>
    )
}


{/* <Box
      h={450}
      bgSize="180%"
      backgroundImage="url('/images/background.jpg')"
      backgroundPosition="center"
      bgRepeat="no-repeat" >
      <Flex maxW="100%" justify="center" >
        <Box w="100%" pt={8} >
          <Home />
      </Box>
      </Flex>
      <Spacer h={55} />
      <Footer />
    </Box> */}