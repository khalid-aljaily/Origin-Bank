import bag from "../../assets/briefcase.fill (1).svg";
import { jobs } from "../../utils";
import {
  Box,
  Button,
  Divider,
  Group,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
function Jobs() {
  return (
    <div className="mt-16 md:mt-24 text-center md:text-left">
      <div className="mb-[10px]">
        <Title
          className="inline font-semibold text-[28px] md:text-[38px]"
          order={2}
        >
          Job
          <Title
            order={2}
            className="inline !text-gre-7 font-semibold text-[28px] md:text-[38px]"
          >
            {" "}
            Openinigs
          </Title>
        </Title>
      </div>
      <Text className="section-text  mb-[50px] lg:mb-[60px]">
        Explore exciting job openings at Origin Bank, where we value talent,
        innovation, and a passion for customer service. Join our team and be
        part of shaping a brighter future in the banking industry
      </Text>
      <SimpleGrid className="gap-5 items-stretch grid-cols-1 lg:grid-cols-2">
        {jobs.map((job, index) => (
          <Box
            key={index}
            className="p-6 md:p-10 bg-gra-8 border-gra-7 border border-solid rounded-2xl"
          >
            <Title
              order={3}
              className="font-semibold text-left  text-xl md:text-2xl mb-[10px]"
            >
              {job.title}
            </Title>
            <Group className="mb-[30px] md:mb-10">
              <Text className="px-[14px] py-[6px] rounded-full bg-gra-9 border-gra-7 border-solid border section-text">
                Loacation: {job.location}
              </Text>
              <Text className="px-[10px] md:px-[14px] py-[6px]  md:py-[6px] rounded-full bg-gra-9 border-gra-7 border-solid border section-text">
                Department: {job.department}
              </Text>
            </Group>
            <Title
              order={4}
              className="text-xl text-left md:text-2xl font-semibold mb-2 "
            >
              About the Job
            </Title>
            <Text className="section-text text-left mb-[30px] md:mb-10">
              {job.about}
            </Text>
            <ul className="pl-0 space-y-[14px]">
              {job.reqirements.map((req, index) => (
                <Group key={index} className="flex-nowrap gap-2">
                  <img
                    src={bag}
                    alt="bag icon"
                    className="w-[20px] h-[20px] object-contain"
                  />
                  <Text className="section-text text-left">{req}</Text>
                </Group>
              ))}
            </ul>
            <Button className="px-5 py-[12px] font-medium">Apply Now</Button>
          </Box>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default Jobs;
