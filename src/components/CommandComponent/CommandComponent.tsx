import { useCallback, useState } from "react";
import { bashUserName } from "../../configs/user.config";
import { BashCmd } from "./bashCmd/bashCmd";
import { CmdOutput } from "./CmdOutput/cmdOutput";

export const CommandComponent: React.FC<{
  command: Command;
  next: () => void;
}> = ({ command, next }) => {
  const [cmdRendered, setCmdRendered] = useState(false);
  const setNext = useCallback(() => {
    next();
  }, [next]);
  return (
    <>
      <BashCmd
        userName={bashUserName}
        cmd={command.command}
        next={() => setCmdRendered(true)}
      />
      {cmdRendered ? <CmdOutput command={command} next={setNext} /> : null}
    </>
  );
};
