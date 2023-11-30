import { Box, Flex, SimpleGrid, Text, Title } from "@mantine/core";
import React from "react";
import design from "../../assets/Abstract Design.svg";
import missionImg1 from "../../assets/missionImg1.png";
import missionImg2 from "../../assets/missionImg2.png";
import { motion } from "framer-motion";
function Misson() {
  return (
    <div className="mt-16 md:mt-24 text-center md:text-left">
      <div className="mb-[10px]">
        <Title
          order={2}
          className=" !text-gre-7 font-semibold text-[28px] md:text-[38px]"
        >
          {" "}
          Mission & Vision
        </Title>
      </div>
      <Text className="section-text   mb-[50px] lg:mb-[60px]">
        We envision being a leading force in the industry, driven by innovation,
        integrity, and inclusivity, creating a brighter financial future for
        individuals and businesses while maintaining a strong commitment to
        customer satisfaction and community development
      </Text>
      <div className="w-full">
        <Flex className=" items-center flex-col md:flex-row mb-[50px] md:mb-0">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
            className="p-5 lg:p-[60px] pb-0 bg-gra-7 mission-box relative flex-[3]"
          >
            <img
              src={missionImg1}
              alt="mission image"
              className="relative z-10 -mb-[7px] max-w-[100%] "
            />

            <img
              src={design}
              alt="design image"
              className="max-h-[100%] absolute bottom-0 left-1/2 -translate-x-1/2 z-0 mx-auto "
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
            className="border-gre-7 border-t md:border-t-0 md:border-l  border-solid border-0  pl-5 md:pl-6 flex-[6] pt-[30px] md:pt-0"
          >
            <Title
              order={3}
              className="text-[26px] md:text-[38px] font-medium  mb-[14px] md:mb-5"
            >
              Mission
            </Title>
            <Text className="section-text ">
              At Origin Bank, our mission is to empower our customers to achieve
              financial success. We are dedicated to delivering innovative
              banking solutions that cater to their unique needs. Through
              personalized services, expert guidance, and cutting-edge
              technology, we aim to build strong, lasting relationships with our
              customers. Our mission is to be their trusted partner, helping
              them navigate their financial journey and realize their dreams.
            </Text>
          </motion.div>
        </Flex>
        <Flex className="  items-center w-full flex-col-reverse md:flex-row md:mt-10 lg:-mt-12">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
            className="md:flex-[6] border-gre-7 border-t md:border-t-0 md:border-r  border-solid border-0 pr-5 md:pr-6 pt-[30px] md:pt-0"
          >
            <Title
              order={3}
              className="text-[26px] md:text-[38px] font-medium  mb-[14px] md:mb-5 "
            >
              Vision
            </Title>
            <Text className="section-text ">
              Our vision at Origin Bank is to redefine banking by creating a
              seamless and personalized experience for our customers. We
              envision a future where banking is accessible, transparent, and
              tailored to individual preferences. Through continuous innovation
              and collaboration, we strive to be at the forefront of the
              industry, setting new standards for customer-centric banking. Our
              vision is to be the preferred financial institution, known for our
              unwavering commitment to excellence, trust, and customer
              satisfaction.
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
            className="p-5 lg:p-[60px]  pb-0 bg-gra-7 mission-box relative md:flex-[3]"
          >
            <img
              src={missionImg2}
              alt="mission image"
              className="relative z-10 -mb-[7px] w-[100%]"
            />

            <img
              src={design}
              alt="design image"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 mx-auto  max-h-[100%]"
            />
          </motion.div>
        </Flex>
      </div>
    </div>
  );
}

export default Misson;
