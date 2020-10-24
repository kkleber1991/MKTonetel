import { Box, Heading, FormControl, FormLabel, Input, Button, VStack } from '@chakra-ui/core'
import React from 'react'

export default function Newslatter() {
    return (
        <VStack mb={5} align="start"
        display={{ md: "flex" }} bg="none" h={140} >
            <Heading color="white" >Newslatter</Heading>
            <FormControl id="email" >
                <FormLabel color="white">
                    Digite seu e-mail:
                </FormLabel>
                <Input placeholder="E-mail" />
            </FormControl>
            <br />
            <Button colorScheme="white" variant="outline" color="white">
                Enviar
                </Button>
        </VStack>
    )
}
