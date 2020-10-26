import { Box, VStack, Text, Heading } from '@chakra-ui/core'
import React from 'react'
import { HiOutlineDesktopComputer } from "react-icons/hi";

export default function BoxHome1() {
    return (
        <VStack bg="#c14000" w={250} h={250} align="center" justify="center" >
            <HiOutlineDesktopComputer size={75} color="white" />
            <Heading color="white" >Responsivo</Heading>
            <Text color="white" >
                Algum texto sobre resposividade
            </Text>
        </VStack>
    )
}
