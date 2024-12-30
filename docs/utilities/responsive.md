---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Card, CardContent, Display } from "pallote-react"

# Responsive

This utility allows to show or hide elements depending on certain conditions.

:::info Difference between packages
For the React package, use the `<Display />` component. This fully removes its chidlren from the DOM, while the classes from the `pallote-css` only hides them with `display: none`.
:::

## Props

### Show

<div class="docs__block docs__block--portrait">
  <Display show="mobile-sm">
    <Card size="xs"><CardContent>Show on small mobile</CardContent></Card>
  </Display>
  <Display show="mobile">
    <Card size="xs"><CardContent>Show on mobile</CardContent></Card>
  </Display>
  <Display show="tablet">
    <Card size="xs"><CardContent>Show on tablet</CardContent></Card>
  </Display>
  <Display show="laptop">
    <Card size="xs"><CardContent>Show on laptop</CardContent></Card>
  </Display>
  <Display show="desktop">
    <Card size="xs"><CardContent>Show on desktop</CardContent></Card>
  </Display>
  <Display show="touch">
    <Card size="xs"><CardContent>Show on desktop</CardContent></Card>
  </Display>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Display show="mobile-sm">{/* content */} </Display>
<Display show="mobile">{/* content */} </Display>
<Display show="tablet">{/* content */} </Display>
<Display show="laptop">{/* content */} </Display>
<Display show="desktop">{/* content */} </Display>
<Display show="touch">{/* content */} </Display>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="show-desktop"><!-- content --></div>
<div class="show-laptop"><!-- content --></div>
<div class="show-tablet"><!-- content --></div>
<div class="show-mobile"><!-- content --></div>
<div class="show-mobileSm"><!-- content --></div>
<div class="show-touch"><!-- content --></div>
```
  </TabItem>
</Tabs>

### Hide

<div class="docs__block docs__block--portrait">
  <Display hide="mobile-sm">
    <Card size="xs"><CardContent>Show on small mobile</CardContent></Card>
  </Display>
  <Display hide="mobile">
    <Card size="xs"><CardContent>Show on mobile</CardContent></Card>
  </Display>
  <Display hide="tablet">
    <Card size="xs"><CardContent>Show on tablet</CardContent></Card>
  </Display>
  <Display hide="laptop">
    <Card size="xs"><CardContent>Show on laptop</CardContent></Card>
  </Display>
  <Display hide="desktop">
    <Card size="xs"><CardContent>Show on desktop</CardContent></Card>
  </Display>
  <Display hide="touch">
    <Card size="xs"><CardContent>Show on desktop</CardContent></Card>
  </Display>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Display hide="mobile-sm">{/* content */} </Display>
<Display hide="mobile">{/* content */} </Display>
<Display hide="tablet">{/* content */} </Display>
<Display hide="laptop">{/* content */} </Display>
<Display hide="desktop">{/* content */} </Display>
<Display hide="touch">{/* content */} </Display>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="hide-desktop"><!-- content --></div>
<div class="hide-laptop"><!-- content --></div>
<div class="hide-tablet"><!-- content --></div>
<div class="hide-mobile"><!-- content --></div>
<div class="hide-mobileSm"><!-- content --></div>
<div class="hide-touch"><!-- content --></div>
```
  </TabItem>
</Tabs>
