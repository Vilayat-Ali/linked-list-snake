// Libraries
import { Routes, Route } from "react-router-dom";

// importing page components
import Home from "./Pages/page/Home";
import About from "./Pages/page/About";
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
            ogTitle="Project : A React-based snake game that works on the concept of linked list"
            ogDescription="A modern snake game built with React.js that works with the concept of linked-lists. In the game, snake is represented as a linked list with each section of snake's body is represented as a separated linked list node."
            ogImage="https://i.morioh.com/210521/44bb944d.webp"
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
            ogTitle="Playground : Enjoy the project!"
            ogDescription="Play! oh, I mean test my project. Evaluate the idea of reinventing the same old game of snake with the mechanics of a linked list."
            ogImage="https://png.clipart.me/image_preview/512/joystick-vector-9609.jpg"
          >
            <Playground />
          </Base>
        }
      />
      {/* Dev Route */}
      <Route
        path="/about"
        element={
          <Base
            title="About"
            description="This is a project"
            keywords={[
              "syed vilayat ali rizvi",
              "Syed Vilayat Ali Rizvi",
              "Vilayat's projects",
            ]}
            ogTitle="Meet the dev : Syed Vilayat Ali Rizvi"
            ogDescription="Hello 👋! I am Syed Vilayat Ali Rizvi, a passionate programmer who likes to transfer ideas from his mind onto a monitor."
            ogImage="https://avatars.githubusercontent.com/u/73014428?v=4"
          >
            <About />
          </Base>
        }
      />
      {/* Dev Route */}
      <Route
        path="/dev"
        element={
          <Base
            title="Dev"
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
            ogTitle="Meet the dev : Syed Vilayat Ali Rizvi"
            ogDescription="Hello 👋! I am Syed Vilayat Ali Rizvi, a passionate programmer who likes to transfer ideas from his mind onto a monitor."
            ogImage="https://avatars.githubusercontent.com/u/73014428?v=4"
          >
            <Dev />
          </Base>
        }
      />
    </Routes>
  );
};

export default App;
