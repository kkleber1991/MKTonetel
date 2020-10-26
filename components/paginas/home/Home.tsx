import { Box, Spacer, HStack, SimpleGrid } from '@chakra-ui/core'
import React from 'react'
import BoxHome1 from './BoxHome1'
import BoxHome2 from './BoxHome2'
import BoxHome3 from './BoxHome3'

export default function Home() {
    return (
        <SimpleGrid columns={[1, 2, 3]} spacing={30} w="95%" h={[800, 750, 250]} justifyItems="center" >
            <BoxHome1 />
            <BoxHome2 />
            <BoxHome3 />
            <Spacer />
        </SimpleGrid>
    )
}
