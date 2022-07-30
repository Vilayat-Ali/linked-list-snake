// UI component
import { Box, Spinner, Text } from "@chakra-ui/react";

type Props = {};

const Loading = (props: Props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ width: "100vw", height: "100vh" }}
    >
      <Spinner
        thickness="4.5px"
        speed="0.8s"
        emptyColor="gray.200"
        color="green.400"
        size="xl"
      />
      <Text fontWeight="bold" fontSize="2xl" textColor="green.400">
        Loading scripts...
      </Text>
    </Box>
  );
};

export default Loading;
