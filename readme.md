# cli-uv

this cli comes with

### v1

react cli <br>
redux cli <br>
as the version grows, i hope to add more cli

any suggestion visit:

https://github.com/UVcoder/cli-uv

## install

> `npm i -g cli-uv`

### Note\*

to be able to run this command

> `uv rc users/admin`

you need to install it globally;

## React Cli

Run

> `uv rc <path>`

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

## command

| cmd short | cmd full        | default | description          |
| --------- | --------------- | ------- | -------------------- |
| none      | - - css         | false   | use scss style       |
| -m        | - - styleModule | false   | style without module |
| -s        | - - single      | false   | without style file   |
| -c        | - - reactClass  | false   | user react function  |

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
│   │   │   │ card-gold.jsx
│   │   │   │ card-gold.styles.module.scss

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
│   │   │   │ card-gold.jsx
│   │   │   │ card-gold.styles.css

```

## Redux Cli

Run

> `uv rd <path>`

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
