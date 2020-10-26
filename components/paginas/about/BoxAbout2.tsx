import { Badge, Box, Flex, Heading, Image, VStack, Text } from '@chakra-ui/core'
import React from 'react'

export default function BoxAbout2() {
    return (
        <Box border="1px" borderRadius={0} borderColor="gray.200" w={305} h={475} >
            <Flex justify="center" pt={2} >
                <VStack>
                    <Image src="/team2.jpg" w={290} h={290} justifyItems="center" alignContent="center" />
                    <Heading color="white">Jhosepha</Heading>
                    <Text fontWeight="bold" fontSize="xl" color="#d54ab6" >UX Designer</Text>
                    <Text color="white" textAlign="start" >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismo.</Text>
                </VStack>
            </Flex>
        </Box>
    )
}
