import { Flex, VStack, Image, Heading, Box, Text, SimpleGrid, Spacer } from '@chakra-ui/core'
import React from 'react'

export default function HVStack() {
    return (

        <SimpleGrid columns={[1, 2]} spacing={5} w="95%" h={[600, 750, 250]} pt={5} justifyItems="center" >
            <Box flex={1} boxSize={300} >
                <Image src="/about-img.jpg"
                    flex={1} />
            </Box>
            <Box flex={1} color="white" boxSize={300} textAlign="start" >
                <Heading>Iniciar Negocios</Heading>
                <Text>
                    Se você perguntar para um jovem hoje qual o seu sonho, 
                    certamente haverá grandes chances de que a sua resposta seja algo como 
                    “abrir meu próprio negócio“. Empreender está mais na moda do que nunca e, 
                    com a internet, muitos negócios surgem com pouco ou quase nenhum investimento.
                </Text>
            </Box>

        </SimpleGrid>

        //     <SimpleGrid columns={[1, 2]} w="95%" h={[780, 750, 250]} justifyContent="center" >
        //     <Image src="/about-img.jpg"
        //         boxSize={350} flex={1} />
        //         <Box color="white" boxSize={350} flex={1} >
        //         <Heading>Iniciar Negocios</Heading>
        //             <Text>
        //             Se você perguntar para um jovem hoje qual o seu sonho, certamente haverá grandes chances de que a sua resposta seja algo como “abrir meu próprio negócio“. Empreender está mais na moda do que nunca e, com a internet, muitos negócios surgem com pouco ou quase nenhum investimento.
        //             </Text>
        //         </Box>
        // </SimpleGrid>


    )
}
