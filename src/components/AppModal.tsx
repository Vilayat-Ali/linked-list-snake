import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { useEffect } from "react";

export type props = {
  trigger: boolean;
  modifyTrigger: any;
  title: string;
  children: React.ReactNode;
};

const AppModal = (props: props) => {
  // state
  const { isOpen, onOpen, onClose } = useDisclosure();
  //useEffect
  useEffect(() => {
    if (!props.trigger) onOpen();
  }, [props.trigger]);
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          props.modifyTrigger(!props.trigger);
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{props.children}</ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                onClose();
                props.modifyTrigger(!props.trigger);
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AppModal;
