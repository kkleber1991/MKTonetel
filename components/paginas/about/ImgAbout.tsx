import { Box, Flex, Heading, Image, Text } from '@chakra-ui/core'
import React from 'react'

export default function ImgAbout() {
    return (
        <Flex
            mb={15}
            backgroundImage="url('/about-header.jpg')"
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
                <Heading color="black" >Conheça a tripulação</Heading>
                <Text color="black" align="center">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.
                </Text>
        </Flex>
    )
}
