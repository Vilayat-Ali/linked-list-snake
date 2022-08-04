// Libraries
import { Fragment, useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";

// hooks
import useWindow from "../../hooks/useWindow";

// UI
import { Box, Heading, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

type Props = {
  title: string;
  image: string;
  description: string;
  rating: number;
};

const FeatureCard = (props: Props) => {
  // hook
  const windowWidth = useWindow();
  const cardRef = useRef<any>();
  // animating
  useEffect(() => {
    autoAnimate(cardRef.current);
  }, []);
  // return JSX
  return (
    <Fragment>
      {windowWidth <= 700 ? (
        <Box className="shadow p-5" style={{ width: "90vw" }} ref={cardRef}>
          {/* Mobile View */}
          <Box>
            <img
              src={props.image}
              style={{ width: "86vw", height: "90vw", objectFit: "contain" }}
              alt="tech-image"
            />
          </Box>
          <Box>
            <Heading fontSize="2xl" className="text-center my-4">
              {props.title}
            </Heading>
            <Text fontSize="xl" className="text-justify mt-2">
              {props.description}
            </Text>
          </Box>
        </Box>
      ) : (
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          className="shadow p-5"
          style={{ width: "40vw" }}
          ref={cardRef}
        >
          {/* Desktop View */}
          <Box>
            <img
              src={props.image}
              style={{ width: "40vw", height: "20vw", objectFit: "contain" }}
              className="shadow px-4"
              alt="tech-image"
            />
          </Box>
          <Box
            className="pl-5"
            display="flex"
            flexDirection="column"
            justifyContent="start"
            alignItems="center"
            style={{ width: "inherit" }}
          >
            <Heading fontSize="2xl" className="text-center pb-2">
              {props.title}
            </Heading>
            <Text fontSize="xl" className="text-justify mt-2">
              {props.description}
            </Text>
          </Box>
        </Box>
      )}
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        className="shadow py-2"
      >
        <Text fontSize="xl" fontWeight="bold">
          Experience
        </Text>
        {[...Array(props.rating)].map((_ratingStar: any, index: any) => (
          <StarIcon key={index} color="red" className="mx-1" fontSize={"xl"} />
        ))}
        {[...Array(5 - props.rating)].map((_unratedStars: any, index: any) => (
          <StarIcon key={index} className="mx-1" />
        ))}
      </Box>
    </Fragment>
  );
};

export default FeatureCard;
