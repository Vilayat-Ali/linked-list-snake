// importing react hooks
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  Box,
  Grid,
  GridItem,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Tooltip,
  Text,
  useToast,
  Center,
  Spinner,
  Highlight,
  Code,
} from "@chakra-ui/react";

// importing assets
import Node from "../../assets/code-snippets/Node.png";
import Snake from "../../assets/code-snippets/Snake.png";
import PlayArea from "../../assets/code-snippets/PlayArea.png";
import linkedListDiagram from "../../assets/diagram/linkedlist-diagram.png";

// importing tech
import React from "../../assets/tech/react.png";
import TypeScript from "../../assets/tech/typescript.png";
import Firebase from "../../assets/tech/firebase.jpg";
import Chakra from "../../assets/tech/chakra.png";

// firebase
import { db } from "../../firebase";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";

type Props = {};

const About = (props: Props) => {
  // firestore
  const reactionRef = collection(db, "Reaction");

  // state
  const [isLoading, changeLoadingState]: [boolean, any] =
    useState<boolean>(true);
  const [reaction, setReaction] = useState<any>(); // data fetched from database

  // useEffect
  useEffect(() => {
    getReactionFromDB();
  }, []);

  // function to retrieve reactions from firestore
  const getReactionFromDB = async () => {
    await getDocs(reactionRef)
      .then((snapshot: any) => {
        let reactions: any = {};
        snapshot.docs.forEach((snap: any) => {
          reactions = { ...snap.data(), id: snap.id };
        });
        setReaction(reactions);
        changeLoadingState(false);
      })
      .catch((err: any) => {
        toast({
          title: "Error while retrieving votes.",
          description: "Sorry for the inconvenience!",
          status: "error",
          duration: 4500,
          isClosable: true,
        });
      });
  };

  // toast
  const toast = useToast();

  // handle on vote
  const onVote = async (votedTo: string) => {
    // can't vote if already voted
    if (localStorage.getItem("voted") === "true") {
      toast({
        title: "Vote limit exceeded!",
        description: "You can vote for only 1 time per session",
        status: "error",
        duration: 4500,
        isClosable: true,
      });
    } else {
      // vote casting
      const docRef = doc(db, "Reaction", process.env.REACT_APP_doc_id!);
      switch (votedTo) {
        case "LovedIt":
          // save to database
          updateDoc(docRef, {
            LovedIt: reaction.LovedIt + 1,
          });
          // update state
          setReaction(() => {
            reaction["LovedIt"] = reaction["LovedIt"] + 1;
            return reaction;
          });
          // updating UI
          getReactionFromDB();
          break;
        case "AppreciatedEffort":
          // save to database
          updateDoc(docRef, {
            AppreciatedEffort: reaction.AppreciatedEffort + 1,
          });
          // update state
          setReaction(() => {
            reaction["AppreciatedEffort"] = reaction["AppreciatedEffort"] + 1;
            return reaction;
          });
          // updating UI
          getReactionFromDB();
          break;
        case "AcknowledgedIt":
          // save to database
          updateDoc(docRef, {
            AcknowledgedIt: reaction.AcknowledgedIt + 1,
          });
          // update state
          setReaction(() => {
            reaction["AcknowledgedIt"] = reaction["AcknowledgedIt"] + 1;
            return reaction;
          });
          // updating UI
          getReactionFromDB();
          break;
        case "FoundItUnique":
          // save to database
          updateDoc(docRef, {
            FoundItUnique: reaction.FoundItUnique + 1,
          });
          // update state
          setReaction(() => {
            reaction["FoundItUnique"] = reaction["FoundItUnique"] + 1;
            return reaction;
          });
          // updating UI
          getReactionFromDB();
          break;
      }

      // setting localstorage
      localStorage.setItem("voted", "true");
    }
  };

  return (
    <>
      {/* Helmet */}
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Hahmlet&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {/* Helmet */}
      {/* Wrapper */}
      <Box px={4}>
        {/* Body */}
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-evenly"
          alignItems="center"
          px={{ base: 2, md: 5 }}
          my={4}
        >
          {/* Insights */}
          {isLoading ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          ) : (
            <Box p={{ base: 4, md: 8 }}>
              <Text
                fontSize={{ base: "8vw", md: "2vw" }}
                textAlign="center"
                fontFamily={"'Hahmlet', serif"}
                p={4}
              >
                Insights
              </Text>
              <Grid
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(2, 1fr)"
                gap={4}
                textAlign="center"
              >
                {/* Loved it */}
                <Tooltip
                  label="Vote, if you loved the project too!"
                  fontSize="md"
                >
                  <GridItem
                    rowSpan={4}
                    colSpan={1}
                    style={{ cursor: "pointer" }}
                    onClick={() => onVote("LovedIt")}
                  >
                    <Stat className="shadow" p={4}>
                      <StatLabel fontSize={50}>❤️</StatLabel>
                      <StatNumber>
                        {reaction.LovedIt >= 1000
                          ? `${reaction.LovedIt / 1000}K`
                          : reaction.LovedIt}
                      </StatNumber>
                      <StatHelpText>
                        Loved and enjoyed this project!
                      </StatHelpText>
                    </Stat>
                  </GridItem>
                </Tooltip>
                {/* Appreciate it */}
                <Tooltip
                  label="Vote, if you appreciate the effort too!"
                  fontSize="md"
                >
                  <GridItem
                    rowSpan={4}
                    colSpan={1}
                    style={{ cursor: "pointer" }}
                    onClick={() => onVote("AppreciatedEffort")}
                  >
                    <Stat className="shadow" p={4}>
                      <StatLabel fontSize={50}>👏</StatLabel>
                      <StatNumber>
                        {reaction.AppreciatedEffort >= 1000
                          ? `${reaction.AppreciatedEffort / 1000}K`
                          : reaction.AppreciatedEffort}
                      </StatNumber>
                      <StatHelpText>Appreciated the effort!</StatHelpText>
                    </Stat>
                  </GridItem>
                </Tooltip>
                {/* Acknowledged it */}
                <Tooltip
                  label="Vote, if you acknowledge the idea too!"
                  fontSize="md"
                >
                  <GridItem
                    rowSpan={4}
                    colSpan={1}
                    style={{ cursor: "pointer" }}
                    onClick={() => onVote("AcknowledgedIt")}
                  >
                    <Stat className="shadow" p={4}>
                      <StatLabel fontSize={50}>🙌</StatLabel>
                      <StatNumber>
                        {reaction.AcknowledgedIt >= 1000
                          ? `${reaction.AcknowledgedIt / 1000}K`
                          : reaction.AcknowledgedIt}
                      </StatNumber>
                      <StatHelpText>Acknowledged the idea!</StatHelpText>
                    </Stat>
                  </GridItem>
                </Tooltip>
                {/* Found it unique */}
                <Tooltip
                  label="Vote, if you found this project unique!"
                  fontSize="md"
                >
                  <GridItem
                    rowSpan={4}
                    colSpan={1}
                    style={{ cursor: "pointer" }}
                    onClick={() => onVote("FoundItUnique")}
                  >
                    <Stat className="shadow" p={4}>
                      <StatLabel fontSize={50}>🤘</StatLabel>
                      <StatNumber>
                        {reaction.FoundItUnique >= 1000
                          ? `${reaction.FoundItUnique / 1000}K`
                          : reaction.FoundItUnique}
                      </StatNumber>
                      <StatHelpText>Found this project as unique!</StatHelpText>
                    </Stat>
                  </GridItem>
                </Tooltip>
              </Grid>
            </Box>
          )}

          {/* Inspiration */}
          <Box p={{ base: 4, md: 8 }}>
            <Text
              fontSize={{ base: "8vw", md: "2vw" }}
              textAlign="center"
              fontFamily={"'Hahmlet', serif"}
              p={4}
            >
              Inspiration
            </Text>
            <Center>
              <Tooltip
                label="Clement's this video is the soul inspiration behind this project"
                fontSize={"md"}
              >
                <iframe
                  width={window.innerWidth < 700 ? "380" : "800"}
                  height={window.innerWidth < 700 ? "315" : "360"}
                  src="https://www.youtube.com/embed/7Rkib_fvowE"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Tooltip>
            </Center>
          </Box>
        </Box>
        {/* Tech Stack */}
        <Box>
          <Text
            fontSize={{ base: "8vw", md: "2vw" }}
            textAlign="center"
            fontFamily={"'Hahmlet', serif"}
            p={4}
          >
            Tech Stack
          </Text>
          <Box
            display="flex"
            flexDirection={window.innerWidth < 700 ? "column" : "row"}
            justifyContent="space-evenly"
            alignItems="center"
          >
            <img
              src={React}
              alt="react.js-logo-img"
              width={"200vw"}
              style={{ margin: "2vw auto" }}
            />
            <img
              src={Chakra}
              alt="chakra-logo-img"
              width={"200vw"}
              style={{ margin: "2vw auto" }}
            />
            <img
              src={TypeScript}
              alt="typescript-logo-img"
              width={"200vw"}
              style={{ margin: "2vw auto" }}
            />
            <img
              src={Firebase}
              alt="firebase-logo-img"
              width={"200vw"}
              style={{ margin: "2vw auto" }}
            />
          </Box>
        </Box>
        {/* Approach */}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          my={4}
        >
          <Text
            fontSize={{ base: "8vw", md: "2vw" }}
            textAlign="center"
            fontFamily={"'Hahmlet', serif"}
            my={4}
          >
            Approach
          </Text>
          <Box
            className="shadow"
            width={window.innerWidth < 700 ? "98vw" : "90%"}
          >
            <Text width="inherit" p={8} textAlign="justify">
              <Highlight
                query={["Linked List"]}
                styles={{ px: "2", py: "1", bg: "teal.100" }}
              >
                The approach to this massive was initially seemed to be subtle,
                as I knew that I have to implement Linked List inorder to
                demonstrate the snake on the board.
              </Highlight>
              <br />
              <br />
              But as I started gaining momentum and as the project progresses, I
              encountered some of the toughest algorithmic problems. The most
              important one being how to make the data in the linked list
              "flow", or in other terms, how to make snake move.
              <br />
              <br />
              After some weeks of intense research and brainstorming, I deviced
              my own algorithm for "flowing" states in the linked list so as to
              make it "move".
              <br />
              <br />
              First I created a <Code>Node</Code> class, so as to use it to
              implement a helper class for implementing my linked list or here
              as in this case, my snake for the game.
            </Text>
            <img
              src={Node}
              style={
                window.innerWidth < 700
                  ? { width: "inherit", height: "auto" }
                  : { width: "40vw", height: "auto", margin: "0 auto" }
              }
              alt="node-class-in-ts"
            />
            <Text width="inherit" p={4} textAlign="justify">
              The snake is abstractly nothing but a linked list. The simple
              mechanics like growing the snake was nothing but linked list
              trickery like appening a node at the tail of the linked list.
            </Text>
            <img
              src={Snake}
              style={
                window.innerWidth < 700
                  ? { width: "inherit", height: "auto" }
                  : { width: "40vw", height: "auto", margin: "0 auto" }
              }
              alt=" Snake-class-in-ts"
            />
            <Text width="inherit" p={4} textAlign="justify">
              Unlike Clement, I approached the movement mechanics in a much
              different way. I deviced mechanics for snake movement as the
              constant process of data passing from one node to its succeeding
              node. As shown below in the diagram.
            </Text>
            <img
              src={linkedListDiagram}
              style={
                window.innerWidth < 700
                  ? { width: "inherit", height: "auto" }
                  : { width: "40vw", height: "auto", margin: "0 auto" }
              }
              alt=" linked-list-diagram"
            />
            <Text width="inherit" p={4} textAlign="justify">
              With that approach, I managed to move my snake without breaking
              it, as faced by Clement during coding the mechanics of the snake
              in the game. After getting the state "flowing" throughout the
              linked list, the only thing was due to apply it to the matrix
              using <Code>useRef</Code> hook of the react library and see the
              snake come to life!
            </Text>
            <img
              src={PlayArea}
              style={
                window.innerWidth < 700
                  ? { width: "inherit", height: "auto" }
                  : { width: "40vw", height: "auto", margin: "0 auto" }
              }
              alt=" linked-list-diagram"
            />
            <Text width="inherit" p={4} textAlign="justify">
              The unique <Code>cellId</Code> and <Code>rowId</Code> facilitates
              in displaying or painting snake on the screen.
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
