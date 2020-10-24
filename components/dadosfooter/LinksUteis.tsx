import { Box, Heading, Link } from '@chakra-ui/core'
import React from 'react'

export default function LinksUteis() {
    return (
        <Box pt={5} bg="none" h={140} >
            <Heading color="white" >Links Uteis</Heading>
            <Link href="https://nextjs.org/" isExternal color="white" >
                Nextjs
                </Link><br />
            <Link href="https://www.typescriptlang.org/" isExternal color="white" >
                TypeScript
                </Link>
            <Box>
                <Link href="https://chakra-ui.com" isExternal color="white" >
                    Chakra-Ui Design
                    </Link>
            </Box>
        </Box>
    )
}
