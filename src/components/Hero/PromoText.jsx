import { Box, Button, Group, Stack, Text } from "@mantine/core";
import check from "../../assets/checkIcon.svg";

function PromoText() {
  return (
    <div className=" md:max-w-[45%]">
      <Group className="bg-gra-6 w-fit px-[10px] py-[5px] rounded-full mx-auto md:mx-0 gap-2 ">
        <img src={check} alt="" />
        <Text className="text-xs md:text-sm font-light">
          No LLC Required, No Credit Check.
        </Text>
      </Group>
      <div>
        <Text
          fz={{ base: "28px", md: "38px" }}
          className="inline-block leading-[150%] text-center md:text-left"
        >
          Welcome to Origin Bank Empowering Your{" "}
          <Text
            className="inline-block leading-[150%] text-center md:text-left "
            c={"green.7"}
            fz={{ base: "28px", md: "38px" }}
          >
            Financial
          </Text>
          <Text
            c={"green.7"}
            fz={{ base: "28px", md: "38px" }}
            className="inline text-center md:text-left leading-[150%] "
          >
            {" "}
            Journey
          </Text>
        </Text>
        <Text className="text-gra-1 text-sm md:text-base font-light text-center md:text-left">
          At Origin Bank, our mission is to provide comprehensive banking
          solutions that empower individuals and businesses to achieve their
          financial goals. We are committed to delivering personalized and
          innovative services that prioritize our customer's needs.
        </Text>
      </div>

      <Button className="px-[24px] py-[14px] mt-5 sm:mt-10 mx-auto md:mx-0 block ">
        Open Account
      </Button>
    </div>
  );
}

export default PromoText;
