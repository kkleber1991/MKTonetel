import { Box, Flex, Heading, Image, Text } from '@chakra-ui/core'
import React from 'react'

export default function ImgHome() {
    return (
        <Flex
            mb={15}
            backgroundImage="url('/home-bg.jpg')"
            backgroundPosition="center"
            bgRepeat="no-repeat"
            h={[300, 400, 600]}
            objectFit="none"
            pt={[0,100,0]}
            px={10}
            justifyContent="center"
            alignContent="center" 
            flexDirection="column"
            textAlign="center">
                <Heading color="black">Bem vindo ao MKTonetel</Heading>
                <Text color="black">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries.
                </Text>
        </Flex>
    )
}