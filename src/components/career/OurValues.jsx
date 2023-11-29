import { Box, SimpleGrid, Text, Title } from "@mantine/core";
import React from "react";
import { ourValues } from "../../utils";
function OurValues() {
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
            Values
          </Title>
        </Title>
      </div>
      <Text className="section-text   mb-[50px] lg:mb-[60px]">
        At Origin Bank, our values form the foundation of our organization and
        guide our actions. We believe in upholding the highest standards of
        integrity, delivering exceptional service, and embracing innovation.
        These values define our culture and shape the way we work together to
        achieve our goals.
      </Text>
      <SimpleGrid
        cols={{ base: 1, md: 2 }}
        className="gap-[50px] md:gap-[60px]"
      >
        {ourValues.map((item, index) => (
          <Box
            key={index}
            className="border-l-gre-7 border  border-solid border-t-0 border-b-0 border-r-0 pl-5 md:pl-6"
          >
            <Title
              order={3}
              className="text-[30px] md:text-[40px] !text-gra-6 mb-[14px] md:mb-5"
            >
              {item.value}
            </Title>
            <Text className="section-text ">{item.content}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default OurValues;
