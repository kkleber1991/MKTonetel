import { Box, Heading, VStack, Text } from '@chakra-ui/core'
import React from 'react'
import { ImMobile } from "react-icons/im";

export default function BoxHome2() {
    return (
        <VStack bg="#009988"  w={250} h={250} align="center" justify="center" >
            <ImMobile size={75} color="white" />
            <Heading color="white" >Fácil de usar</Heading>
            <Text color="white" >
                Algum texto sobre resposividade
            </Text>
        </VStack>
    )
}
