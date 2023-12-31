import {
  Anchor,
  Box,
  Button,
  Divider,
  Flex,
  Group,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import React, { useRef } from "react";
import design from "../assets/Abstract Design (4).svg";
import eye from "../assets/eyeIcon.svg";
import fb from "../assets/logWithG.svg";
import g from "../assets/logWithF.svg";
import a from "../assets/logWithA.svg";
import { useNavigate } from "react-router-dom";
function Login() {
  const password = useRef();
  const navigate = useNavigate();
  const showPassword = () => {
    if (password.current.type === "password") {
      password.current.type = "text";
    } else {
      password.current.type = "password";
    }
  };
  return (
    <Box className="  mt-14  h-fit relative bg-gra-8 rounded-2xl md:px-[200px] md:py-20 ">
      <img src={design} alt="" className="absolute top-0 right-0" />
      <Title
        order={2}
        className="text-center !text-gre-7 font-medium text-[28px] md:text-[38px] mb-[10px] md:mb-4 relative z-10"
      >
        Login
      </Title>
      <Text className="centered-text mb-10 md:mb-[60px]">
        Welcome back! Please log in to access your account.
      </Text>
      <Flex className="justify-between gap-5 md:gap-6 flex-col lg:flex-row">
        <TextInput
          classNames={{
            input:
              "p-4 md:p-5 bg-gra-9 text-white font-light h-auto w-full leading-[150%] ",
            wrapper: "w-auto !h-[unset]",
          }}
          type="email"
          className="!h-[unset] w-full  rounded-full flex-1"
          placeholder="Enter Your Email"
        ></TextInput>
        <TextInput
          classNames={{
            input:
              "p-4 md:p-5 bg-gra-9 text-white font-light h-auto w-full leading-[150%] ",
            wrapper: "w-auto !h-[unset]",
          }}
          ref={password}
          type="password"
          className="!h-[unset] w-full  rounded-full flex-1"
          placeholder="Enter Your Password"
          rightSection={
            <Button className="!px-0 bg-transparent mr-4">
              <img src={eye} alt="eye" onClick={showPassword} />
            </Button>
          }
        />
      </Flex>
      <Text>
        <Anchor className="!text-white block text-center  my-6 md:my-[30px] font-normal">
          Forgot Your password?
        </Anchor>
      </Text>
      <Stack className="xl:mx-[130px] gap-6">
        <Button className="px-6 py-[14px] font-normal text-sm">Login</Button>
        <Button
          className="px-6 py-[14px] bg-gra-6 !text-white font-normal text-sm"
          onClick={() => navigate("/SignUp")}
        >
          Sign Up
        </Button>
        <Divider
          label={
            <Text className="text-sm font-normal text-gra-3 px-[16px]">
              Or Continue with
            </Text>
          }
        />
        <Group className="mx-auto gap-5">
          <Button className="!p-0 bg-transparent">
            <img src={g} alt="google" />
          </Button>
          <Button className="!p-0 bg-transparent">
            <img src={fb} alt="facebook" />
          </Button>
          <Button className="!p-0 bg-transparent">
            <img src={a} alt="apple" />
          </Button>
        </Group>
      </Stack>
    </Box>
  );
}

export default Login;
