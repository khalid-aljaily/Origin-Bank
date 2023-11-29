import React, { useState } from "react";
import logo from "../assets/logo/shape-30.svg";
import locationIcon from "../assets/locationIcon.svg";
import phoneIcon from "../assets/phoneIcon.svg";
import mailIcon from "../assets/mailIcon.svg";
import fbButton from "../assets/fbButton.svg";
import twButton from "../assets/twButton.svg";
import liButton from "../assets/liButton.svg";
import { Anchor, Button, Divider, Flex, Group, Text } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";
const links = ["Home", "Career", "About", "Security"];
function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState("Home");
  return (
    <div className="mt-16 md:mt-24 pt-[50px] md:pt-[60px] bg-gra-8 px-[16px] sm:px-10 lg:px-20 pb-[30px] md:pb-[50px] ">
      <div className=" flex flex-col items-center mb-[30px] md:mb-5">
        <Group className="mb-6 md:mb-10 !gap-1">
          <img src={logo} alt="logo" />
          <Anchor className="text-white !no-underline">Origin Bank</Anchor>
        </Group>
        <Group gap={14} className="mb-[30px] md:mb-5 gap-[26px]">
          {links.map((link) => (
            <Anchor
              onClick={() => {
                if (location.pathname !== `/${link}`) {
                  setActive(link);
                  navigate(`/${link}`);
                  window.scrollTo(0, 0);
                }
              }}
              key={link}
              c={"white.0"}
              className={`link  text-sm hover:underline `}
            >
              {link}
            </Anchor>
          ))}
        </Group>
        <Divider orientation="horizontal" color="gray.7" h={1} w={"100%"} />
        <Group className="mt-[30px] md:mt-5 gap-5 justify-between">
          <Group gap={5}>
            <img src={mailIcon} alt="email icon" />
            <Anchor className="text-whi-3 font-normal text-sm md:text-base">
              mail@Origin Bank.com
            </Anchor>
          </Group>
          <Group gap={5}>
            <img src={phoneIcon} alt="phone icon" />
            <Anchor className="text-whi-3 font-normal text-sm md:text-base">
              +91 585 155 3852
            </Anchor>
          </Group>
          <Group gap={5} className="mx-auto">
            <img src={locationIcon} alt="location icon" />
            <Anchor className="text-whi-3 font-normal text-sm md:text-base">
              new york, US{" "}
            </Anchor>
          </Group>
        </Group>
      </div>
      <Divider orientation="horizontal" color="gray.7" h={1} w={"100%"} />

      <Flex className="justify-between mt-[30px] flex-col md:flex-row mt:mb-5 items-center md:p-3 bg-gra-9 border border-gra-7 border-solid rounded-xl md:rounded-full pt-[50px]  relative ">
        <Group className="absolute top-[-22px] md:top-auto md:relative">
          <Button p={0}>
            <img src={fbButton} alt="facebook button" />
          </Button>
          <Button p={0}>
            <img src={twButton} alt="twitter button" />
          </Button>
          <Button p={0}>
            <img src={liButton} alt="linkedin button" />
          </Button>
        </Group>
        <Text className="text-base font-light text-gra-2">
          Origin Bank All Rights Reserved
        </Text>
        <Group className="mt-5 md:mt-0 mb-[30px] md:mb-0 ml-3 md:ml-0 mr-6 md:mr-0">
          <Anchor className="text-gra-2 font-light text-sm">
            Privacy Policy
          </Anchor>
          <Divider
            orientation="vertical"
            color="gray.7"
            className="h-full w-[1px] "
          />
          <Anchor className="text-gra-2 font-light text-sm">
            Terms Of Service
          </Anchor>
        </Group>
      </Flex>
    </div>
  );
}

export default Footer;
