## Design decisons and principles

## Table of contents
- [Design decisons and principles](#design-decisons-and-principles)
- [Table of contents](#table-of-contents)
- [Platforms](#platforms)
- [Tooling](#tooling)
- [Libraries](#libraries)
- [Coding Style](#coding-style)
- [Devops](#devops)

## Platforms
- Hosting on Windows (client requirment)
- App used on Windows desktops and iPads (client requirment)
- NodeJS for server side code, running on Windows
- SQL server for data storage

## Tooling
- VS Code (cross platform, good NodeJS support, well supported, lots of extensions), Extensions:
    - Chrome debugger
    - TSLint

## Libraries
- Language: Typescript (Removes common Javascript problems, type safety catches bugs, intellisense for discovery, advanced code features not available in Javascript)
- UI Framework: ReactJS (Good industry suppport, fast performance)
- Client side data storage: ReduxJS (Single store state management with simple Flux style data flow)
- TSLint for additional code rules
- Data sync/Comms/Offline handing?
- Error reporting?

## Coding Style
- Functional preferred, rules enforced by TSLint
- Test driven

## Devops
- Source control on Gihub
- CI Jenkins/CircleCI/Travis?
- Slack for communication
