// importing react hooks
import { useState, memo } from "react";
import { Helmet } from "react-helmet";

// ui
import {
  VStack,
  Text,
  Center,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

// importing assets
import pause from "../../assets/svg/pause.svg";
import speedometer from "../../assets/svg/speedometer.svg";
import color from "../../assets/svg/color.svg";
import instructions from "../../assets/svg/instructions.svg";
import play from "../../assets/svg/play.svg";
import pin from "../../assets/svg/pin.svg";

// importing components
import InputField from "../InputField";
import InstructionModal from "../Modals/InstructionModal";

type Props = {
  isGamePaused: boolean;
  gameScore: number;
  pauseGameFunc: any;
  snakeSpeedFunc: any;
  snakeColorFunc: any;
  showCoordFunc: any;
  showCoord: boolean;
};

const SideBar = memo((props: Props) => {
  // state
  const [isSideBarOpen, setSideBarStatus] = useState<Boolean>(
    window.innerWidth < 600 ? false : true
  );

  // toast
  const toast = useToast();

  // list options
  const listOptions: {
    option: string;
    icon: string;
    input?: any;
    cb?: any;
  }[] = [
    {
      option: "Pause Game",
      icon: pause,
    },
    {
      option: "View Coordinates",
      icon: pin,
    },
    {
      option: "Set Snake Speed",
      icon: speedometer,
      input: {
        title: "Enter snake's speed",
        type: "number",
        visibility: true,
      },
      cb: (value: number) => {
        if (value) {
          props.snakeSpeedFunc(value);
        }
      },
    },
    {
      option: "Set Snake Color",
      icon: color,
      input: {
        title: "Choose snake's color",
        type: "color",
        visibility: true,
      },
      cb: (value: string) => {
        props.snakeColorFunc(value);
        toast({
          title: "Snake color have been updated",
          description: `Snake color have been updated to ${value}.`,
          status: "info",
          duration: 4500,
          isClosable: true,
        });
      },
    },
    {
      option: "Game Instructions",
      icon: instructions,
    },
  ];

  // handle onClick
  const handleOnClick = (listOption: string) => {
    switch (listOption) {
      case "Pause Game":
        props.pauseGameFunc(!props.isGamePaused);
        toast({
          title: `Game have been ${
            props.isGamePaused ? "paused!" : "resumed!"
          }`,
          description: `Click on 'Pause Game' again to ${
            props.isGamePaused ? "resume" : "pause"
          } the game.`,
          status: "info",
          duration: 4500,
          isClosable: true,
        });
        break;
      case "View Coordinates":
        props.showCoordFunc(!props.showCoord);
        break;
      case "Game Instructions":
        onOpen();
        break;
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Electrolize&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      {/* Menu */}
      <aside
        className={isSideBarOpen ? "w-64 bg-gray-50 shadow" : "hidden"}
        aria-label="Sidebar"
        style={{ height: "80vh" }}
      >
        {/* Score Board */}
        <VStack
          direction={"column"}
          justifyContent="flex-start"
          alignItems={"center"}
          py={50}
        >
          <Center>
            <Text fontFamily={"'Electrolize', sans-serif;"} fontSize={60}>
              SCORE
            </Text>
          </Center>
          <Text
            fontFamily={"'Electrolize', sans-serif;"}
            fontSize={30}
            color={
              props.gameScore > 1000000
                ? "green.500"
                : props.gameScore > 1000
                ? "yellow.500"
                : "red.500"
            }
          >
            {props.gameScore > 1000000
              ? `${props.gameScore / 1000000} M`
              : props.gameScore > 1000
              ? `${props.gameScore / 1000} K`
              : `${props.gameScore}`}
          </Text>
        </VStack>
        {/* Options */}
        <div className="overflow-y-auto py-4 px-3">
          <ul className="space-y-2">
            {listOptions.map((listOption, index) => (
              <li
                key={index}
                className=""
                onClick={() => {
                  handleOnClick(listOption.option);
                }}
                style={{ cursor: "pointer" }}
              >
                <a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg">
                  <img src={listOption.icon} alt="icon" />
                  <span className="ml-3">{listOption.option}</span>
                </a>
                {listOption.input ? (
                  <InputField
                    title={listOption.input.title}
                    type={listOption.input.type}
                    isVisible={listOption.input.visibility}
                    cb={listOption?.cb}
                  />
                ) : (
                  <></>
                )}
                <hr />
              </li>
            ))}
          </ul>
        </div>
        <InstructionModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      </aside>
    </>
  );
});

export default SideBar;
