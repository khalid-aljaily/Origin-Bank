import React from "react";
import { press } from "../../utils";
import { Box, Flex, Group, SimpleGrid, Text, Title } from "@mantine/core";
import press1 from "../../assets/pressImg1.png";
import press2 from "../../assets/pressImg2.png";
import press3 from "../../assets/pressImg3.png";
import press4 from "../../assets/pressImg4.png";
const pressImgs = [press1, press2, press3, press4];
function Press() {
  return (
    <div className="mt-16 md:mt-24 text-center md:text-left">
      <div className="mb-[10px]">
        <Title
          order={2}
          className=" !text-gre-7 font-semibold text-[28px] md:text-[38px]"
        >
          {" "}
          Press Releases
        </Title>
      </div>
      <Text className="section-text   mb-[50px] lg:mb-[60px]">
        Stay updated with the latest happenings and exciting developments at
        Origin Bank through our press releases.
      </Text>
      <SimpleGrid className="grid-cols-1 lg:grid-cols-2 gap-5">
        {press.map((item, index) => (
          <Box
            className=" w-full h-full bg-gra-8 border-gra-7 border border-solid rounded-2xl p-5 md-p-6"
            key={index}
          >
            <img
              src={pressImgs[index]}
              alt=""
              className="lg:h-[277px] object-cover w-[100%] grayscale rounded-t-[30px] rounded-b-[12px] mb-[30px] lg:mb-10"
            />
            <div className="md:px-6 ">
              <Title
                order={3}
                className="font-normal text-left text-lg md:text-xl mb-[10px] md:mb-[14px]"
              >
                {item.title}
              </Title>
              <Group className="mb-6 gap-1">
                <Text className="px-[14px] py-[6px] rounded-full bg-gra-9 border-gra-7 border-solid border section-text">
                  Location: {item.location}
                </Text>
                <Text className="px-[14px] py-[6px] rounded-full bg-gra-9 border-gra-7 border-solid border section-text">
                  Date: {item.date}
                </Text>
              </Group>
              <Text className="section-text text-left">{item.content}</Text>
            </div>
          </Box>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default Press;
