# text-to-color-js
This is a simple javascript generating color code from string.

# How to use
1. Place the main javascript at any directory, and load it in a html file.

```html
<script type="text/javascript" src="/any_path_to/txt2color.js"></script>
```

2. Create t2c object.


```javascript
const t2c = new TextToColor(9999);
```

If you want to change generating color code pattern, pass any number to constructor's argument.

3. Call generateColorHexFromString function.

```javascript
let string = 'some string';
let colorCode = t2c.generateColorHexFromString(string);

console.log(colorCode);

// #d71e05
```