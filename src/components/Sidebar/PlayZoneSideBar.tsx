// importing react hooks
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

// ui
import { VStack, Text, Center, useDisclosure } from "@chakra-ui/react";

// importing assets
import pause from "../../assets/svg/pause.svg";
import speedometer from "../../assets/svg/speedometer.svg";
import color from "../../assets/svg/color.svg";
import instructions from "../../assets/svg/instructions.svg";

// importing components
import InputField from "../InputField";
import InstructionModal from "../Modals/InstructionModal";

type Props = {
  isGamePaused: boolean;
  pauseGameFunc: any;
  snakeSpeedFunc: any;
  snakeColorFunc: any;
};

const SideBar = (props: Props) => {
  // list options
  const listOptions: {
    option: string;
    icon: string;
    input?: any;
  }[] = [
    {
      option: "Pause Game",
      icon: pause,
    },
    {
      option: "Set Snake Speed",
      icon: speedometer,
      input: {
        title: "Enter snake's speed",
        type: "number",
        visibility: true,
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
    },
    {
      option: "Game Instructions",
      icon: instructions,
    },
  ];

  // state
  const [isSideBarOpen, setSideBarStatus] = useState<Boolean>(
    window.innerWidth < 600 ? false : true
  );
  const [menuInputState, setMenuInputState]: [any, any] = useState<any>(
    Object.create(null)
  );
  const [settingState, setSettingState]: [any, any] = useState<any>(
    Object.create(null)
  );

  // handle onClick
  const handleOnClick = (listOption: string) => {
    switch (listOption) {
      case "Pause Game":
        props.pauseGameFunc(!props.isGamePaused);
        break;
      case "Game Instructions":
        onOpen();
        break;
    }
  };

  const score = 10000;

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
              score > 1000000
                ? "green.500"
                : score > 1000
                ? "yellow.500"
                : "red.500"
            }
          >
            {score > 1000000
              ? `${score / 1000000} M`
              : score > 1000
              ? `${score / 1000} K`
              : `${score}`}
          </Text>
        </VStack>
        {/* Options */}
        <div className="overflow-y-auto py-4 px-3">
          <ul className="space-y-2">
            {listOptions.map((listOption, index) => (
              <li
                key={index}
                className="hover:bg-gray-200"
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
                    cb={(value: any) => {
                      console.log(value);
                    }}
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
};

export default SideBar;
