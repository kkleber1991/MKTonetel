import { Box, Flex, Heading, Image, Text } from '@chakra-ui/core'
import React from 'react'

export default function ImgPortfolio() {
    return (
        <Flex
            mb={15}
            backgroundImage="url('/portfolio-header.jpg')"
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
                <Heading color="black" >Nossos Projetos</Heading>
                <Text color="black" align="center">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.
                </Text>
        </Flex>
    )
}
