import {
  Box,
  Divider,
  Flex,
  SegmentedControl,
  Text,
  Title,
} from "@mantine/core";
import { useState } from "react";
import prod1 from "../assets/prod1.png";
import prod2 from "../assets/prod2.png";
import prod3 from "../assets/prod3.png";
import prod4 from "../assets/prod4.png";

const IndvProductsContent = [
  {
    icon: prod1,
    title: "Checking Accounts",
    content:
      "Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.",
  },
  {
    icon: prod2,
    title: "Savings Accounts",
    content:
      "Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.",
  },
  {
    icon: prod3,
    title: "Loans and Mortgages",
    content:
      "Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.",
  },
];
const busProductsContent = [
  {
    icon: prod3,
    title: "Business Loans",
    content:
      "Unlock growth and meet your business objectives with our tailored business loan solutions. Whether you're expanding operations, managing working capital, or investing in new equipment, our flexible financing options are designed to support your unique needs.",
  },
  {
    icon: prod1,
    title: "Business Checking Accounts",
    content:
      "Simplify your business finances with our dedicated checking accounts. From managing day-to-day transactions to accessing online banking and mobile features, our business checking accounts provide the tools you need to keep your finances in order.",
  },
  {
    icon: prod4,
    title: "Merchant Services",
    content:
      "Streamline your payment processes with our comprehensive merchant services. Accept payments seamlessly, whether in-store or online, with our credit card processing, point-of-sale systems, and online payment gateways. Elevate your business with efficient and secure payment solutions.",
  },
];
function OurProducts() {
  const [value, setValue] = useState("For individuals");
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
            Products
          </Title>
        </Title>
      </div>

      <Flex className="justify-between flex-col md:flex-row items-center">
        <Text className="section-text sm:max-w-[62%]  lg:max-w-[70%]">
          Discover a range of comprehensive and customizable banking products at
          Origin Bank, designed to suit your unique financial needs and
          aspirations.
        </Text>
        <div className="p-1 bg-gra-8 border border-gra-7 border-solid rounded-full w-fit mt-5 md:mt-0">
          <SegmentedControl
            value={value}
            onChange={setValue}
            data={[
              { label: "For individuals", value: "For individuals" },
              { label: "For Businesses", value: "For Businesses" },
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
      <Flex className="mt-[60px] md:mt-20  flex-col md:flex-row ">
        {value == "For Businesses" ? (
          <ProductView product={busProductsContent} />
        ) : (
          <ProductView product={IndvProductsContent} />
        )}
      </Flex>
    </div>
  );
}
const ProductView = ({ product }) => {
  return product.map((prod, idx) => (
    <div key={idx} className="relative">
      <Box
        className={`text-center py-[30px] md:py-0 md:px-[30px] ${
          idx == 2 && "!pr-0"
        } ${idx == 0 && "!pl-0"} ${idx == 0 && "!pt-0"} ${idx == 2 && "!pb-0"}`}
      >
        <img src={prod.icon} alt={prod.title} />
        <Title
          order={3}
          className="font-normal text-[20px] sm:text-base lg:text-[20px] mt-5 md:mt-6 mb-4"
        >
          {prod.title}
        </Title>
        <Text className="centered-text sm:text-[12px] lg:text-base">
          {prod.content}
        </Text>
      </Box>
      {idx != 0 && (
        <Divider
          orientation={"vertical"}
          visibleFrom="sm"
          color="dark.6"
          w={2}
          h={"100%"}
          className="absolute top-0"
        />
      )}
      {idx != 0 && (
        <Divider
          orientation={"horizontal"}
          hiddenFrom="sm"
          color="dark.6"
          w={"100%"}
          h={2}
          className="absolute top-0"
        />
      )}
    </div>
  ));
};
export default OurProducts;
