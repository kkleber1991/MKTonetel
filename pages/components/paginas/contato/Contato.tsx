import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/core'
import React from 'react'
import MailPhone from './MailPhone'
import Menssagem from './Menssagem'
import NameMail from './NameMail'

export default function Contato() {
    return (
        <Box>
            <Heading color="white" textAlign="center" >Entrar em contato</Heading>
            <Text color="white" textAlign="center" >Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy nibh euismod tincidunt ut laoreet.
            Dolore magna aliquam erat volutpat.
            </Text>
            <SimpleGrid columns={[1, 2, 3]} spacing={5} pt={8} >
                <Box flex={1} >
                    <NameMail />
                </Box>
                <Box flex={1} >
                    <Menssagem />
                </Box>
                <Box flex={1} >
                    <MailPhone />
                </Box>
            </SimpleGrid>

        </Box>
    )
}
