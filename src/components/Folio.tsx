import React from "react";
import { useEffect, useState } from "react";
import { bashUserName, commands } from "../config";
import { BashCmd } from "./bashCmd/bashCmd";
import { CmdOutput } from "./CmdOutput/cmdOutput";

export const Folio = () => {
  const [commandIndex, setCommandIndex] = useState(0);
  const [inProgress, setInProgress] = useState(false);
  const [cmdTyping, setCmdTyping] = useState(true);

  //iterating next command after delay.
  useEffect(() => {
    setTimeout(() => {
      setCommandIndex(1);
      setInProgress(true);
    }, 400);
  }, []);

  const prepareNext = () => {
    setInProgress(false);
    setTimeout(() => {
      if (commandIndex < commands.length) {
        setCommandIndex(commandIndex + 1);
        setCmdTyping(true);
        setInProgress(true);
      }
    }, 400);
  };
  const enableOutputRendering = () => {
    setCmdTyping(false);
  };
  const commandJsx = commands.slice(0, commandIndex).map((command, index) => (
    <React.Fragment key={index}>
      <BashCmd
        userName={bashUserName}
        cmd={command.command}
        done={enableOutputRendering}
      />
      {index === commandIndex - 1 && cmdTyping ? null : (
        <CmdOutput command={command} done={prepareNext} />
      )}
    </React.Fragment>
  ));
  return (
    <div className="container">
      {commandJsx}
      {inProgress ? null : (
        <BashCmd userName={bashUserName} cmd="" retainCursor={true} />
      )}
    </div>
  );
};
