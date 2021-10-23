<h1 align="center">Welcome to CSS Confetti Paint Worklet 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0.beta-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/AmirAsghary/confetti-css-worklet#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/AmirAsghary/confetti-css-worklet/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/AmirAsghary/CSS Confetti Paint Worklet" />
  </a>
</p>

> confetti generator worklet for CSS

### 🏠 [Homepage](https://github.com/AmirAsghary/confetti-css-worklet#readme)

### ✨ [Demo](https://amirasghary.github.io/confetti-css-worklet/)

## Usage

Import it as a script.
```html
<script>
    // feature detection
    if ("paintWorklet" in CSS) {
      // importing types (optional)
      const confettiTypesScript = document.createElement("script");
      confettiTypesScript.setAttribute("type", "module");
      confettiTypesScript.setAttribute("src", "src/types.js");
      document.body.appendChild(confettiTypesScript);  

      // adding the worklet
      CSS.paintWorklet.addModule("./src/worklet.js");
    } else {
      // do something if the feature doesn't exist on the user's browser
    }
</script>
```

Then in your css selector you can write:
```css
background-image: paint(confetti);
```

You can control the confetti generation variables:
```css
--confetti-dimentions: 10px 20px;
--confetti-padding: 20px;
--confetti-amount: 50;  
```

## Author

👤 **Amir Asghary**

* Github: [@AmirAsghary](https://github.com/AmirAsghary)
* LinkedIn: [@AmirAsghary](https://linkedin.com/in/AmirAsghary)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/AmirAsghary/confetti-css-worklet/issues). 

## Show your support

Give a ⭐️ if this project helped you!
