import { Box, HStack, SimpleGrid } from '@chakra-ui/core'
import React from 'react'
import BoxHome1 from './BoxHome1'
import BoxHome2 from './BoxHome2'
import BoxHome3 from './BoxHome3'

export default function Home() {
    return (
        <SimpleGrid columns={[1, 2, 3]} spacing={40} w="95%" h={[780,530,250]} justifyContent="center" >
            <Box h={250} flex={1} ><BoxHome1 /></Box>
            <Box h={250} flex={1} ><BoxHome2 /></Box>
            <Box h={250} flex={1} ><BoxHome3 /></Box>
        </SimpleGrid>
    )
}
