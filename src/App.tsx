import { Routes, Route } from "react-router-dom";

// importing page components
import Home from "./Pages/page/Home";
import Dev from "./Pages/page/Dev";
import Playground from "./Pages/page/Playground";

// importing Base component
import Base from "./Pages/Base";

type Props = {};

const App = (props: Props) => {
  return (
    <Routes>
      {/* Home Route */}
      <Route
        path="/"
        element={
          <Base
            title="Home"
            description="A modern snake game built with React.js that works with the concept of linked-lists. In the game, snake is represented as a linked list with each section of snake's body is represented as a separated linked list node."
            keywords={[
              "portfolio project",
              "personal project",
              "react.js game",
              "data-structures",
              "linked list",
              "professional project",
              "Syed Vilayat Ali Rizvi",
              "Vilayat's projects",
            ]}
          >
            <Home />
          </Base>
        }
      />
      {/* Playground Route */}
      <Route
        path="/play"
        element={
          <Base
            title="Playground"
            description="This is a project"
            keywords={[
              "Professional Projects",
              "Personal Project",
              "react project",
              "syed vilayat ali rizvi",
              "play react games",
              "react.js game",
              "react.js development",
            ]}
          >
            <Playground />
          </Base>
        }
      />
      {/* Dev Route */}
      <Route
        path="/dev"
        element={
          <Base
            title="Dev"
            description="This is a project"
            keywords={[
              "syed vilayat ali rizvi",
              "Syed Vilayat Ali Rizvi",
              "Vilayat's projects",
            ]}
          >
            <Dev />
          </Base>
        }
      />
    </Routes>
  );
};

export default App;
