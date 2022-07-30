// Libraries
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// importing Base component
import Base from "./Pages/Base";

// importing page components
import Home from "./Pages/page/Home";
import About from "./Pages/page/About";
import Dev from "./Pages/page/Dev";

// importing components
import Loading from "./components/Loading";

// playground component
const Play = lazy(() => import("./Pages/page/Playground"));

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
          <Suspense fallback={<Loading />}>
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
              <Play />
            </Base>
          </Suspense>
        }
      />
      {/* Dev Route */}
      <Route
        path="/about"
        element={
          <Base
            title="About"
            description="Know more about how I recreated the snake game in react.js using the linked list data structure."
            keywords={[
              "how linked lists work",
              "working linked list",
              "how to make linked list snake game using reactjs",
              "how to implement linked list in js",
              "how to implement linked list in typescript",
              "how to make game using react.js",
            ]}
            ogTitle="Behind the screen : Linked list snake game with React.js"
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
