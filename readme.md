# cli-uv

facebook gave us react, literately only react; they dont care what technology, what framework, we do with react;
seems like, they gave us a really good meal without a spoon; this cli aims to be a spoon however not completely, but somehow
to speed up your coding experience;

this cli comes with react cli, redux cli, and mores to come;
use react cli when u want to add new react component/style without manually creating it;
redux cli comes with 5 boilerplate files, which help speed up your app development a lot,
unless you do it manually;

## available cli

| cli                         | option                                       | description                                   | version |
| --------------------------- | -------------------------------------------- | --------------------------------------------- | ------- |
| uv rc <folderPath> [option] | --css, --styleModule, --single, --reactClass | create react files                            | v1      |
| uv rd <folderPath>          | none                                         | create redux files                            | v1      |
| uv toModule <filePath>      | none                                         | convert normal react css/scss to module style | v2      |

any more cli suggestion visit: https://github.com/UVcoder/cli-uv
note it doest have to be related to react; i plan to add angular cli also;

## install

> `npm i -g cli-uv`

### Note\*

to be able to run this command

> `uv rc users/admin`

you need to install it globally;

## React Cli

Run

> `uv rc <folderPath>`

<br>
Example

> `uv rc pages/users-admin`

this will create the following files,

```
project
└─ node_modules
└─ public
└─ src
│   └─ pages
│   │   └─ users-admin
│   │   │   │ users-admin.jsx
│   │   │   │ users-admin.styles.scss

```

<br>

## users-admin.jsx

```javascript
import React from "react";
// import PropTypes from 'prop-types';
import "./users-admin.styles.scss";

const UsersAdmin = () => {
  return <div className="usersAdmin"></div>;
};
// UsersAdmin.propTypes = {
// }

export default UsersAdmin;
```

## users-styles.scss

```javascript
.usersAdmin{

}
```

## option

| short | full            | default | description if true  |
| ----- | --------------- | ------- | -------------------- |
| none  | - - css         | false   | use css style        |
| -m    | - - styleModule | false   | use module style     |
| -s    | - - single      | false   | only react component |
| -c    | - - reactClass  | false   | use react class      |

### Note\*

the above command if provided, its value becomes true;

### example

> `uv rc components/card-gold -m`

this will generate

```
project
└─ node_modules
└─ public
└─ src
│   └─ components
│   │   └─ card-gold
│   │   │   │ card-gold-component.jsx
│   │   │   │ card-gold-styles.module.scss

```

<br>

> `uv rc components/card-gold -m --css`

this will generate

```
project
└─ node_modules
└─ public
└─ src
│   └─ components
│   │   └─ card-gold
│   │   │   │ card-gold-component.jsx
│   │   │   │ card-gold-styles.module.css

```

## Redux Cli

Run

> `uv rd <folderPath>`

<br>
Example

> `uv rd redux/users-admin`

this will create the following files,

```
project
└─ node_modules
└─ public
└─ src
│   └─ redux
│   │   └─ users-admin
│   │   │   │ users-admin.action.js
│   │   │   │ users-admin.reducer.js
│   │   │   │ users-admin.selector.js
│   │   │   │ users-admin.type.js
│   │   │   │ users-admin.util.js

```

<br>

## action.js

```javascript
import { UsersAdminType } from "./users-admin.type";

/**
 * @type {(initState:boolean)=>{type:string,payload:any}}
 */
export const UsersAdminToggle = item => {
  return {
    type: UsersAdminType.toggle,
    payload: item
  };
};
```

## reducer.js

```javascript
import { UsersAdminType } from "./users-admin.type";

const InitState = {
  // items: [],
  // itemsCount: 0
};

/**
 * @typedef {{
 * items:any[],
 * itemsCount:number
 * }} State
 */

/**
 * @typedef {{type:string,payload:any}} Action
 */

/**
 * @type {(state:State,action:Action)=>VoidFunction}
 */
const UsersAdminReducer = (state = InitState, action) => {
  switch (action.type) {
    case UsersAdminType.toggle:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default UsersAdminReducer;
```

## selector.js

```javascript
import { createSelector } from "reselect";

const baseState = state => state.usersAdmin;

export const UsersAdminGetState = createSelector([baseState], state => {
  return state;
});
```

## type.js

```javascript
export const UsersAdminType = {
  toggle: "toggle"
};
```

## util.js

```javascript
// export const addItem = (existingItems, itemToBeAdded) => {
//   return [...existingItems, itemToBeAdded];
// };
```

## but-fix

### v1.0.1

fix component & style namespace
