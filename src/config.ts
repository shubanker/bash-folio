import { LsList } from "./customComponents/ls-list";
import { SocialList } from "./customComponents/social-card/social-card";

export const bashUserName = "shubanker@C";

export const commands: Command[] = [
  { command: "ls", component: LsList },
  {
    command: "cat about.txt",
    typeWritterText: `
    Hello there,
  This is a project to showcase folio into a shell like Ui.
  I am bad at writing summary lol, you get the idea.
  `,
  },
  {
    command: "cat help.txt",
    typeWritterText: `
    You can configure list of commands and output in config.ts
  Also supports rendering a custom component instead of just typing a plain text, so you got a ton of possibilities. 
  You need to call a function received in props as "next" inside your custom component to tell console to continue with next commands.
  Enjoy!!
  `,
  },
  { command: "skp-md-viewer card.md", component: SocialList },
];
