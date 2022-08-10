import { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

const Testimonial = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        width: { base: "90%", md: "40%" },
      }}
    >
      {children}
    </Box>
  );
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export type propType = {
  testimonials: {
    title: string;
    message: string;
    image: string;
    name: string;
    position: string;
  }[];
};

const Testimonials = (props: propType) => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Recent Project Reviews</Heading>
          <Text>
            There is another level of satisfaction involved when reading through
            these feedbacks!
          </Text>
        </Stack>
        <Stack
          direction="row"
          spacing={{ base: 10, md: 4, lg: 10 }}
          sx={{
            overflowX: "scroll",
          }}
        >
          {props.testimonials.map((testimonial: any, index: any) => (
            <Testimonial key={index}>
              <TestimonialContent>
                <TestimonialHeading>{testimonial.title}</TestimonialHeading>
                <TestimonialText>{testimonial.message}</TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={testimonial.image}
                name={testimonial.name}
                title={testimonial.position}
              />
            </Testimonial>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Testimonials;
