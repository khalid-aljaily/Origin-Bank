import { Box, Flex, Text, Title } from "@mantine/core";
import React from "react";
import careerImg from "../assets/careerImage.png";
import design from "../assets/Abstract Design (4).svg";
import { useMediaQuery } from "@mantine/hooks";
import OurValues from "../components/career/OurValues";
import OurBenifets from "../components/career/OurBenefits";
import Jobs from "../components/career/Jobs";
import Faq from "../components/Faq";
import HomeBanner from "../components/HomeBanner";
function Career() {
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  return (
    <>
      <Box className="  mt-14  h-fit relative bg-gra-8 rounded-2xl">
        <img src={design} alt="" className="absolute top-0 right-0" />

        {!isSmallScreen ? (
          <div className="sm:h-[50vh]  md:h-[calc(100vh-154px)] w-[calc(100vw-32px)] xs:w-auto p-10">
            <div className="relative h-full w-full">
              <div className="z-10 absolute  p-6 md:p-7  xl:p-[60px] md:max-w-[62%] bg-gra-9 rounded-2xl md:rounded-br-[40px] xl:rounded-br-[50px] rounded-tr-none">
                <Title
                  className="inline font-normal text-[28px] lg:text-[48px] "
                  order={3}
                >
                  Welcome to
                  <Title
                    order={2}
                    className="inline !text-gre-7 font-normal text-[28px] lg:text-[48px] "
                  >
                    {" "}
                    Origin Bank
                  </Title>
                  <Title
                    className="inline font-normal text-[28px] lg:text-[48px] "
                    order={3}
                  >
                    {" "}
                    Careers!
                  </Title>
                </Title>
                <Text className="section-text text-center xs:text-left mt-[10px]  ">
                  Join Origin Bank for a fulfilling career in banking. We're
                  committed to excellence, professional growth, and making a
                  positive impact on customers and communities. Be part of our
                  mission to shape the future of banking. Join us today!
                </Text>
              </div>
              <img
                src={careerImg}
                alt=""
                className="absolute top-0   right-0 h-auto sm:h-[100%] w-full sm:w-auto z-0"
              />
            </div>
          </div>
        ) : (
          <MobileHero />
        )}
      </Box>
      <OurValues />
      <OurBenifets />
      <Jobs />
      <Faq />
      <HomeBanner />
    </>
  );
}

const MobileHero = () => (
  <div className="  p-[14px] md:p-10">
    <div className="relative h-full w-full">
      <img src={careerImg} alt="" className=" w-full  z-0" />
    </div>
    <div className="z-10 relative p-6 md:p-7  xl:p-[60px]  bg-gra-9 rounded-2xl   -mt-10 ">
      <Title
        className="inline font-normal text-[28px] lg:text-[48px] "
        order={3}
      >
        Welcome to
        <Title
          order={2}
          className="inline !text-gre-7 font-normal text-[28px] lg:text-[48px] "
        >
          {" "}
          Origin Bank
        </Title>
        <Title
          className="inline font-normal text-[28px] lg:text-[48px] "
          order={3}
        >
          {" "}
          Careers!
        </Title>
      </Title>
      <Text className="section-text text-center xs:text-left mt-[10px]  ">
        Join our team and embark on a rewarding journey in the banking industry.
        At Origin Bank, we are committed to fostering a culture of excellence
        and providing opportunities for professional growth. With a focus on
        innovation, customer service, and integrity, we strive to make a
        positive impact in the lives of our customers and communities. Join us
        today and be a part of our mission to shape the future of banking.
      </Text>
    </div>
  </div>
);
export default Career;
