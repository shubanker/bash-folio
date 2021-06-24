import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import classes from "./bashCmd.module.scss";

export const BashCmd: React.FC<{
  userName: string;
  cmd?: string;
  next?: () => void;
  retainCursor?: boolean;
}> = ({ userName, next, cmd = "", retainCursor = false }) => {
  const [typeingDone, setTypeingDone] = useState(false);
  return (
    <>
      <div className={classes.bash}>
        <span className={classes.username}>{userName} </span>{" "}
        <span className={classes.processor}>~/Welcome</span>
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
                next?.();
              })
              .start();
          }}
        />
      </div>
    </>
  );
};
