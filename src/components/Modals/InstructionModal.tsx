import React from "react";

// ui
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  ModalContent,
  Button,
  List,
  ListItem,
  ListIcon,
  Kbd,
  Code,
} from "@chakra-ui/react";

import {
  ChevronRightIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowForwardIcon,
  ArrowBackIcon,
} from "@chakra-ui/icons";

type Props = {
  isOpen: boolean;
  onOpen: any;
  onClose: any;
};

const InstructionModal = ({ isOpen, onOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Game Instructions</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <List spacing={2}>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              The game represents a simple snake game.
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              Snake moves with a constant velocity which can be altered from the
              side menu.
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              Controls
              <ListItem>
                Press{" "}
                <Kbd>
                  <ArrowUpIcon />
                </Kbd>{" "}
                to move snake <Code>forward in Y-Axis</Code>.
              </ListItem>
              <ListItem>
                Press{" "}
                <Kbd>
                  <ArrowDownIcon />
                </Kbd>{" "}
                to move snake <Code>backward in Y-Axis</Code>.
              </ListItem>
              <ListItem>
                Press{" "}
                <Kbd>
                  <ArrowForwardIcon />
                </Kbd>{" "}
                to move snake <Code>forward in X-Axis.</Code>
              </ListItem>
              <ListItem>
                Press{" "}
                <Kbd>
                  <ArrowBackIcon />
                </Kbd>{" "}
                to move snake <Code>backward in X-Axis.</Code>
              </ListItem>
            </ListItem>
          </List>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default InstructionModal;
