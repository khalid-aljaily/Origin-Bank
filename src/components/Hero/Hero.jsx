import {  Flex, useMantineTheme } from '@mantine/core'
import React from 'react'
import PromoText from './PromoText'
import Graph from './Graph'

function Hero() {
    const theme = useMantineTheme()
    console.log(theme)
  return (
    <Flex className=' items-center lg:h-[calc(100vh-98px)] w-full flex-col md:flex-row justify-between mt-20 lg:mt-0 '>
      <PromoText/>
      <Graph/>
    </Flex>
  )
}

export default Hero