import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import classes from "./bashCmd.module.css";

export const BashCmd: React.FC<{
  userName: string;
  cmd?: string;
  done?: () => void;
  retainCursor?: boolean;
}> = ({ userName, done, cmd = "", retainCursor = false }) => {
  const [typeingDone, setTypeingDone] = useState(false);
  return (
    <>
      <div className={classes.bash}>
        <span className={classes.username}>{userName} </span>{" "}
        <span className={classes.processor}>~/welcome</span>
      </div>
      <div
        className={`${classes.cmd} ${typeingDone ? classes.typeingDone : ""}`}
      >
        $
        <Typewriter
          options={{
            cursorClassName: `Typewriter__cursor ${classes.cursor}`,
          }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(500)
              .typeString(cmd || "")
              .callFunction(() => {
                setTypeingDone(!retainCursor);
                done?.();
              })
              .start();
          }}
        />
      </div>
    </>
  );
};
