## <a name="intro"></a> WTF **JSPro** is!
**JSPro** is nothing but **J**ava**S**cript **Pro**totypes! The publisher is too lazy to write full name that's why it's just **JSPro**.
Whatever, it's a library of hundreds of awesome JavaScript Prototypes (you may know it as  *dot function*) for lazy programmers. Just install the package with a little effort and leave the blames for the publisher. 
<br>
<br>
>#### **Sigma rule 512**
>#### Life is not a pressure cooker, don't let the pressure get into it. 

___

### Not clear yet? 
Currently you are able to use some limited prototypes. For rest of the small programs, you need to re-invent the wheel. 

#### For example
To upper case string, you use 

```js
const name = "John"

console.log(name.toUpperCase())
// JOHN
```
or to lower case string
```js 
const name = "JOHN"

console.log(name.toLowerCase())
// john
```

But JavaScript doesn't have any built-in prototypes or functions to capitalize string. So to capitaize string you needed to write a user defined function like this 

```js
const capitalizeString = (str) => str[0].toUpperCase() + str.slice(1)

const name = "john"

console.log(capitalizeString(name));

// John
```

**But** using **JSPro** you will be able to code in JavaScript like a pro. 

To capitalize string

```js
const name = "john"

console.log(name.toCapitalCase())
// John 
```

Isn't amazing?

JSPro has hundreds of awesome prototypes like this. You don't need to reinvent the wheel again. 

<br>

### *Table of contents*
1. [ Intro ](#intro) 
2. [ Install ](#install)
3. [ Usage ](#usage)
4. [ Prototypes ](#prototypes)
   1. [ String ](#string)
   1. [ Number ](#number)
   1. [ Object ](#object)
   1. [ Array ](#array)
5. [ Customization ](#customization) 
5. [ Contribution ](#contribution) 

<br>

___

# <a name="install"></a> Install

Simply install from you terminal
```bash
npm i jspro
```

# <a name="usage"></a> Usage

You can use JSPro as Node module as well as ES6/ESNext module.

### Node 
```js
require("jspro")
```
### ESNext 
```js
import "jspro"
```

# <a name="prototypes"></a> Prototypes

1. [ String prototypes ](#string)
2. [ Number prototypes ](#number)
3. [ Object prototypes ](#object)
4. [ Array prototypes ](#array)
   
## <a name="string"></a> String 

#### Capital Case

```js
name.toCapitalCase()

// John
```
#### Reverse
```js
name.reverse()

// nhoJ
```
#### Camel Case
```js
const name = 'John Doe'

name.toCamelCase()

// johnDoe
```
#### Slugify
```js
const name = 'Hello World'

name.toCamelCase()

// hello-world
```


# <a name="customization"></a> Customization

Yes, you can load only the prototypes you need.
 

*Only string prototypes*
```js
require("jspro/string")
```
*Only number prototypes*
```js
require("jspro/number")
```
*Only array prototypes*
```js
require("jspro/array")
```
*Only object prototypes*
```js
require("jspro/object")
```
By default, all four types of prototypes will be loaded. 

# <a name="contribution"></a> Contribution 

Publisher [Jafran Hasan](https://www.facebook.com/IamJafran/)

#### Planning to contribute?

Seems like you are not too lazy!

Thanks for your interested. You can pull the repo from git. But you are requested to open a ticket before pushing for discussing on what you are planning to add. 