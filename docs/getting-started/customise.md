---
sidebar_position: 2
---

# Customise

The design tokens (colours, font styles and hierarchy, border radius, etc.) of Pallote are fully customisable. Learn here how to override the different styles of Pallote CSS to suit your own design system.

## Sass variables

The framework has a set of built-in variables that create the design look and feel. To override them, add a variable with the same name in your Sass style file. To see details of each variable, see Color palette and Typography pages.

```scss
$primary: #007A1E;

@import '../node_modules/pallote-react/dist/styles/index.scss';
```

> The code must be placed above any import of Pallote CSS.

## Component overrides

To change a component style, see the documentation for each component and add create an instance of the class with new properties in your style file.

```scss
@import '../node_modules/pallote-react/dist/styles/index.scss';

.link {
  text-decoration: none;
}
```

The class must be placed below any import of Pallote CSS.
