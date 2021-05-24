
# Badge Tags.js


## About
BadgeTags.js is a javascript library that helps turn your flagged keywords into mobile badge tags.

## Install
### NPM

To install this package with NPM run the command below and link the needed javascript and css into your html file.
```text
npm i badgetags --save
```

### Direct Download
To use this package you need to link the needed javascript and css into your html file.
```html
  <link rel="stylesheet" href="/dist/css/style.css">
```
Because the library looks over the the page content for specific classes, place the script tag at the bottom of your HTML file or add the `defer` keyword to the tag, so the script will load after the HTML content.
```html
  <script src="/dist/js/main.js"></script>
```

## How To Use
Create a div with your desired words in it starting with a `#` value by adding the `data-badge-tags` data attribute and giving it a value of `active`.

NOTE: all words not starting with the `#` hash sign will not displayed as badges.

```html
    <div data-badge-tags="active">
        This is an example of #BadgeTags.js that can be used #Javascript.
    </div>
```

In a seprate javascript file create an instance of the the `BadgeTags` class. And you're done. 
```javascript
// Tags Instance
const tags = new BadgeTags();
```

## API
The tags class object takes one object witch is used to change the apperance and functionality of the created badge tags.



### Background Color
The `backgroundColor` property is used to assign a single background color to all badge tags. The property accepts RGB colors, HEX colors as-well as css supported named colors. The property defaults to `rgb(240, 240, 240` if no value is defined.
```javascript
// Props object
const props = {
    backgroundColor: "#ff4a9d" // pink
}
```
### Text Color
The `textColor` property is used to assign a single text color to all badge tags. The property accepts RGB colors, HEX colors as-well as css supported named colors. The property defaults to `grey` if no value is defined.
```javascript
// Props object
const props = {
    textColor: "#d53eff" // purple
}
```
### Border Color
The `borderColor` property is used to assign a single text color to all badge tags. The property accepts RGB colors, HEX colors as-well as css supported named colors. The property defaults to `transparent` if no value is defined.
```javascript
// Props object
const props = {
    borderColor: "#00d9ba" // blue
}
```

### Click Callback
The `callback` property is used to assign a single callback function to all badge tags fired on the `click` event.

```javascript
// Callback function
function hey(event){
  console.log(`${target.event.innerHTML} 🔥`);
};

// Props object
const props = {
    callback: hey
}

// Tags Instance
const tags = new BadgeTags(props);
```

