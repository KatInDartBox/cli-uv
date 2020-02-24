# cli-uv

## introduction

this cli aims to speed up your react development experience, now u dont have to create

- your react class/functional component -v1.0.0
- hundred of redux file -v1.0.1
- convert scss/css component to module style -v1.1.0
- convert scss/css style to camel style -v1.1.0

## future release

- reverse module style to scss/css
- create angular module

any suggestion visit: https://github.com/UVcoder/cli-uv

## available cli

| cli                             | option                                       | description                                   |
| ------------------------------- | -------------------------------------------- | --------------------------------------------- |
| uv rc <folderPath> [option]     | --css, --styleModule, --single, --reactClass | create react files                            |
| uv rd <folderPath>              | none                                         | create redux files                            |
| uv toModule <filePath> [option] | --notIncludeStyle                            | convert normal react css/scss to module style |
| uv toCamel <cssFilePath>        | none                                         | convert normal css/scss to camel style        |

## install

> `npm i -g cli-uv`

### Note\*

to be able to run this command

example:

> `uv rc users/admin`

you need to install it globally;

## React Cli

Run

> `uv rc <folderPath> [option]`

## option

| short | full            | default | description if true  |
| ----- | --------------- | ------- | -------------------- |
| none  | - - css         | false   | use css style        |
| -m    | - - styleModule | false   | use module style     |
| -s    | - - single      | false   | only react component |
| -c    | - - reactClass  | false   | use react class      |

### Note\*

the above command if provided, its value becomes true;

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
│   │   │   │ users-admin-component.jsx
│   │   │   │ users-admin-styles.scss

```

<br>

## users-admin-component.jsx

```javascript
import React from "react";
// import PropTypes from 'prop-types';
import "./users-admin-styles.scss";

const UsersAdmin = () => {
  return <div className="usersAdmin"></div>;
};
// UsersAdmin.propTypes = {
// }

export default UsersAdmin;
```

## users-admin-styles.scss

```javascript
.usersAdmin{

}
```

### example with option

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

## toModule & toCamel Cli

Run
to convert react component & style to module style

> `uv toModule <filePath> [option]`

## option

| short | full                | default | description if true                                |
| ----- | ------------------- | ------- | -------------------------------------------------- |
| -n    | - - notIncludeStyle | false   | update only component style, not touching scss/css |

Run
to convert only style to camel style

> `uv toCamel <cssFilePath>`

## note\*

by default it will try to convert both component & style file;<br>
it will try to find any first match scss/css file & make conversion;
add `-n` or `--notIncludeStyle` to convert only component;

<br>
Example

> `uv toModule users/admin-component.jsx`

## before conversion

### react component

```javascript
import React from "react";
import "../styles/admin-styles.scss";
import "  ./admin-styles2.css   ";
import "  ./admin-styles3.scss   ";
import "  ./admin-styles4.scss   ";

const Admin = () => {
  return (
    <div className="my-name.is.style">
      <div className="   my-name.is.style    "></div>
      <div className={`"my-name-is-style title name" ${time}`}></div>
      <div
        className={`my-name-is-style title name 
          ${time}




          `}
      ></div>

      <div
        className="
          my-name.is
          style
                aser
                sadf.-name
                faser-eraxx

                $/myname$true
                09time$load
                "
      ></div>

      <div className="my-name.is.style"></div>
      <div className="my-name.is.style"></div>
      <div className="my-name.is.style"></div>
      <div className="my-name.is.style"></div>
    </div>
  );
};

export default Admin;
```

### style

```javascript
.admin {
  background-attachment: fixed;
}
.fa$ser {
  color: red;
}
.a\er {
  position: relative;
}
.34fasb {
  background-origin: padding-box;
}
. faser234 {
  transform: rotate();
}
.-faser {
  color: red;
}
.$faer909 {
  background: red;
}
./\-fas/\er234- {
  border: 1px solid red;
}


```

## after conversion

### react component

any invalid css name will be omitted!

```javascript
import React from "react";
import style from "../styles/admin-styles.module.scss";
import "  ./admin-styles2.css   ";
import "  ./admin-styles3.scss   ";
import "  ./admin-styles4.scss   ";

const Admin = () => {
  return (
    <div className={` ${style.myNameIsStyle} `}>
      <div className={` ${style.myNameIsStyle} `}></div>
      <div className={`"my-name-is-style title name" ${time}`}></div>
      <div
        className={`my-name-is-style title name 
          ${time}




          `}
      ></div>

      <div
        className={` ${style.myNameIs} ${style.style} ${style.aser} ${style.sadfName} ${style.faserEraxx} ${style.mynameTrue} ${style.timeLoad} `}
      ></div>

      <div className={` ${style.myNameIsStyle} `}></div>
      <div className={` ${style.myNameIsStyle} `}></div>
      <div className={` ${style.myNameIsStyle} `}></div>
      <div className={` ${style.myNameIsStyle} `}></div>
    </div>
  );
};

export default Admin;
```

### style

any invalid css name will be omitted!

```javascript
.admin {
  background-attachment: fixed;
}
.faSer {
  color: red;
}
.aEr {
  position: relative;
}
.fasb {
  background-origin: padding-box;
}
.faser234 {
  transform: rotate();
}
.faser {
  color: red;
}
.faer909 {
  background: red;
}
.fasEr234 {
  border: 1px solid red;
}


```

## but-fix

### v1.0.1

fix component & style namespace
