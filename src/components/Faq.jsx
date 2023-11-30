import {
  Box,
  Button,
  Collapse,
  Divider,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import React, { useState } from "react";
import { faq } from "../utils";
import { IconChevronUp } from "@tabler/icons-react";
import { IconChevronDown } from "@tabler/icons-react";
function Faq() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mt-16 md:mt-24 text-center md:text-left relative">
      <div className="mb-[10px]">
        <Title
          className="inline !text-gre-7 font-semibold text-[28px] md:text-[38px]"
          order={2}
        >
          Frequently
          <title
            order={2}
            className="inline text-white  font-semibold text-[28px] md:text-[38px]"
          >
            {" "}
            Asked Questions
          </title>
        </Title>
      </div>
      <Text className="section-text  lg:max-w-[80%] mb-[50px] lg:mb-[60px]">
        Still you have any questions? Contact our Team via support@Origin
        Bank.com .
      </Text>
      <SimpleGrid cols={{ base: 1, md: 2 }} className="gap-5">
        {faq.slice(0, 4).map((question, idx) => (
          <Box
            key={idx}
            className="p-[30px] md:p-10 flex flex-col border-gra-7 border-solid border rounded-xl"
          >
            <Title order={4} className="text-lg font-medium ">
              {question.q}
            </Title>
            <Divider
              orientation="horizontal"
              color={"gray.7"}
              h={2}
              w={"100%"}
              className=" my-5 md:my-6 "
            />
            <Text className="section-text ">{question.a}</Text>
          </Box>
        ))}
      </SimpleGrid>
      <div
        className={`${
          isOpen && "hidden"
        } absolute bottom-0 left-0 bg-gradient-to-b from-transparent to-gra-9 h-[35%] w-full`}
      />
      <Collapse in={isOpen} className="mt-5" transitionDuration={500}>
        <SimpleGrid cols={{ base: 1, md: 2 }} className="gap-5">
          {faq.slice(4).map((question, idx) => (
            <Box
              key={idx}
              className="p-[30px] md:p-10 flex flex-col border-gra-7 border-solid border rounded-xl"
            >
              <Title order={4} className="text-lg font-medium ">
                {question.q}
              </Title>
              <Divider
                orientation="horizontal"
                color={"gray.7"}
                h={2}
                w={"100%"}
                className=" my-5 md:my-6 "
              />
              <Text className="section-text ">{question.a}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Collapse>
      <Button
        className={`border-gra-7 px-5 py-[14px] bg-gra-8 text-sm font-normal lg:w-fit !text-white mx-auto block mt-5 items-center hover:bg-gra-7`}
        onClick={() => setIsOpen(!isOpen)}
        rightSection={
          isOpen ? (
            <IconChevronUp color="white" stroke={2} width={20} />
          ) : (
            <IconChevronDown color="white" stroke={2} width={20} />
          )
        }
      >
        {isOpen ? "Show Less" : "Load All FAQs"}
      </Button>
    </div>
  );
}

export default Faq;
