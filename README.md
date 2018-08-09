# text-to-color-js
This is a simple javascript generating color code from string.

# How to use
1. Place the main javascript at any directory, and load it in a html file.

```html
<script type="text/javascript" src="/any_path_to/txt2color.js"></script>
```

2. Create ttc object.


```javascript
const ttc = new TextToColor(9999);
```

If you want to change generating color code pattern, pass any number to constructor's argument.

3. Call generateColorHexFromString function.

```javascript
let string = 'some string';
let t2c = ttc.generateColorHexFromString(string);

console.log(t2c);

// T2C {string: "some string", color: "#d71e05", html: "<span style="color: #d71e05">some string</span>"}
```

# Other method
### generateColorHexFromStringList
This method returns list of T2C objects from string list.

```javascript
let stringList = [
    'string 1', 'string 2', 'string 3'
];

let t2cList = ttc.generateColorHexFromStringList(stringList);

console.log(t2cList);

// (3) [T2C, T2C, T2C]
//     0: T2C {string: "string 1", color: "#375af5", html: "<span style="color: #375af5">string 1</span>"}
//     1: T2C {string: "string 2", color: "#af19b9", html: "<span style="color: #af19b9">string 2</span>"}
//     2: T2C {string: "string 3", color: "#3c8c05", html: "<span style="color: #3c8c05">string 3</span>"}
```