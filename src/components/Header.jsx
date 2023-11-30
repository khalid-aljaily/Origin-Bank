import { Anchor, Box, Button, Group, Text } from "@mantine/core";
import logo from "../assets/logo/shape-30.svg";
import { useDisclosure } from "@mantine/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { motion,AnimatePresence } from "framer-motion";
const links = ["Home", "Career", "About", "Security"];

function Header() {
  const location = useLocation();
  const [opened, { toggle }] = useDisclosure(false);
  const navigate = useNavigate();
  return (
    <Group
      justify="space-between"
      align="center"
      className=" py-[14px] px-6 border border-solid border-gra-5 rounded-full mt-[30px] relative w-full"
      bg={"gray.8"}
    >
      <Group
        onClick={() => {
          if (location.pathname != "/") navigate("/");
        }}
        className="cursor-pointer"
      >
        <img src={logo} alt="" className="w-[26px] md:w-[30px]" />
        <Text c={"white.0"}>Origin Bank</Text>
      </Group>
      <Group gap={5} visibleFrom="md">
        {links.map((link) => (
          <Anchor
            onClick={() => {
              if (location.pathname !== `/${link}`) {
                if (link == "Home" && location.pathname == "/") {
                  return;
                } else {
                  navigate(link == "Home" ? "/" : `/${link}`);
                  window.scrollTo(0, 0);
                }
              }
            }}
            key={link}
            c={"white.0"}
            className={`link px-6 py-3 text-sm hover:bg-gra-6 no-underline rounded-full  ${
              location.pathname.slice(1) == link && "bg-gra-6"
            } ${location.pathname =='/' && link =='Home'&&'bg-gra-6'}`}
          >
            {link}
          </Anchor>
        ))}
      </Group>
      <Group gap={5} visibleFrom="md">
        <Button
          onClick={() => {
            if (location.pathname != "/SignUp") {
              navigate("/SignUp");
            }
          }}
          variant="subtle"
          c={"white.0"}
          className="h-auto w-auto px-6 py-3 text-sm"
        >
          Sign Up
        </Button>
        <Button
          className="h-auto w-auto px-6 py-3 text-sm"
          onClick={() => {
            if (location.pathname != "/Login") {
              navigate("/Login");
            }
          }}
        >
          Login
        </Button>
      </Group>
      <Button
        className=" px-[14px] py-[6px] text-sm"
        onClick={() => toggle()}
        hiddenFrom="md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3 6.75C3 6.33579 3.33579 6 3.75 6H20.25C20.6642 6 21 6.33579 21 6.75C21 7.16421 20.6642 7.5 20.25 7.5H3.75C3.33579 7.5 3 7.16421 3 6.75ZM3 12C3 11.5858 3.33579 11.25 3.75 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12ZM11.25 17.25C11.25 16.8358 11.5858 16.5 12 16.5H20.25C20.6642 16.5 21 16.8358 21 17.25C21 17.6642 20.6642 18 20.25 18H12C11.5858 18 11.25 17.6642 11.25 17.25Z"
            fill="black"
          />
        </svg>
      </Button>
   
      <Box
        hidden = {!opened}
        className="absolute top-[75px] right-0 space-y-2  bg-gra-8 rounded-2xl p-5 w-full sm:w-80 z-20"
      >
        {links.map((link) => (
          <Anchor
            onClick={() => {
              if (location.pathname !== `/${link}`) {
                if (link == "Home" && location.pathname == "/") {
                  return;
                } else {
                  navigate(link == "Home" ? "/" : `/${link}`);
                  toggle();
                }
              }
            }}
            key={link}
            c={"white.0"}
            className={`link px-6 py-2 text-white text-sm hover:bg-gra-6 no-underline rounded-full block 
           ${location.pathname.slice(1) == link && "bg-gra-6"} ${location.pathname =='/' && link =='Home'&&'bg-gra-6'}`}
          >
            {link}
          </Anchor>
        ))}
        <Group gap={5} className="justify-center w-full">
          <Button
            onClick={() => {
              if (location.pathname != "/SignUp") {
                navigate("/SignUp");
                toggle();
              }
            }}
            variant="subtle"
            c={"white.0"}
            className=" px-[14px] py-[6px] text-sm"
          >
            Sign Up
          </Button>
          <Button
            c={"dark.9"}
            className="px-[14px] py-[6px] text-sm"
            onClick={() => {
              if (location.pathname != "/Login") {
                navigate("/Login");
                toggle();
              }
            }}
          >
            Login
          </Button>
        </Group>
      </Box>
       
    </Group>
  );
}

export default Header;
