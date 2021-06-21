import { useState } from "react";
import Typewriter from "typewriter-effect";
import "./cmdOutput.scss";
export const CmdOutput: React.FC<{
  command: Command;
  done: () => void;
}> = ({ command, done }) => {
  const [typingDone, setTypingDone] = useState(false);
  const { component: Component, typeWritterText, typeWritterOptions } = command;
  let op: JSX.Element;
  if (Component) {
    op = <Component done={done} />;
  } else {
    op = typingDone ? (
      <span>{typeWritterText}</span>
    ) : (
      <Typewriter
        options={typeWritterOptions ?? {}}
        onInit={(typewriter) => {
          typewriter
            .pauseFor(500)
            .changeDelay(80)
            .typeString(typeWritterText ?? "")
            .callFunction(() => {
              done();
              setTypingDone(true);
            })
            .start();
        }}
      />
    );
  }
  return op;
};
