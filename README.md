
# Category Tags.js


## About
Hastags.js is a javascript library that helps turn your flagged keywords into mobile tokens.

## Install
### NPM

To install this package with NPM run the command below and link the needed javascript and css into your html file.
```text
npm i ***** --save
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
Create a div with your desired words in it starting with a `#` value by adding the `data-tags` data attribute and giving it a value of `active`.

NOTE: all words not starting with the `#` hash sign will not displayed as tokens.

```html
    <div data-tags="active">
        This is an example of #Hashtag.js that can be used #Javascript.
    </div>
```

In a seprate javascript file create an instance of the the `Tags` class. And you're done. 
```javascript
const tags = new Tags();
```