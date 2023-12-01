import { Box, Button, Flex, SimpleGrid, Text, Title } from "@mantine/core";
import React, { useState } from "react";
import arrow from "../assets/arrowUpRight.svg";
import { motion } from "framer-motion";
import {
  customerSupportFeatures,
  financialTools,
  onlineBanking,
} from "../utils";
function OurFeatures() {
  const buttons = [onlineBanking, financialTools, customerSupportFeatures];
  const [active, setActive] = useState(onlineBanking);
  const AnimatedGrid = motion(SimpleGrid)
  const GridVars = {
    hidden:{},
    open:{
      transition:{staggerChildren:.5}
    }
  }
  const itemsVars= {
    hidden:{
      opacity: 0, y: 50
    },
    open:{
      opacity: 1,
      y: 0,
      transition: {  duration: 0.5, }
    }
  }
  return (
    <div className="mt-16 md:mt-24 text-center md:text-left">
      <div className="mb-[10px]">
        <Title
          className="inline font-semibold text-[28px] md:text-[38px]"
          order={2}
        >
          Our
          <Title
            order={2}
            className="inline !text-gre-7 font-semibold text-[28px] md:text-[38px]"
          >
            {" "}
            Features
          </Title>
        </Title>
      </div>
      <Text className="section-text  lg:max-w-[80%] mb-[50px] lg:mb-[60px]">
        Experience a host of powerful features at Origin Bank, including
        seamless online banking, secure transactions, and personalized financial
        insights, all designed to enhance your banking experience.
      </Text>
      <Flex
        direction={{ base: "column", md: "row" }}
        className="gap-5 items-start "
      >
        <Flex
          direction={{ base: "row", md: "column" }}
          className="p-5 lg:p-10 bg-gra-8 rounded-xl gap-5 max-w-[100%] overflow-auto sm:w-full lg:min-w-min lg:w-fit justify-between items-center"
        >
          {buttons.map((button, idx) => (
            <Button
              variant="default"
              key={idx}
              className={`border-gra-7 px-5 py-[14px] bg-gra-8 text-sm font-normal lg:w-fit ${
                active.title == button.title
                  ? "bg-gra-9 !text-gre-7"
                  : "!text-white hover:bg-gra-7"
              }`}
              onClick={() =>
                setActive(buttons.find((item) => item.title == button.title))
              }
            >
              {button.title}
            </Button>
          ))}
        </Flex>
        <AnimatedGrid 
        variants={GridVars}
        initial="hidden"
        whileInView='open'
        viewport={{once:true}}
        cols={{ base: 1, md: 2 }} className="gap-5 ">
          {active.features.map((feat, idx) => (
            <motion.div
              variants={itemsVars}
              key={feat.title}
              className="p-[30px] lg:p-10 bg-gra-8 rounded-xl hover:bg-gra-7  duration-300"
            >
              <Title order={3} className="text-lg font-normal mb-6 relative">
                {feat.title}
                <img
                  src={arrow}
                  alt="arrow"
                  className="absolute top-0 right-0"
                />
              </Title>
              <Text className="section-text">{feat.text}</Text>
            </motion.div>
          ))}
        </AnimatedGrid>
      </Flex>
    </div>
  );
}

export default OurFeatures;
