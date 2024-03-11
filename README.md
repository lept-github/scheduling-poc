
# FullCalendar React Example Project

For complete instructions on how to initialize your build system, see the [FullCalendar React Docs &raquo;](https://fullcalendar.io/docs/react)

**About this example:** the state for events is owned by the FullCalendar instance and then emitted via `eventsSet` to be used elsewhere in the app. This is easier than owning the state in a parent component because FullCalendar can take care of requesting, parsing, and mutating event data instead of your reducer. However, this technique will only work when a FullCalendar component is rendered. If you need access to your event data when a FullCalendar component is NOT rendered, please take a look at the [React+Redux example &raquo;](../react-redux)


## Installation

```bash
yarn install
```


## Build Commands

```bash
yarn start # builds and opens a web browser

# other commands:
yarn build # builds files into dist/ directory
yarn watch # same as build, but watches for changes
yarn clean # start fresh
```
