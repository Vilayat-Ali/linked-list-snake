import Head from "react-helmet";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Kbd,
  Select,
  Center,
} from "@chakra-ui/react";

// hooks
import useWindow from "../../hooks/useWindow";

// config
import config from "../../config/app.config";

// version
export type github_version_type = {
  version: string;
  github_branch: string;
  stable: boolean;
};
const github_version: github_version_type[] = config.version_history;

const Home = () => {
  // state
  const [githubLink, setGithubLink]: [string, any] = useState<string>("");
  const [message, setMessage]: [string | null, any] = useState<string | null>(
    null
  );

  // responsive hook
  const windowWidth = useWindow();

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Container
        maxW={"3xl"}
        style={windowWidth < 700 ? { width: "100vw", height: "90vh" } : {}}
      >
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 5, md: 12 }}
          mt={windowWidth < 700 ? 10 : 0}
        >
          <Heading
            fontWeight={600}
            fontSize={
              windowWidth < 700
                ? { base: "5xl", sm: "6xl", md: "6xl" }
                : { base: "2xl", sm: "6xl", md: "6xl" }
            }
            lineHeight={"120%"}
          >
            Snake Game {windowWidth < 700 && <br />} <i>using</i>{" "}
            {windowWidth < 700 && <br />} {windowWidth > 700 && <br />}
            <Text as={"span"} color={"green.400"}>
              <b>Linked List</b>
            </Text>
          </Heading>
          <Text color={"gray.500"} top={windowWidth < 700 ? 20 : 0}>
            I have implemented the concept of linked list into a fun project,
            proving that linked lists are a lot of fun!
          </Text>
          <Box>
            <Kbd>Linked Lists</Kbd> + <Kbd>JavaScript</Kbd> = <Kbd>Fun 😎</Kbd>
          </Box>

          <Center>
            <Box
              display={windowWidth > 600 ? "flex" : "block"}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box mt={"12px"} width={windowWidth > 700 ? 500 : 300}>
                <Text color={"gray.400"} sx={{ margin: "12px auto" }}>
                  Version{" "}
                  <Text
                    color={
                      message
                        ? message === "(may be buggy)"
                          ? "red.500"
                          : "green.500"
                        : ""
                    }
                  >
                    {message}
                  </Text>
                </Text>
                <Stack
                  direction={windowWidth > 700 ? "row" : "column"}
                  align={"center"}
                  spacing={4}
                >
                  <Select
                    onChange={(e) => {
                      e.preventDefault();
                      setGithubLink(e.target.value);
                      setMessage(
                        github_version.filter(
                          (v: any) =>
                            v.github_branch ===
                              e.target.value.substring(
                                54,
                                e.target.value.length
                              ) && v.stable
                        ).length !== 0
                          ? "(stable release)"
                          : e.target.value.charCodeAt(0) === 104
                          ? "(may be buggy)"
                          : ""
                      );
                    }}
                  >
                    {github_version.map((version, index) => (
                      <option
                        value={`https://github.com/Vilayat-Ali/linked-list-snake/tree/${version.github_branch}`}
                        key={index}
                      >
                        {version.version}
                      </option>
                    ))}
                  </Select>
                  <Button
                    onClick={() => (window.location.href = `${githubLink}`)}
                    colorScheme={"green"}
                    bg={"green.400"}
                    px={6}
                    _hover={{
                      bg: "green.500",
                    }}
                    variant="solid"
                    padding={4}
                    width={60}
                  >
                    View in Github
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Center>

          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
            top={windowWidth < 700 ? 10 : 0}
          >
            <Link to="/play">
              <Button
                colorScheme={"green"}
                bg={"green.400"}
                rounded={"full"}
                px={6}
                _hover={{
                  bg: "green.500",
                }}
              >
                Play the game
              </Button>
            </Link>

            <Box>
              <Icon
                as={Arrow}
                color={useColorModeValue("gray.800", "gray.300")}
                w={71}
                position={"absolute"}
                right={"-80px"}
                transform={"rotate(-10deg)"}
                top={"15px"}
              />
              <Text
                fontSize={"lg"}
                fontFamily={"Caveat"}
                position={"absolute"}
                right={"-120px"}
                top={"-15px"}
                transform={"rotate(10deg)"}
              >
                It's really amazing!
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

const Arrow = createIcon({
  displayName: "Arrow",
  viewBox: "0 0 72 24",
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
});

export default Home;
