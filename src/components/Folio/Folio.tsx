import React from "react";
import { useEffect, useState } from "react";
import { bashUserName, commands } from "../../commands.config";
import { BashCmd } from "../bashCmd/bashCmd";
import { CmdOutput } from "../CmdOutput/cmdOutput";
import classes from "./Folio.module.scss";

export const Folio = () => {
  //number of rendered commands
  const [commandCount, setCommandCount] = useState(0);
  //Track of index for whom command typing is done, now show result.
  const [typedIndex, setTypedIndex] = useState(new Set<number>());
  //To show empty shell input at end.
  const [inProgress, setInProgress] = useState(false);

  const [scrollInterval, setScrollInterval] = useState(null as any);

  //start the loop.
  useEffect(() => {
    setTimeout(() => {
      setCommandCount(1);
      setInProgress(true);

      //auto-Scroll to bottom until all commands are rendered
      setScrollInterval(
        setInterval(() => {
          window.scrollTo({
            behavior: "smooth",
            top: document.body.scrollHeight,
          });
        }, 2000)
      );
    }, 400);
  }, []);

  //Command finished rendering, wait a while and continue with next.
  const prepareNext = () => {
    setInProgress(false);
    setTimeout(() => {
      if (commandCount < commands.length) {
        setCommandCount(commandCount + 1);
        setInProgress(true);
      } else {
        clearInterval(scrollInterval);
      }
    }, 400);
  };

  const afterCmdTyped = (index: number) => {
    const newSet = new Set(typedIndex);
    newSet.add(index);
    setTypedIndex(newSet);
  };
  const commandJsx = commands.slice(0, commandCount).map((command, index) => (
    <React.Fragment key={index}>
      <BashCmd
        userName={bashUserName}
        cmd={command.command}
        next={() => afterCmdTyped(index)}
      />
      {typedIndex.has(index) ? (
        <CmdOutput command={command} next={prepareNext} />
      ) : null}
    </React.Fragment>
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
