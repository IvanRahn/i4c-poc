import  {createGlobalStyle}  from 'styled-components';

const GlobalStyle = createGlobalStyle`
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */
* {
  box-sizing: border-box;
}
html {
  -webkit-text-size-adjust: 100%; /* 2 */
}
html,body
{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden; 
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  scroll-behavior: smooth;
  font-family: Helvetica;
  letter-spacing: 0.25px;
}



main {
  display: block;
  margin-top: 60px;
  position: relative;
  transition: 1s;
  left: 0;
  @media only screen and (min-width: 900px) {
    margin-top: 110px;
  }
  section:first-child {
    @media only screen and (min-width: 500px) {
    
  }
  }
}
.left {
  left:0;
}
small {
  font-size: 13px;
}



h1 {
  font-size: 32px;
  font-weight: bold;
  line-height: 40px;;
  @media only screen and (min-width: 960px) {
    font-size: 48px;
    font-weight: bold;
    line-height: 46px;
  }
}
h2 {
  font-size: 24px;
  font-weight: bold;
  line-height: 32px;
  @media only screen and (min-width: 960px) {
    font-size: 32px;
    font-weight: bold;
    line-height: 40px;
  }
}
h3 {
  font-size: 24px;
  font-weight: lighter;
  line-height: 32px;
  @media only screen and (min-width: 960px) {
    font-size: 32px;
    font-weight: lighter;
    line-height: 40px;
  }
}

h4 {
  font-size: 20px;
  font-weight: bold;
  line-height: 28px;
  @media only screen and (min-width: 960px) {
    font-size: 24px;
    font-weight: bold;
    line-height: 32px;
  }
}
h5 {
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  @media only screen and (min-width: 960px) {
    font-size: 20px;
    font-weight: bold;
    line-height: 30px;
  }
}
h6 {
  font-size: 13px;
  font-weight: bold;
  line-height: 16px;
  @media only screen and (min-width: 960px) {
    font-size: 20px;
    font-weight: bold;
    line-height: 30px;
  }
}
p {
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  @media only screen and (min-width: 960px) {
    font-size: 20px;
    line-height: 32px;
  }
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */




pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}



a {
  text-decoration: none;
}



abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}



b,
strong {
  font-weight: bolder;
}


code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}



sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}



img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}



legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}


::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}
`
export default GlobalStyle
