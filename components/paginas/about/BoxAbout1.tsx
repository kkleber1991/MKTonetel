import { Badge, Box, Flex, Heading, Image, VStack, Text } from '@chakra-ui/core'
import React from 'react'
import { AiOutlineStar } from "react-icons/ai";

export default function BoxAbout1() {
    return (
        <Box border="1px" borderRadius={0} borderColor="gray.200" w={305} h={475} >
            <Flex justify="center" pt={2} >
                <VStack>
                    <Image src="/team1.jpg" w={290} h={290} justifyItems="center" alignContent="center" />
                    <Heading color="white">Mary</Heading>
                    <Text fontWeight="bold" fontSize="xl" color="#d54ab6" >Creative Director</Text>
                    <Text color="white" textAlign="start" >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismo.</Text>
                </VStack>
            </Flex>
        </Box>
    )
}
