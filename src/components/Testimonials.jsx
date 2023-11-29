import {
  Box,
  Button,
  Divider,
  Flex,
  SegmentedControl,
  Text,
  Title,
} from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
import { indvTestimonials, businessTestimonials } from "../utils";
import qoute from "../assets/qouteIcon.svg";
import right from "../assets/ButtonRight.svg";
import left from "../assets/ButtonLeft.svg";

function Testimonials() {
  const [value, setValue] = useState("From individuals");
  const scrollRef = useRef(null);
  const [opinions, setOpinons] = useState(indvTestimonials);
  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = scrollRef.current;
    const centerOffset = (container.scrollWidth - container.clientWidth) / 4;
    container.scrollLeft = centerOffset;
  }, []);

  useEffect(() => {
    if (value === "From individuals") {
      setOpinons(indvTestimonials);
    } else {
      setOpinons(businessTestimonials);
    }
  }, [value]);

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
            Testimonials
          </Title>
        </Title>
      </div>
      <Flex className="justify-between flex-col md:flex-row items-center">
        <Text className="section-text sm:max-w-[60%] lg:max-w-[70%]">
          Hear from our satisfied clients on how Origin Bank's innovative
          digital solutions and personalized service have transformed their
          financial journey.
        </Text>
        <div className="p-1 bg-gra-8 border border-gra-7 border-solid rounded-full w-fit mt-5 md:mt-0">
          <SegmentedControl
            value={value}
            onChange={setValue}
            data={[
              { label: "From individuals", value: "From individuals" },
              { label: "From Businesses", value: "From Businesses" },
            ]}
            h={"fit-content"}
            style={{ overflow: "unset" }}
            classNames={{
              root: "bg-transparent",
              indicator: "bg-gre-5",
              label:
                "data-[active=true]:text-gra-9 text-white h-auto py-[10px] w-auto px-[18px]",
            }}
          />
        </div>
      </Flex>
      <div className="relative">
        <div
          className="flex justify-between gap-4 overflow-hidden snap-x snap-mandatory md:space-x-20 mt-10 md:mt-20 "
          ref={scrollRef}
        >
          {opinions.map((opinion, index) => (
            <Box
              key={index}
              className={`snap-center shrink-0 ${index == 0 && "ml-[100%] "}  ${
                index == 7 && " !mr-[100%]"
              }`}
            >
              <TesimonialCard opinion={opinion} />
            </Box>
          ))}
        </div>
        <div className=" absolute left-0 top-0 bottom-0 w-1/6 sm:w-1/3 bg-gradient-to-l from-transparent to-gra-9 " />

        <div className=" absolute right-0 top-0 bottom-0 w-1/6 sm:w-1/3 bg-gradient-to-r from-transparent to-gra-9 " />
        <div className="flex justify-center md:!justify-between absolute w-full md:top-1/2">
          <Button
            onClick={scrollLeft}
            className="mr-6 w-fit p-0"
            variant="subtle"
          >
            <img src={left} alt="" className="w-[52px]" />
          </Button>
          <Button onClick={scrollRight} variant="subtle" className="w-fit p-0">
            <img src={right} alt="" className="w-[52px]" />
          </Button>
        </div>
      </div>
    </div>
  );
}

const TesimonialCard = ({ opinion }) => (
  <div className="max-w-[calc(100vw-32px)]  sm:max-w-[500px] ">
    <div className="flex items-center">
      <Divider
        orientation="horizontal"
        h={1}
        color="gray.7"
        className="flex-1"
      />
      <img src={qoute} alt="" className="block mx-5 w-[44px]" />
      <Divider
        orientation="horizontal"
        h={1}
        color="gray.7"
        className="flex-1"
      />
    </div>
    <Text className="text-sm md:text-base font-normal text-center my-[30px] md:my-10">
      {opinion.content}
    </Text>
    <Text className="text-base font-medium text-gre-7 text-center">
      {opinion.name}
    </Text>
  </div>
);

export default Testimonials;
