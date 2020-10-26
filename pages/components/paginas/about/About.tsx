import { Divider, SimpleGrid, Spacer, Box } from '@chakra-ui/core'
import React from 'react'
import BarraPercent from './BarraPercent'
import BoxAbout1 from './BoxAbout1'
import BoxAbout2 from './BoxAbout2'
import BoxAbout3 from './BoxAbout3'
import StudioDesign from './StudioDesign'

export default function About() {
    return (
        <Box h="100%">
            <SimpleGrid columns={[1, 2, 3]} spacing={30} w="95%" justifyItems="center" >
                <BoxAbout1 />
                <BoxAbout2 />
                <BoxAbout3 />
            </SimpleGrid>
            <Divider w="100%" pt={5} />
            <SimpleGrid columns={[1, 2]} spacing={30} w="95%" justifyItems="center" pt={5} >
                <StudioDesign />
                <BarraPercent />
            </SimpleGrid>
        </Box>
    )
}
