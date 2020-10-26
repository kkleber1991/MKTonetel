import { Box, Progress, VStack, Text, Spacer, Stack, Flex, HStack } from '@chakra-ui/core'
import React from 'react'

export default function BarraPercent() {
    return (
        <Box w={350} >
            <VStack color="white" >
                <Box w="100%">
                    <HStack>
                        <Text>HTML5 & CSS3</Text>
                        <Spacer />
                        <Text>80%</Text>
                    </HStack>
                    <Progress colorScheme="yellow" value={80} />
                </Box>
                <Spacer />
                <Box w="100%">
                    <HStack>
                        <Text>BOOTSTRAP</Text>
                        <Spacer />
                        <Text>60%</Text>
                    </HStack>
                    <Progress colorScheme="red" value={60} />
                </Box>
                <Spacer />
                <Box w="100%">
                    <HStack>
                        <Text>UX Design</Text>
                        <Spacer />
                        <Text>100%</Text>
                    </HStack>
                    <Progress colorScheme="blue" value={100} />
                </Box>
            </VStack>
        </Box>
    )
}
