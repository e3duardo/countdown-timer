import React, { useState, useRef, useMemo } from "react";

import Button from "../../components/Button";
import InputNumber from "../../components/InputNumber";
import PlayButton from "../../components/PlayButton";
import Time from "../../components/Time";
import ClockSound from "../../assets/clock.mp3";
import { Container } from "./styles";

export default function Countdown() {
  const velocities = [1, 1.5, 2];
  const tick = useRef();
  const interval = useRef();
  const inputRef = useRef();
  const [count, setCount] = useState(-1);
  const [velocity, setVelocity] = useState(velocities[0]);
  const [running, setRunning] = useState(false);

  tick.current = () => {
    if (!running) return;
    const value = count - 1;
    setCount(value);

    if (value < 1) {
      setRunning(false);
      clearInterval(interval.current);
      new Audio(ClockSound).play();
    }
  };

  const time = useMemo(() => {
    if (count < 0) return "00:00";
    const seconds = String(count % 60).padStart(2, "0");
    const minutes = String(Math.floor(count / 60)).padStart(2, "0");
    return `${minutes}:${seconds}`;
  }, [count]);

  const half = useMemo(
    () => inputRef.current && count > 0 && count <= inputRef.current.value / 2,
    [count]
  );

  function handleStart() {
    const value = Math.round(inputRef.current.value);
    if (value < 1 || value > 3660) return;

    setCount(value * 60);
    setRunning(true);

    clearInterval(interval.current);
    interval.current = setInterval(() => tick.current(), 1000 / velocity);
  }

  function hangleChangeVelocity(vel) {
    setVelocity(vel);
    clearInterval(interval.current);
    interval.current = setInterval(() => tick.current(), 1000 / vel);
  }

  return (
    <Container>
      <header className="countdown-start-area">
        Countdown: <InputNumber placeholder="(Min)" innerRef={inputRef} />{" "}
        <Button onClick={handleStart} label="START" color="primary" />
      </header>
      <section>
        {count === 0 && "Time’s up!"}
        {half && "More than a halfway there!"}
      </section>
      <main>
        <Time time={time} playing={running}>
          {time}
        </Time>
        <PlayButton
          show={count > 0}
          playing={running}
          onClick={() => setRunning(!running)}
        />
      </main>
      <footer>
        {velocities.map(vel => (
          <Button
            key={vel}
            label={`${vel}X`}
            active={velocity === vel}
            onClick={() => hangleChangeVelocity(vel)}
          />
        ))}
      </footer>
    </Container>
  );
}
