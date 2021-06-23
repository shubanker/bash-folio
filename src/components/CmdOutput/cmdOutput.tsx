import { useState } from "react";
import Typewriter from "typewriter-effect";
import "./cmdOutput.scss";
export const CmdOutput: React.FC<{
  command: Command;
  done: () => void;
}> = ({ command, done }) => {
  const [typingDone, setTypingDone] = useState(false);
  const { component: Component, typeWritterText, typeWritterOptions } = command;
  const lines: string[] = typeWritterText?.trim().split("\n") ?? [];
  let op: JSX.Element | JSX.Element[];
  if (Component) {
    op = <Component done={done} />;
  } else {
    op = typingDone ? (
      lines?.map((txt) => <span className="command-line">{txt}</span>)
    ) : (
      <Typewriter
        options={typeWritterOptions ?? {}}
        onInit={(typewriter) => {
          typewriter.changeDelay(65);
          lines.forEach((line) =>
            typewriter.typeString(line + "<br>").pauseFor(600)
          );
          typewriter
            .callFunction(() => {
              done();
              setTypingDone(true);
            })
            .start();
        }}
      />
    );
  }
  return <>{op}</>;
};
