import { Box, Heading, VStack, Text } from '@chakra-ui/core'
import React from 'react'
import { TiSupport } from "react-icons/ti";

export default function BoxHome3() {
    return (
        <VStack bg="#ffa500"  w={250} h={250} align="center" justify="center" >
            <TiSupport size={75} color="white" />
            <Text fontSize={30} fontWeight="bold" color="white" >Suporte Rápido</Text>
            <Text color="white" >
                Algum texto sobre resposividade
            </Text>
        </VStack>
    )
}
