---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Customise

The design tokens (colours, font styles and hierarchy, border radius, etc.) of Pallote are fully customisable. Learn here how to override the different styles of Pallote CSS to suit your own design system.

## Override variables

## Style components


<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

Tototot
  </TabItem>
  <TabItem value="css" label="CSS">

Tototot
  </TabItem>
</Tabs>

### Sass variables

The framework has a set of built-in variables that create the design look and feel. To override them, add a variable with the same name in your Sass style file. To see details of each variable, see Color palette and Typography pages.

```css
$primary: #007A1E;

@import '~/node_modules/pallote-react/dist/styles/index.scss';
```

:::info
The code must be placed above any import of Pallote CSS.
:::


### Component overrides

To change a component style, see the documentation for each component and add create an instance of the class with new properties in your style file.

```css
@import '~/node_modules/pallote-react/dist/styles/index.scss';

.link {
  text-decoration: none;
}
```

:::info
The class must be placed below any import of Pallote CSS.
:::

## In React components

This section is dedicated for the React component library.

You can add custom classes to every component to add your own css properties. To do so, simply add a `className` prop to the component. It will be added to the already existing classes applied to the parent HTML tag.

```jsx
import React from 'react';
import { Button } from 'palotte-react';

export default function ButtonTest() {
  return <Button className="custom-class">Hello Pallote</Button>;
}
```
