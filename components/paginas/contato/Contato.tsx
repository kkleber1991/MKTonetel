import { Box, Divider, Heading, SimpleGrid, Text, Spacer } from '@chakra-ui/core'
import React from 'react'
import MailPhone from './MailPhone'
import Mapa from './Mapa'
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
            <Spacer pt={8} />
            <Divider />
            <Spacer pt={8} />
            <Mapa />
        </Box>
    )
}
