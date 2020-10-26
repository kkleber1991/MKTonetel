import React from 'react'
import { Box, Divider } from "@chakra-ui/core"
import DadosFooter from '../components/global/DadosFooter'
import Footer from '../components/global/Footer'
import Init from '../components/global/Init'

export default function Home() {
  return (
    <Box pt={8} bg="#101010">
      <Init />
      <Divider pt={8} />
      <DadosFooter />
      <Footer />
    </Box>
  )
}
