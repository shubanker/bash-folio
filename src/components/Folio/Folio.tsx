import { useCallback } from "react";
import { useState } from "react";
import { commands } from "../../configs/commands.config";
import { useMount } from "../../hooks/useMount";
import { bashUserName } from "../../configs/user.config";
import { BashCmd } from "../CommandComponent/bashCmd/bashCmd";
import { CommandComponent } from "../CommandComponent/CommandComponent";
import classes from "./Folio.module.scss";
import { ReactComponent as MacIcons } from "./mac-icons.svg";

export const Folio = () => {
  //commands rendered.
  const [processedCommands, setProcessedCommands] = useState([] as Command[]);
  //To show empty shell input at end.
  const [renderingCommand, setRenderingCommand] = useState(false);
  const [scrollIntervalRef, setScrollIntervalRef] = useState(null as any);

  const scrollToBottom = useCallback(() => {
    window.scrollTo({
      behavior: "smooth",
      top: document.body.scrollHeight,
    });
  }, []);

  //Command finished rendering, wait a while and continue with next.
  const prepareNext = useCallback(() => {
    setRenderingCommand(false);
    setTimeout(() => {
      if (processedCommands.length < commands.length) {
        const withNextCommand = [
          ...processedCommands,
          commands[processedCommands.length],
        ];
        setProcessedCommands(withNextCommand);
        setRenderingCommand(true);
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
  useMount(() => {
    //Start rendering with 1st command.
    //need to run here only once to intitate loop, dont add this in dependency as this need to run only once.
    prepareNext();
    //auto-Scroll to bottom until all commands are rendered
    setScrollIntervalRef(
      setInterval(() => {
        scrollToBottom();
      }, 2000)
    );
  });

  const commandJsx = processedCommands.map((command, index) => (
    <CommandComponent
      key={index}
      command={command}
      next={index === processedCommands.length - 1 ? prepareNext : dummyFn}
    />
  ));
  return (
    <div className={`shell-container ${classes.container}`}>
      <MacIcons />
      {commandJsx}
      {renderingCommand ? null : (
        <BashCmd userName={bashUserName} cmd="" retainCursor={true} />
      )}
    </div>
  );
};
