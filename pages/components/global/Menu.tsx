import { Box, Button, Flex, Stack } from '@chakra-ui/core'
import React from 'react'

export default function Menu() {
    return (
        <Flex justify="center" >
        <Box bg="#d54ab6" h="60px" w="1%" />
            <Stack justify="flex-end" spacing={4} direction="row" align="center" w="94%" bg="#202020" h="60px" pr={2} >
                <Button colorScheme="teal" size="md">
                    HOME
                    </Button>
                <Button colorScheme="teal" size="md">
                    SOBRE
                    </Button>
                <Button colorScheme="teal" size="md">
                    PORTFÓLIO
                    </Button>
                <Button colorScheme="teal" size="md">
                    CONTATO
                    </Button>
            </Stack>
        </Flex>
    )
}
