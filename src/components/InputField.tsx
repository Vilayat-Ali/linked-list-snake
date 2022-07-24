// ui
import { Input } from "@chakra-ui/react";

type Props = {
  title: string;
  type: string;
  isVisible: boolean;
  cb: any;
};

const InputField = (props: Props) => {
  return (
    <Input
      display={props.isVisible ? "" : "none"}
      type={props.type}
      placeholder={props.title}
      onChange={(e: any) => {
        e.preventDefault();
        props.cb(e.target.value);
      }}
    />
  );
};

export default InputField;
