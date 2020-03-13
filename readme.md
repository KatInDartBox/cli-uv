# cli-uv

## introduction

keys features

- create react class/functional component
- create boilerplate redux file
- convert scss/css component to module style
- reverse module styled component to normal style

## note\*

your source folder path must be "src"

any suggestion visit: https://github.com/UVcoder/cli-uv

## available cli

| cli                                 | option                                       | description                                   |
| ----------------------------------- | -------------------------------------------- | --------------------------------------------- |
| `uv rc <folderPath> [option]`       | --css, --styleModule, --single, --reactClass | create react files                            |
| `uv rd <folderPath>`                | none                                         | create redux files                            |
| `uv toModule <filePath> [option]`   | --notIncludeStyle                            | convert normal react css/scss to module style |
| `uv toCamel <cssFilePath> [option]` | --absolute                                   | convert normal css/scss to camel style        |

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

## toModule cli

convert react component & style to module style, or reverse back to normal style

> `uv toModule <filePath> [option]`

## option

| short | full                | default | description if true                                |
| ----- | ------------------- | ------- | -------------------------------------------------- |
| -n    | - - notIncludeStyle | false   | update only component style, not touching scss/css |
| -a    | - - absolute        | false   | ref to absolute path                               |
| -r    | - - reverse         | false   | reverse module styled component to normal style    |

example:

> `uv toModule "d:/code projects/cli/cli-uv/src/components/product/guest-product-component.jsx" -a`

### relative path to src

> `uv toModule components/product/guest-product-component.jsx`

i like absolute path as i can drag & drop file; (don't have to write that long path);
absolute path should be true by default, yet i first introduce relative path in earlier version,
so ...

## before conversion

### react component

```javascript
import React from "react";
import "./module-styles.module.scss";

const GuestProduct = () => {
  return (
    <div
      className={
        `
      flex ${last + time}
      flex-column 
      flex-center ${title}${other}
      guest-product
      title
      txt-info ${item - fast}
      flex-start
      12invalid ${time} 
      ${other}
      21-other
      32-what-else
      ` +
        variable +
        `flex title` +
        "i am title" +
        "also title"
      }
    >
      <div className=" title ">Pay Nothing & Have it ALL</div>
      <div className=" txt-info ">suitable from small to Large business </div>

      <div className=" product ">
        {ProductInfo.map(pro => (
          <Card key={pro.id} title={pro.title} icon={pro.icon} content={pro.content} />
        ))}
      </div>
      <div className=" txt-info txt-info-sm ">Integrated with Role Base System Management</div>
    </div>
  );
};

const Card = ({ title, icon, content }) => {
  return (
    <Box className=" card " bgcolor="background.paper" boxShadow={3}>
      <div className=" icon ">{icon}</div>
      <div className=" title-card ">{title.toUpperCase()}</div>
      <div className=" product-content ">{content}</div>
    </Box>
  );
};

export default GuestProduct;
```

### style

```javascript
.guestProduct {
  width: 80%;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 16px;
  width: 215px;
  height: 270px;
  padding: 14px;
  text-align: center;
}
.title {
  color: $col-yellow;
  font-size: 36px;
  text-align: center;
}
.icon {
  font-size: 4.2rem;
}
.titleCard {
  text-transform: uppercase;
  color: $col-yellow;
  font-size: 24px;
  text-align: center;
  margin-bottom: 6px;
}
.txtInfo {
  // font-size: 11px;
  text-align: center;
}
.product {
  display: flex;
  width: 720px;
  justify-content: space-around;
  margin: 17px 0;
}
@media (max-width: 600px) {
  .product {
    flex-direction: column;
    align-items: center;
  }
  .guestProduct {
    justify-content: flex-start;
  }
  .card {
    margin: 12px 0;
  }
  .txtInfoSm {
    margin-bottom: 24px;
  }
}
@media (max-width: 1070px) {
  .txtInfoSm {
    margin-bottom: 24px;
  }
}
.other {
  color: red;
}

```

## after conversion

### react component

any class name which is not found in scss/css file will not be converted to \${style.name};
in this way, you can have component scoped and also be able to use global style;

> `flex flex-column flex-center flex-start 12invalid 21-other 32-what-else i am also product-content`
> remain the same, as it is not listed in css file;

```javascript
import React from "react";
import style from "./module-styles.module.scss";

const GuestProduct = () => {
  return (
    <div
      className={
        `${last + time} ${title} ${other} ${item - fast} ${time} ${other} ${style.guestProduct} ${style.title} ${
          style.txtInfo
        }  flex  flex-column  flex-center   flex-start 12invalid   21-other 32-what-else` +
        variable +
        ` ${style.title} flex` +
        `${style.title} i am` +
        `${style.title} also`
      }
    >
      <div className={`${style.title} `}>Pay Nothing & Have it ALL</div>
      <div className={`${style.txtInfo} `}>suitable from small to Large business </div>

      <div className={`${style.product} `}>
        {ProductInfo.map(pro => (
          <Card key={pro.id} title={pro.title} icon={pro.icon} content={pro.content} />
        ))}
      </div>
      <div className={`${style.txtInfo} ${style.txtInfoSm} `}>Integrated with Role Base System Management</div>
    </div>
  );
};

const Card = ({ title, icon, content }) => {
  return (
    <Box className={`${style.card} `} bgcolor="background.paper" boxShadow={3}>
      <div className={`${style.icon} `}>{icon}</div>
      <div className={`${style.titleCard} `}>{title.toUpperCase()}</div>
      <div className={` product-content`}>{content}</div>
    </Box>
  );
};

export default GuestProduct;
```

### style

pls noted that as we convert your class name to camel case,
any class name with preceding or tailing "-" will be omitted;
`-my-new-style` will become `myNewStyle'

```javascript
.guestProduct {
  width: 80%;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 16px;
  width: 215px;
  height: 270px;
  padding: 14px;
  text-align: center;
}
.title {
  color: $col-yellow;
  font-size: 36px;
  text-align: center;
}
.icon {
  font-size: 4.2rem;
}
.titleCard {
  text-transform: uppercase;
  color: $col-yellow;
  font-size: 24px;
  text-align: center;
  margin-bottom: 6px;
}
.txtInfo {
  // font-size: 11px;
  text-align: center;
}
.product {
  display: flex;
  width: 720px;
  justify-content: space-around;
  margin: 17px 0;
}
@media (max-width: 600px) {
  .product {
    flex-direction: column;
    align-items: center;
  }
  .guestProduct {
    justify-content: flex-start;
  }
  .card {
    margin: 12px 0;
  }
  .txtInfoSm {
    margin-bottom: 24px;
  }
}
@media (max-width: 1070px) {
  .txtInfoSm {
    margin-bottom: 24px;
  }
}
.other {
  color: red;
}

```

## reverse your module style back to normal style

example:

> `uv toModule "d:/code projects/cli/cli-uv/src/components/product/guest-product-component.jsx" -a -r`

### react component

```javascript
import React from "react";
import "./module-styles.module.scss";

const GuestProduct = () => {
  return (
    <div
      className={
        `${last + time} ${title} ${other} ${item -
          fast} ${time} ${other} guestProduct title txtInfo  flex  flex-column  flex-center   flex-start 12invalid   21-other 32-what-else` +
        variable +
        ` title flex` +
        `title i am` +
        `title also`
      }
    >
      <div className={`title `}>Pay Nothing & Have it ALL</div>
      <div className={`txtInfo `}>suitable from small to Large business </div>

      <div className={`product `}>
        {ProductInfo.map(pro => (
          <Card key={pro.id} title={pro.title} icon={pro.icon} content={pro.content} />
        ))}
      </div>
      <div className={`txtInfo txtInfoSm `}>Integrated with Role Base System Management</div>
    </div>
  );
};

const Card = ({ title, icon, content }) => {
  return (
    <Box className={`card `} bgcolor="background.paper" boxShadow={3}>
      <div className={`icon `}>{icon}</div>
      <div className={`titleCard `}>{title.toUpperCase()}</div>
      <div className={` product-content`}>{content}</div>
    </Box>
  );
};

export default GuestProduct;
```

### style file

remain camel case
