import { Box, SimpleGrid } from '@chakra-ui/core'
import React from 'react'
import LinksUteis from '../dadosfooter/LinksUteis';
import Newslatter from '../dadosfooter/Newslatter';
import TemplateFree from '../dadosfooter/TemplateFree';


export default function DadosFooter() {
    return (
        <Box w="100%" bg="#202020" display="flex" justifyContent="center" h="100%" >
        <SimpleGrid columns={[1, 2, 3]} spacing={5} w="95%">
                <Box h={190} flex={1} >
                    <TemplateFree />
                </Box>
                <Box h={190} flex={1} >
                    <LinksUteis />
                </Box>
                <Box h={190} flex={1} >
                    <Newslatter />
                </Box>
        </SimpleGrid>
        </Box>
    )
}
