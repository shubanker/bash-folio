import { useState } from "react";
import Typewriter from "typewriter-effect";
import "./cmdOutput.scss";
export const CmdOutput: React.FC<{
  command: Command;
  next: () => void;
}> = ({ command, next }) => {
  const [typingDone, setTypingDone] = useState(false);
  const { component: Component, typeWritterText, typeWritterOptions } = command;
  let op: JSX.Element | JSX.Element[];
  if (Component) {
    op = <Component next={next} />;
  } else {
    const lines: string[] = typeWritterText?.trim().split("\n") ?? [];
    op = typingDone ? (
      lines?.map((txt) => (
        <span className="command-line" key={txt}>
          {txt}
        </span>
      ))
    ) : (
      <Typewriter
        options={typeWritterOptions ?? {}}
        onInit={(typewriter) => {
          typewriter.changeDelay(40);
          lines.forEach((line) =>
            typewriter.typeString(line + "<br>").pauseFor(600)
          );
          typewriter
            .callFunction(() => {
              next();
              setTypingDone(true);
            })
            .start();
        }}
      />
    );
  }
  return <>{op}</>;
};
