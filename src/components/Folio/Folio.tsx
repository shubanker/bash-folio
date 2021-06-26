import { useCallback } from "react";
import { useEffect, useState } from "react";
import { bashUserName, commands } from "../../commands.config";
import { BashCmd } from "../CommandComponent/bashCmd/bashCmd";
import { CommandComponent } from "../CommandComponent/CommandComponent";
import classes from "./Folio.module.scss";

export const Folio = () => {
  //commands rendered.
  const [processedCommands, setProcessedCommands] = useState([] as Command[]);
  //To show empty shell input at end.
  const [inProgress, setInProgress] = useState(false);
  const [scrollIntervalRef, setScrollIntervalRef] = useState(null as any);

  const scrollToBottom = useCallback(() => {
    window.scrollTo({
      behavior: "smooth",
      top: document.body.scrollHeight,
    });
  }, []);

  //Command finished rendering, wait a while and continue with next.
  const prepareNext = useCallback(() => {
    setInProgress(false);
    setTimeout(() => {
      if (processedCommands.length < commands.length) {
        const withNextCommand = [
          ...processedCommands,
          commands[processedCommands.length],
        ];
        setProcessedCommands(withNextCommand);
        setInProgress(true);
      } else {
        scrollToBottom();
        clearInterval(scrollIntervalRef);
      }
    }, 400);
  }, [processedCommands, scrollToBottom, scrollIntervalRef]);

  //need to pass prepareNext only to command currently being rendered,
  // for pre-rendered ones pass a dummy next.
  const dummyFn = useCallback(() => {}, []);

  //start the loop.
  useEffect(() => {
    prepareNext();
    //auto-Scroll to bottom until all commands are rendered
    setScrollIntervalRef(
      setInterval(() => {
        scrollToBottom();
      }, 2000)
    );
  }, [scrollToBottom]);

  const commandJsx = processedCommands.map((command, index) => (
    <CommandComponent
      key={index}
      command={command}
      next={index === processedCommands.length - 1 ? prepareNext : dummyFn}
    />
  ));
  return (
    <div className={`container ${classes.container}`}>
      {commandJsx}
      {inProgress ? null : (
        <BashCmd userName={bashUserName} cmd="" retainCursor={true} />
      )}
    </div>
  );
};
