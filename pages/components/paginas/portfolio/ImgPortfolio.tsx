import { Box, Heading, Image, Text } from '@chakra-ui/core'
import React from 'react'

export default function ImgPortfolio() {
    return (
        <Box
            mb={15}
            backgroundImage="url('/portfolio-header.jpg')"
            backgroundPosition="center"
            bgRepeat="no-repeat"
            h={[300, 400, 600]}
            objectFit="none" >
            <Box w="80%" pt={[0, 40, 100]} >
                <Heading color="black" >Nossos Projetos</Heading>
                <Text color="black" align="center">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.
                </Text>
            </Box>
        </Box>
    )
}
