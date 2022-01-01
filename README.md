## WTF **JSPro** is!
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

*Table of contents*
- [Install](#install)
- [Usages](#usages)
- [Prototypes](#prototypes)
  - [String](#string)
  - [Number](#number)
  - [Array](#array)
- [Customization](#customization)
- [Contribution](#contribution)

<br>

___

# Install

Simply install from you terminal as dev-dependency
```bash
npm i -D jspro
```

# Usages

You can use JSPro as Node module as well as ES6/ESNext module. Whatever, only requiring or imporing is enough. YOU DON'T HAVE TO INITIALIZE JSPro. 

**Node** 
```js
require("jspro")
```
**ESNext**
```js
import "jspro"
```

# Prototypes

1. [ String ](#string)
2. [ Number ](#number) 
3. [ Array ](#array)
   
## String 

**`toCapitaCase`**

Returns first character capitalized

```js
const name = 'john'

name.toCapitalCase()

// John
```


**`reverse`**

Returns reversed string

```js
const name = 'John'

name.reverse()

// nhoJ
```



**`toCamelCase`**

Returns camel case string

```js
const name = 'John Doe'

name.toCamelCase()

// johnDoe
```



**`slugify`**

Slugifies string

```js
const name = 'Hello World'

name.slugify()

// hello-world
```

**`dec`**

Hexadecimal to decimal

```js
const hex = 'a'

hex.dec()

// 10 
```


**`bin`**

Hexadecimal to binary

```js
const hex = 'a'

hex.bin()

// 1010

/**
 * hex a = decimal 10 = binary 1010 
 */

```


## Number

**`reverse`**

Reverses number

```js
const number = 12345

number.reverse()

// 54321
```

**`repeat`**

Repeats number

```js
const number = 12

number.repeat(2)

// 1212
```

**`bin`**

Decimal to binary
```js
const number = 2

number.bin()

// 11
```

**`hex`**

Decimal to hexadecimal
```js
const number = 10

number.hex()

// a
```


**`is_even`**

Returns true when number is even
```js
const number = 2

number.is_even()

// true
```


**`is_prime`**

Returns true when number is prime
```js
const number = 7

number.is_prime()

// true
```


**`is_palindromic`**

Returns true when number is palindromic
```js
const number = 12321

number.is_palindromic()

// true
```


**`sll`**

Performs shift left logical, shifts `n`-th bite to left
```js
const number = 2
const biteToShift = 1

number.sll(biteToShift) // The number of bite ti be shifted, default is 1

// 4
```


**`srl`**

Performs shift right logical, shifts `n`-th bite to right
```js
const number = 6
const biteToShift = 1

number.srl(biteToShift) // The number of bite ti be shifted, default is 1

// 3
```

## Array

**`sort_by`**

Returns sorted array by object key name. 

If you have an array where elements are object, you can sort this now by using `sort_by` prototype with passing the key as string. 

```js
const list = [
  { name: 'John' },
  { name: 'Doe' }
]

list.sort_by("name")

/* 

[ 
  { name: 'Doe' }, 
  { name: 'John' } 
]

*/
```

# Customization

Yes, you can load only the prototypes you need.
 

```js
require("jspro/string") // string only

require("jspro/number") // number only  

require("jspro/array")  // array only
```
By default, all four types of prototypes will be loaded. 

# Contribution 

**Publisher**

- [x] [Jafran Hasan](https://www.facebook.com/IamJafran/)


**Contributors**
- [x] [Be first here](https://github.com/imjafran/jspro.git)

<br>

**Planning to contribute?**


Seems like you are not too lazy!


[Git Repository](https://github.com/imjafran/jspro)

Thanks for your interested. You can pull the repo from git. But you are requested to open a ticket before pushing for discussing on what you are planning to add. 