import { Text, Title } from "@mantine/core";
import React from "react";
import UseForIndviduals from "./UseForIndviduals";
import UseForBusinesses from "./UseForBusinesses";

function UseCases() {
  return (
    <div className="mt-24 text-center md:text-left">
      <Title
        order={2}
        className="inline !text-gre-7 font-semibold text-[28px] md:text-[38px]"
      >
        {" "}
        Use Cases
      </Title>
      <Text className="section-text  lg:max-w-[70%] mb-[60px]">
        Discover a range of comprehensive and customizable banking products at
        Origin Bank, designed to suit your unique financial needs and
        aspirations.
      </Text>
      <UseForIndviduals />
      <UseForBusinesses />
    </div>
  );
}

export default UseCases;
