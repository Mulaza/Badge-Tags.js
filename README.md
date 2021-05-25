
# Badge Tags.js
![2](https://user-images.githubusercontent.com/60890281/119446452-0c411000-bd61-11eb-87a1-9f9ef3b402b5.png)


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
  <link rel="stylesheet" href="/src/css/style.css">
```
Because the library looks over the the page content for specific classes, place the script tag at the bottom of your HTML file or add the `defer` keyword to the tag, so the script will load after the HTML content.
```html
  <script src="/src/js/main.js"></script>
```

## How To Use
Create a div with your desired words in it starting with a `#` value by adding the `data-badge-tags` data attribute and giving it a value of `active`.

NOTE: all words not starting with the `#` hash sign will not displayed as badges.

```html
  <div data-badge-tags="active">
      I was in #Florida all #weekend at the #beach.    
  </div>
```

In a separate javascript file create an instance of the the `BadgeTags` class. And you're done. 



<p align="center">

  <img height="50" src="https://user-images.githubusercontent.com/60890281/119476429-a2d0f980-bd80-11eb-9106-ef7d4b66131e.png" alt="Material Bread logo">

</p>

```javascript
// Tags Instance
const tags = new BadgeTags();
```

## API
The tags class object takes one object witch is used to change the apperance and functionality of the created badge tags.



### Background Color
The `backgroundColor` property is used to assign a single background color to all badge tags. The property accepts RGB colors, HEX colors as-well as css supported named colors. The property defaults to `#f0f0f0` if no value is defined.

<p align="center">

  <img height="50" src="https://user-images.githubusercontent.com/60890281/119476427-a19fcc80-bd80-11eb-81ef-38d4076b54a0.png" alt="Material Bread logo">

</p>


```javascript
// Props object
const props = {
    backgroundColor: "#ff4a9d", // pink
    textColor: 'white'
}
```
### Text Color
The `textColor` property is used to assign a single text color to all badge tags. The property accepts RGB colors, HEX colors as-well as css supported named colors. The property defaults to `grey` if no value is defined.

<p align="center">

  <img height="50" src="https://user-images.githubusercontent.com/60890281/119476424-a06e9f80-bd80-11eb-9f67-1926961613cf.png" alt="Material Bread logo">

</p>

```javascript
// Props object
const props = {
    textColor: "#d53eff" // purple
}
```
### Border Color
The `borderColor` property is used to assign a single text color to all badge tags. The property accepts RGB colors, HEX colors as-well as css supported named colors. The property defaults to `transparent` if no value is defined.

<p align="center">

  <img height="50" src="https://user-images.githubusercontent.com/60890281/119476419-9f3d7280-bd80-11eb-9f81-6b6829318faa.png" alt="Material Bread logo">

</p>

```javascript
// Props object
const props = {
    borderColor: "#00d9ba" // teal
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

