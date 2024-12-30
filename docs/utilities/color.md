---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Layer, Text } from "pallote-react"

# Color

Use this utility props and classes to apply a custom background or stroke colour to an element.

If you are using the React package, wrap your component within the `<Layer />` component. For Pallote CSS, simply apply the classes to your element.

:::info Text colour
The text colour is automatically applied using the `contrast` colour variables.
:::

## Props

### Common

<div class="docs__block">
  <div class="docs_row">
    <Layer fill="black" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Black</Text></Layer>
    <Layer fill="white" className={'p-1 br-sm w-rem-15'}><Text variant="caption">White</Text></Layer>
  </div>
  <div class="docs_row">
    <Layer stroke="black" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Black</Text></Layer>
    <Layer stroke="white" className={'p-1 br-sm w-rem-15'}><Text variant="caption">White</Text></Layer>
  </div>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Layer fill="black"></Layer>
<Layer fill="white"></Layer>

<Layer stroke="black"></Layer>
<Layer stroke="white"></Layer>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="fill-black"></div>
<div class="fill-white"></div>

<div class="stroke-black"></div>
<div class="stroke-white"></div>
```
  </TabItem>
</Tabs>

### Grey

<div class="docs__block">
  <div class="docs_row">
    <Layer fill="grey90" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Grey 90</Text></Layer>
    <Layer fill="grey80" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Grey 80</Text></Layer>
    <Layer fill="grey70" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Grey 70</Text></Layer>
    <Layer fill="grey60" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Grey 60</Text></Layer>
    <Layer fill="grey50" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Grey 50</Text></Layer>
    <Layer fill="grey40" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Grey 40</Text></Layer>
    <Layer fill="grey30" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Grey 30</Text></Layer>
    <Layer fill="grey20" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Grey 20</Text></Layer>
    <Layer fill="grey10" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Grey 10</Text></Layer>
    <Layer fill="grey5" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Grey 5</Text></Layer>
  </div>
  <div class="docs_row">
    <Layer stroke="grey90" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Grey 90</Text></Layer>
    <Layer stroke="grey80" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Grey 80</Text></Layer>
    <Layer stroke="grey70" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Grey 70</Text></Layer>
    <Layer stroke="grey60" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Grey 60</Text></Layer>
    <Layer stroke="grey50" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Grey 50</Text></Layer>
    <Layer stroke="grey40" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Grey 40</Text></Layer>
    <Layer stroke="grey30" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Grey 30</Text></Layer>
    <Layer stroke="grey20" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Grey 20</Text></Layer>
    <Layer stroke="grey10" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Grey 10</Text></Layer>
    <Layer stroke="grey5" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Grey 5</Text></Layer>
  </div>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Layer fill="grey90"></Layer>
<Layer fill="grey80"></Layer>
<Layer fill="grey70"></Layer>
<Layer fill="grey60"></Layer>
<Layer fill="grey50"></Layer>
<Layer fill="grey40"></Layer>
<Layer fill="grey30"></Layer>
<Layer fill="grey20"></Layer>
<Layer fill="grey10"></Layer>
<Layer fill="grey5"></Layer>

<Layer stroke="grey90"></Layer>
<Layer stroke="grey80"></Layer>
<Layer stroke="grey70"></Layer>
<Layer stroke="grey60"></Layer>
<Layer stroke="grey50"></Layer>
<Layer stroke="grey40"></Layer>
<Layer stroke="grey30"></Layer>
<Layer stroke="grey20"></Layer>
<Layer stroke="grey10"></Layer>
<Layer stroke="grey5"></Layer>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="fill-grey90"></div>
<div class="fill-grey80"></div>
<div class="fill-grey70"></div>
<div class="fill-grey60"></div>
<div class="fill-grey50"></div>
<div class="fill-grey40"></div>
<div class="fill-grey30"></div>
<div class="fill-grey20"></div>
<div class="fill-grey10"></div>
<div class="fill-grey5"></div>

<div class="stroke-grey90"></div>
<div class="stroke-grey80"></div>
<div class="stroke-grey70"></div>
<div class="stroke-grey60"></div>
<div class="stroke-grey50"></div>
<div class="stroke-grey40"></div>
<div class="stroke-grey30"></div>
<div class="stroke-grey20"></div>
<div class="stroke-grey10"></div>
<div class="stroke-grey5"></div>
```
  </TabItem>
</Tabs>

### Background

<div class="docs__block">
  <div class="docs_row">
    <Layer fill="default" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Background</Text></Layer>
    <Layer fill="paper" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Paper</Text></Layer>
  </div>
  <div class="docs_row">    
    <Layer stroke="default" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Background</Text></Layer>
    <Layer stroke="paper" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Paper</Text></Layer>
  </div>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Layer fill="default"></Layer>
<Layer fill="paper"></Layer>

<Layer stroke="default"></Layer>
<Layer stroke="paper"></Layer>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="fill-background"></div>
<div class="fill-paper"></div>

<div class="stroke-background"></div>
<div class="stroke-paper"></div>
```
  </TabItem>
</Tabs>

### Brand

<div class="docs__block">
  <div class="docs_row">
    <Layer fill="primary" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Primary</Text></Layer>
    <Layer fill="secondary" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Secondary</Text></Layer>
    <Layer fill="highlight" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Highlight</Text></Layer>
  </div>
  <div class="docs_row">
    <Layer stroke="primary" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Primary</Text></Layer>
    <Layer stroke="secondary" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Secondary</Text></Layer>
    <Layer stroke="highlight" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Highlight</Text></Layer>
  </div>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Layer fill="primary"></Layer>
<Layer fill="secondary"></Layer>
<Layer fill="highlight"></Layer>

<Layer stroke="primary"></Layer>
<Layer stroke="secondary"></Layer>
<Layer stroke="highlight"></Layer>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="fill-primary"></div>
<div class="fill-secondary"></div>
<div class="fill-highlight"></div>

<div class="stroke-primary"></div>
<div class="stroke-secondary"></div>
<div class="stroke-highlight"></div>
```
  </TabItem>
</Tabs>

### Status

<div class="docs__block">
  <div class="docs_row">
    <Layer fill="success" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Success</Text></Layer>
    <Layer fill="info" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Info</Text></Layer>
    <Layer fill="warning" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Warning</Text></Layer>
    <Layer fill="error" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Error</Text></Layer>
  </div>
  <div class="docs_row">
    <Layer stroke="success" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Success</Text></Layer>
    <Layer stroke="info" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Info</Text></Layer>
    <Layer stroke="warning" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Warning</Text></Layer>
    <Layer stroke="error" className={'p-1 br-sm w-rem-15'}><Text variant="caption">Error</Text></Layer>
  </div>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Layer fill="success"></Layer>
<Layer fill="info"></Layer>
<Layer fill="warning"></Layer>
<Layer fill="error"></Layer>

<Layer stroke="success"></Layer>
<Layer stroke="info"></Layer>
<Layer stroke="warning"></Layer>
<Layer stroke="error"></Layer>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="fill-success"></div>
<div class="fill-info"></div>
<div class="fill-warning"></div>
<div class="fill-error"></div>

<div class="stroke-success"></div>
<div class="stroke-info"></div>
<div class="stroke-warning"></div>
<div class="stroke-error"></div>
```
  </TabItem>
</Tabs>

## Props details

| Prop | Values | Default |
| - | - | - |
| fill | `black` `white` <br></br> `background` `paper` <br></br> `grey90` `grey80` `grey70` `grey60` `grey50` `grey40` `grey30` `grey20` `grey10` `grey5` <br></br> `primary` `secondary` `highlight` <br></br> `success` `info` `warning` `error` | `-` |
| stroke | `black` `white` <br></br> `background` `paper` <br></br> `grey90` `grey80` `grey70` `grey60` `grey50` `grey40` `grey30` `grey20` `grey10` `grey5` <br></br> `primary` `secondary` `highlight` <br></br> `success` `info` `warning` `error` | `-` |

## Examples

You can combine both props, or nest Layer components inside one another.

<div class="docs__block grid--ai-center">
  <Layer fill="grey70" stroke="white" className={'p-1 br-sm w-rem-15'}>
    <Text variant="caption">Example 1</Text>
  </Layer>
  <Layer fill="white" className={'p-1 br-md'}>
    <Text variant="caption">Example 2</Text>
    <Layer fill="primary" className={'p-1 mt-1 br-sm w-rem-15'}>
      <Text variant="caption">Example 2</Text>
    </Layer>
  </Layer>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Layer fill="grey70" stroke="white"></Layer>
<Layer fill="white">
  <Layer fill="primary"></Layer>
</Layer>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="fill-grey70 stroke-white"></div>
<div class="fill-white">
  <div class="fill-primary"></div>
</div>
```
  </TabItem>
</Tabs>
