import React from "react";
import case1 from "../../assets/useCase1.svg";
import case2 from "../../assets/useCase2.svg";
import case3 from "../../assets/useCase3.svg";
import case4 from "../../assets/useCase4.svg";
import design from "../../assets/Abstract Design (3).svg";
import {
  Box,
  Button,
  Divider,
  Flex,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { PercentageDisplay } from "./UseForBusinesses";
import { motion } from "framer-motion";

function UseForIndviduals() {
  const data = [
    { percentage: 78, text: "Secure Retirement Planning" },
    { percentage: 63, text: "Manageable Debt Consolidation" },
    { percentage: 91, text: "Reducing financial burdens" },
  ];
  const cases = [
    { image: case1, text: "Managing Personal Finances" },
    { image: case2, text: "Homeownership" },
    { image: case3, text: "Saving for the Future" },
    { image: case4, text: "Education Funding" },
  ];
  return (
    <Flex className="flex-col lg:flex-row gap-[60px]">
      <SimpleGrid
        cols={2}
        className="relative p-5 md:p-10 flex-1 gap-[10px] bg-gra-8 rounded-2xl "
      >
        <img src={design} alt="" className="absolute top-0 left-0 z-[2]" />

        {cases.map((caseItem, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: index * 0.5, duration: 0.5 },
            }}
            viewport={{ once: true }}
            key={caseItem.text}
            className=" px-[14px] py-5 md:p-6 bg-gra-9 z-10 relative text-center rounded-xl border border-gra-7 border-solid"
          >
            <img src={caseItem.image} alt="" />
            <Text className="text-sm md:text-base">{caseItem.text}</Text>
          </motion.div>
        ))}
      </SimpleGrid>
      <div className="flex-1">
        <div>
          <Title className="text-[26px] font-medium mb-[10px]">
            For Individuals
          </Title>
          <Text className="section-text">
            For individuals, our mortgage services pave the way to
            homeownership, and our flexible personal loans provide vital support
            during various life milestones. We also prioritize retirement
            planning, ensuring a financially secure future for our customers
          </Text>
        </div>
        <Flex
          className="my-[50px] justify-between"
          direction={{ base: "column", xs: "row" }}
        >
          {data.map((stat, idx) => (
            <div key={idx} className="relative flex-1">
              <Box
                className={` py-[30px] xs:py-0 xs:px-[30px] ${
                  idx == 2 && "!pr-0"
                } ${idx == 0 && "!pl-0"} ${idx == 0 && "!pt-0"} ${
                  idx == 2 && "!pb-0"
                }`}
              >
                <Text className="text-[40px] font-medium  text-gre-7 mb-[14px]">
                  <PercentageDisplay targetPercentage={stat.percentage} />
                </Text>

                <Text className=" font-light text-sm text-gra-1">
                  {stat.text}
                </Text>
              </Box>
              {idx != 0 && (
                <Divider
                  orientation={"vertical"}
                  visibleFrom="xs"
                  color="dark.6"
                  w={2}
                  h={"100%"}
                  className="absolute top-0"
                />
              )}
              {idx != 0 && (
                <Divider
                  orientation={"horizontal"}
                  hiddenFrom="xs"
                  color="dark.6"
                  w={"100%"}
                  h={2}
                  className="absolute top-0"
                />
              )}
            </div>
          ))}
        </Flex>
        <Button
          variant="outline"
          className="!text-white px-[14px] py-[10px] border-gra-7 bg-gra-8 hover:bg-gra-7 text-sm font-normal"
        >
          Learn More
        </Button>
      </div>
    </Flex>
  );
}

export default UseForIndviduals;
