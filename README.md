## Address book app

### Setup
#### Install dependencies
```sh
yarn install
```

#### To start the app locally:

```sh
yarn start
```

**App will run at localhost:3000**

#### To create a production build:

```sh
yarn run build
```

### State management

For state management, I went with Redux.
Usually, in the app of this kind, I would just use a regular React state with Context to pass data around, but Redux was part of the preferable stack from the description (React, Redux/Mobx, Webpack) so I picked Redux.
I used `@reduxjs/toolkit` to reduce the amount of boilerplate and additional dependencies. I never had a chance to use it before, but it seems like a very good solution to this problem so I'll definitely use redux toolkit in the future while working with Redux.

In short, redux-toolkit automates the process of creating reducers and actions by introducing the concept of slices. Slices are stored in `src/store/slices` directory.

### Structure

Components are grouped into two categories: pages and ui.
Pages components are top-level containers that hold all of the logic. You could treat them as controllers.
UI components are dumb, their role is just displaying the UI.

### Infinite scroll

I implemented an infinite scroll with `react-infinite-scroller` library. For this simple use case, it does the job well. In the commercial project, I would consider writing infinite scroll manually. It seems that `react-infinite-scroller` is no longer maintained (looking at the open issues).

### Local filter

It seems that randomuserme API doesn't support search argument :/
I decided to filter our users locally (unfortunately I can filter out only users that are already fetched).
In the production app, you always would like to pass the filter argument to the API.

### Details modal

Initially, I planned to put user details modal on a separate URL with a path like this: `/user/:id` but it turns out that API is not able to return user by the id (it randomly generates the user every time I guess).
I implemented user modal as a simple ui component inside of the users grid.
I a bigger application where we have more different kind of modals we would like to create a reusable component for the modal that would use `createPortal` .