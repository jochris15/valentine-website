import Home from "./views/Home";
import Question from "./views/Question";
import { Routes, Route, useLocation } from "react-router";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<Question />} />
          <Route path="/valentine" element={<Home />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;