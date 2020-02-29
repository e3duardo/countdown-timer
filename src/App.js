import React, { useState, useRef, useMemo } from "react";
import styled, { keyframes } from "styled-components";
import { darken } from "polished";
import GlobalStyles from "./styles/global";
import { useInterval } from "./util";
import pause from "./assets/pause.svg";
import resume from "./assets/resume.svg";

function App() {
  const inputRef = useRef();
  const [count, setCount] = useState(-1);
  const [half, setHalf] = useState(-1);
  const [velocity, setVelocity] = useState(1);
  const [running, setRunning] = useState(false);

  useInterval(() => {
    if (!running) return;
    const newCount = count - 1;
    setCount(newCount);
    if (newCount === 0) {
      setRunning(false);
    }
    console.log(newCount);
  }, 1000 / velocity);

  const time = useMemo(() => {
    if (count < 0) return "00:00";

    let seconds = count % 60;
    let minutes = Math.floor(count / 60);
    minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
    seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
    return minutes + ":" + seconds;
  }, [count]);

  function handleStart() {
    const value = Math.abs(inputRef.current.value);
    setCount(value);
    setHalf(value / 2);
    setRunning(true);
  }

  return (
    <>
      <GlobalStyles />
      <Container>
        <div className="countdown-start-area">
          Countdown:{" "}
          <Input type="number" placeholder="(Min)" min={0} ref={inputRef} />{" "}
          <StartButton type="button" onClick={handleStart}>
            START
          </StartButton>
        </div>
        <p>
          {count === 0 && "Time’s up!"}
          {count <= half && count > 0 && "More than a halfway there!"}
        </p>
        <div className="timer-area">
          <Time blink={count < 10 && count > 0}>{time}</Time>
          {count > 0 && (
            <Resume
              src={running ? pause : resume}
              onClick={() => setRunning(!running)}
              alt=""
            />
          )}
        </div>
        <div>
          <Button
            type="button"
            active={velocity === 1}
            onClick={() => setVelocity(1)}
          >
            1X
          </Button>
          <Button
            type="button"
            active={velocity === 1.5}
            onClick={() => setVelocity(1.5)}
          >
            1.5X
          </Button>
          <Button
            type="button"
            active={velocity === 2}
            onClick={() => setVelocity(2)}
          >
            2X
          </Button>
        </div>
      </Container>
    </>
  );
}

export default App;

const Resume = styled.img`
  position: absolute;
  right: -50px;
  width: 40px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;
const Container = styled.div`
  text-align: center;
  .countdown-start-area {
    margin-bottom: 25px;
  }
  .timer-area {
    position: relative;
  }
`;

const blinker = keyframes`
  50% {
    opacity: 0;
  }
`;
const normal = keyframes`
  50% {
    opacity: 100%;
  }
`;

const Time = styled.span`
  font-size: 7rem;
  font-weight: 700;
  animation: ${props => (props.blink ? blinker : normal)} 0.5s linear infinite;
`;
const Input = styled.input`
  background: "#fff";
  color: #000;
  border: 1px solid #000;
  padding: 8px 5px;
  outline: none;
`;
const Button = styled.button`
  background: ${props => (props.active ? "#777" : "#fff")};
  color: ${props => (props.active ? "#fff" : "#000")};
  border: 1px solid #000;
  font-weight: 400;
  margin: 5px;
  outline: none;
  min-width: 60px;
  padding: 8px 5px;
  cursor: pointer;
  :hover {
    background: ${props => (props.active ? "#999" : "#dedede")};
  }
`;
const StartButton = styled.button`
  background: #6eb6a2;
  color: #fff;
  border: 1px solid #6eb6a2;
  font-weight: 400;
  margin: 5px;
  outline: none;
  padding: 8px 15px;
  cursor: pointer;
  :hover {
    background: ${darken(0.1, "#6eb6a2")};
  }
`;
