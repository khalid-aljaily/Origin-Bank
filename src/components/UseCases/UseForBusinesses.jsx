import React, { useEffect, useState } from "react";
import case1 from "../../assets/useCase5.svg";
import case2 from "../../assets/useCase6.svg";
import case3 from "../../assets/useCase7.svg";
import case4 from "../../assets/useCase8.svg";
import design from "../../assets/Abstract Design (3).svg";
import { useInView } from "react-intersection-observer";
import {motion} from 'framer-motion'
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
    { percentage: 65, text: "Cash Flow Management" },
    { percentage: 70, text: "Drive Business Expansion" },
    { percentage: 45, text: "Streamline payroll processing" },
  ];
  const businessCases = [
    { image: case1, text: 'Startups and Entrepreneurs' },
    { image: case2, text: 'Business Expansion' },
    { image: case3, text: 'Cash Flow Management' },
    { image: case4, text: 'Payment Solutions' },
  ];
  return (
    <Flex className="flex-col lg:flex-row-reverse gap-[60px] mt-10">
      <SimpleGrid
        cols={2}
        className="relative p-5 md:p-10 flex-1 gap-[10px] bg-gra-8 rounded-2xl "
      >
        <img src={design} alt="" className="absolute top-0 left-0 z-[2]" />
        {businessCases.map((caseItem, index) => (
        <motion.div 
        initial ={{opacity:0,y:50}} whileInView={{opacity:1,y:0,transition:{delay:index*.5,duration:.5}}} viewport={{once:true}}  key={caseItem.text}
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
                <PercentageDisplay targetPercentage={stat.percentage}/>
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

export const PercentageDisplay = ({ targetPercentage }) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures the animation triggers only once
  });

  useEffect(() => {
    if (inView) {
      const animationDuration = 5000; // Adjust the duration as needed (e.g., 10 seconds)
      const animationInterval = 5; // Adjust the interval as needed

      let startTimestamp;
      let animationFrameId;

      const animatePercentage = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = timestamp - startTimestamp;
        const percentageIncrement = (targetPercentage / animationDuration) * animationInterval;

        setCurrentPercentage((prevPercentage) => {
          const nextPercentage = prevPercentage + percentageIncrement;

          return nextPercentage >= targetPercentage ? targetPercentage : nextPercentage;
        });

        if (currentPercentage < targetPercentage) {
          animationFrameId = requestAnimationFrame(animatePercentage);
        }
      };

      animationFrameId = requestAnimationFrame(animatePercentage);
    }
  }, [targetPercentage, inView, currentPercentage]);

  return <div ref={ref}>{currentPercentage.toFixed(0)}%</div>;
};

