import React from "react";
import { Box, Text, Title } from "@mantine/core";
import securityImg from "../assets/securityImage.png";
import design from "../assets/Abstract Design (4).svg";
import { useMediaQuery } from "@mantine/hooks";
import SecurityMethods from "../components/security/SecurityMethods";
import Faq from "../components/Faq";
function Security() {
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
                  Your Security is Our
                  <Title
                    order={2}
                    className="inline !text-gre-7 font-normal text-[28px] lg:text-[48px] "
                  >
                    {" "}
                    Top Priority
                  </Title>
                </Title>
                <Text className="section-text text-center xs:text-left mt-[10px]  ">
                  At Origin Bank, we understand the importance of keeping your
                  financial information secure. We employ robust security
                  measures and advanced technologies to protect your personal
                  and financial data. Rest assured that when you bank with us,
                  your security is our utmost priority.
                </Text>
              </div>
              <img
                src={securityImg}
                alt=""
                className="absolute top-0   right-0 h-auto sm:h-[100%] w-full sm:w-auto z-0 grayscale rounded-xl"
              />
            </div>
          </div>
        ) : (
          <MobileHero />
        )}
      </Box>
      <SecurityMethods />
      <Faq />
    </>
  );
}

export default Security;

const MobileHero = () => (
  <div className="  p-[14px] md:p-10">
    <div className="relative h-full w-full">
      <img
        src={securityImg}
        alt=""
        className=" w-full  z-0 grayscale rounded-2xl"
      />
    </div>
    <div className="z-10 relative p-6 md:p-7  xl:p-[60px]  bg-gra-9 rounded-2xl   -mt-10 ">
      <Title
        className="inline font-normal text-[28px] lg:text-[48px] "
        order={3}
      >
        Where Banking Meets
        <Title
          order={2}
          className="inline !text-gre-7 font-normal text-[28px] lg:text-[48px] "
        >
          {" "}
          Excellence!
        </Title>
      </Title>
      <Text className="section-text text-center xs:text-left mt-[10px]  ">
        Origin Bank transforms banking into an empowering experience, fostering
        the growth of individuals and businesses. As a trusted institution, we
        exceed expectations through innovative solutions, personalized service,
        and unwavering integrity. Join us for a journey of banking excellence.
      </Text>
    </div>
  </div>
);
