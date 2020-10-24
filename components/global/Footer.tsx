import { Box, Flex, Center } from '@chakra-ui/core'
import React from 'react'

export default function Footer() {
    return (
        <Flex justify="center" >
            <Box bg="#101010" w="100%" p={4} color="black">
                <Center color="white">
                    Copyright© 2020-2021 Todos os direitos reservados. kedllon.solutions | Powered by: Kedllon.Solutions
                </Center>
            </Box>
        </Flex>
    )
}
