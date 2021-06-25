# Bash Folio

A Shell like Ux to showcase folio with typewritter effect.

## Configuration

You can easily configure your username & your list of commands/outputs in [commands.config.ts](src/commands.config.ts)

configure the command and output:

```Typescript
[
    { command: "whoami", typeWritterText: `Hello world` }
]
```

You can also render a custom component as output :

```Typescript
[
    { command: "skp-md-viewer card.md", component: SocialCard }
]

```

> For custom components you need to call "next()" passed in props inside your custom component to tell console to continue with next commands, example:

https://github.com/shubanker/bash-folio/blob/bafb1739f8a3e8e11fff58353dba6a95134bb33a/src/customComponents/ls-list.tsx#L3-L8

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
