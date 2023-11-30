import { Box, Divider, Group, SimpleGrid, Text, Title } from "@mantine/core";
import React from "react";
import { ourBenefits } from "../../utils";
import { useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";
function OurBenefits() {
  const isSmallScreen = useMediaQuery("(max-width:1023px)");
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
            Benefits
          </Title>
        </Title>
      </div>
      <Text className="section-text mb-[50px] lg:mb-[60px]">
        At Origin Bank, we value our employees and are dedicated to their
        well-being and success. We offer a comprehensive range of benefits
        designed to support their personal and professional growth.
      </Text>
      <SimpleGrid className="gap-0 items-stretch grid-cols-1 lg:grid-cols-2">
        {ourBenefits.map((item, index) => (
          <div
            key={index}
            className={`relative  ${
              index == 0
                ? "pr-0 lg:pr-[30px] pb-6 lg:pb-[30px]"
                : index == 1
                ? " pl-0 lg:pl-[30px] pb-6 pt-6 lg:pt-0 lg:pb-[30px]"
                : index == 2
                ? "pr-0 lg:pr-[30px] pt-6 lg:pt-[30px] pb-6 lg:pb-0 "
                : "pl-0 lg:pl-[30px]  pt-6 lg:pt-[30px]"
            }`}
          >
            <motion.div 
            initial = {{opacity:0 , y:100}}
            whileInView={{opacity:1,y:0,transition:{duration:.5,delay:index*.5}}}
            viewport={{once:true}}
              className={`p-6 md:p-10 h-full ${
                isSmallScreen ? "mobile-card" : "card-" + index
              }`}
            >
              <Group className="gap-[10px] md:gap-[14px] items-center">
                <img src={item.icon} alt="" />
                <Title
                  order={3}
                  className="text-[18px] md:text-[20px] font-normal "
                >
                  {item.title}
                </Title>
              </Group>
              <Text className="section-text !text-left mt-5 sm:mt-6">
                {item.content}
              </Text>
            </motion.div >
            {index == 0 ? (
              <>
                <div className="  dashed-border h-[1px] left-0 absolute bottom-0 w-full lg:!w-[calc(100%-24px)] xl:!w-[calc(100%-30px)]"></div>
                <div className=" dashed-border hidden lg:block w-[1px] right-0 absolute top-0 h-full lg:!h-[calc(100%-24px)] xl:!h-[calc(100%-30px)]"></div>
              </>
            ) : index == 1 ? (
              <>
                <div className=" dashed-border h-[1px] right-0 absolute bottom-0 w-full lg:!w-[calc(100%-24px)] xl:!w-[calc(100%-30px)]"></div>
              </>
            ) : index == 2 ? (
              <>
                <div className="hidden lg:block dashed-border w-[1px] right-0 absolute bottom-0 !h-[calc(100%-24px)] md:!h-[calc(100%-30px)] "></div>
              </>
            ) : (
              <>
                <div className="block lg:hidden dashed-border h-[1px] right-0 absolute top-0 w-full lg:!w-[calc(100%-24px)] xl:!w-[calc(100%-30px)]"></div>
              </>
            )}
          </div>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default OurBenefits;
