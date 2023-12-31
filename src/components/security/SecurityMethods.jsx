import { Group, SimpleGrid, Text, Title } from "@mantine/core";
import React from "react";
import { securityMethods } from "../../utils";
import { motion } from "framer-motion";
function SecurityMethods() {
  const AnimatedGrid = motion(SimpleGrid);
  const gridVars = {
    hidden: {},
    open: {
      transition: { staggerChildren: 0.5 },
    },
  };
  const itemsVars = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  return (
    <div className="mt-16 md:mt-24 text-center md:text-left">
      <div className="mb-[10px]">
        <Title
          className="inline font-semibold text-[28px] md:text-[38px]"
          order={2}
        >
          How We
          <Title
            order={2}
            className="inline !text-gre-7 font-semibold text-[28px] md:text-[38px]"
          >
            {" "}
            Protect You
          </Title>
        </Title>
      </div>
      <Text className="section-text  lg:max-w-[80%] mb-[50px] lg:mb-[60px]">
        At Origin Bank, we prioritize the security and confidentiality of your
        financial information. Our state-of-the-art encryption technology and
        stringent data protection measures ensure your assets and transactions
        are safeguarded at all times
      </Text>

      <AnimatedGrid
        variants={gridVars}
        initial="hidden"
        whileInView="open"
        viewport={{ once: true }}
        cols={{ base: 1, md: 2 }}
        className="gap-5 "
      >
        {securityMethods.map((method, idx) => (
          <motion.div
            variants={itemsVars}
            key={idx}
            className="security-card p-[30px] md:p-10"
          >
            <Group className="gap-[12px] md:gap-[12px] mb-[18px] md:mb-5">
              <img src={method.icon} alt={method.title} />
              <Title
                order={3}
                className="font-normal text-left text-lg md:text-xl mb-[10px] md:mb-[14px]"
              >
                {method.title}
              </Title>
            </Group>
            <Text className="section-text">{method.content}</Text>
          </motion.div>
        ))}
      </AnimatedGrid>
    </div>
  );
}

export default SecurityMethods;
