import { Button, Flex, Text, Title } from "@mantine/core";
import React from "react";
import design from "../assets/Abstract Design (3).svg";
function HomeBanner() {
  return (
    <div className="mt-24 text-center lg:text-left relative p-[30px] md:p-20 bg-gra-8 border-gra-7 border border-solid rounded-xl">
      <img
        src={design}
        alt="design img"
        className="absolute top-0 left-0 z-0"
      />
      <Flex className="justify-between flex-col lg:flex-row items-center gap-6 lg:gap-[120px] relative z-10">
        <div>
          <Title
            className="inline font-normal text-[24px] md:text-[30px] "
            order={3}
          >
            Start your financial journey with Origin Bank today!
            <Title
              order={2}
              className="inline !text-gre-7 font-normal text-[24px] md:text-[30px] "
            >
              {" "}
              Origin Bank today!
            </Title>
          </Title>
          <Text className="section-text text-center lg:text-left mt-[10px]  ">
            Experience a revolutionary approach to finance with Origin Bank. Our
            cutting-edge tools ensure secure transactions and personalized
            assistance, redefining your banking journey. Explore the future of
            financial management.
          </Text>
        </div>

        <div className="p-1 bg-gra-8 border border-gra-7 border-solid rounded-full w-fit ">
          <Button className="px-6 md:px-5 py-[14px] text-sm font-normal">
            Open Account
          </Button>
        </div>
      </Flex>
    </div>
  );
}

export default HomeBanner;
