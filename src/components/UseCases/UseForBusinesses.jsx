import React from "react";
import case1 from "../../assets/useCase5.svg";
import case2 from "../../assets/useCase6.svg";
import case3 from "../../assets/useCase7.svg";
import case4 from "../../assets/useCase8.svg";
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

function UseForBusinesses() {
  const data = [
    { percentage: "65%", text: "Cash Flow Management" },
    { percentage: "70%", text: "Drive Business Expansion" },
    { percentage: "45%", text: "Streamline payroll processing" },
  ];
  return (
    <Flex className="flex-col lg:flex-row-reverse gap-[60px] mt-10">
      <SimpleGrid
        cols={2}
        className="relative p-5 md:p-10 flex-1 gap-[10px] bg-gra-8 rounded-2xl "
      >
        <img src={design} alt="" className="absolute top-0 left-0 z-[2]" />

        <Box className="px-[14px] py-5 md:p-6  bg-gra-9 z-10 relative text-center rounded-xl border border-gra-7 border-solid">
          <img src={case1} alt="" />

          <Text className="text-sm md:text-base">
            Startups and Entrepreneurs
          </Text>
        </Box>
        <Box className="px-[14px] py-5 md:p-6  bg-gra-9 z-10 relative text-center rounded-xl border border-gra-7 border-solid">
          <img src={case3} alt="" />
          <Text className="text-sm md:text-base">Business Expansion</Text>
        </Box>

        <Box className="px-[14px] py-5 md:p-6  bg-gra-9 z-10 relative text-center rounded-xl border border-gra-7 border-solid">
          <img src={case2} alt="" />
          <Text className="text-sm md:text-base">Cash Flow Management</Text>
        </Box>
        <Box className="px-[14px] py-5 md:p-6  bg-gra-9 z-10 relative text-center rounded-xl border border-gra-7 border-solid">
          <img src={case4} alt="" />
          <Text className="text-sm md:text-base">Payment Solutions</Text>
        </Box>
      </SimpleGrid>
      <div className="flex-1">
        <div>
          <Title className="text-[26px] font-medium mb-[10px]">
            For Business
          </Title>
          <Text className="section-text">
            {" "}
            For businesses, we empower growth with working capital solutions
            that optimize cash flow, and our tailored financing options fuel
            business expansion. Whatever your financial aspirations, Origin Bank
            is committed to providing the right tools and support to achieve
            them
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
                  {stat.percentage}
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

export default UseForBusinesses;
