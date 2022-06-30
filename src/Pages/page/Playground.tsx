// importing components
import Sidebar from "../../components/Sidebar";
import PlayZone from "../../components/PlayZone";

type Props = {};

const Playground = (props: Props) => {
  return (
    <div className="flex">
      <div className="d-flex">
        <Sidebar />
      </div>
      <div className="d-flex">
        <PlayZone />
      </div>
    </div>
  );
};

export default Playground;
