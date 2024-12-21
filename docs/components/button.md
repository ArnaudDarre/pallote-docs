---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Button } from "pallote-react"

# Button

Component for every call-to-action.

<div class="docs__block">
  <Button>Button</Button>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Button>Button</Button>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<button class="button">Button</button>
```
  </TabItem>
</Tabs>

## Props

### Kind

### Variant

Change the button style.

<div class="docs__block">
  <Button>Fill</Button>
  <Button variant="stroke">Stroke</Button>
  <Button variant="transparent">Transparent</Button>
</div>

<Tabs groupId="package" queryString>
   <TabItem value="react" label="React">
  
```jsx
<Button>Fill</Button>
<Button variant="stroke">Stroke</Button>
<Button variant="transparent">Transparent</Button>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<button class="button">Fill</button>
<button class="button button-stroke">Stroke</button>
<button class="button button-transparent">Transparent</button>
```
  </TabItem>
</Tabs>

### Size

<div class="docs__block">
  <Button size="xsmall">Xsmall</Button>
  <Button size="small">Small</Button>
  <Button>Medium</Button>
  <Button size="large">Large</Button>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Button size="xsmall">Xsmall</Button>
<Button size="small">Small</Button>
<Button>Medium</Button>
<Button size="large">Large</Button>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<button class="button button-xsmall">Xsmall</button>
<button class="button button-small">Small</button>
<button class="button">Medium</button>
<button class="button button-large">Large</button>
```
  </TabItem>
</Tabs>


### Color

<div class="docs__block">
  <Button>Primary</Button>
  <Button color="secondary">Secondary</Button>
  <Button color="highlight">Highlight</Button>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Button>Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="highlight">Highlight</Button>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<button class="button">Primary</button>
<button class="button button-secondary">Secondary</button>
<button class="button button-highlight">Highlight</button>
```
  </TabItem>
</Tabs>


### Fullwidth

<div class="docs__block">
  <Button fullWidth>Full width</Button>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Button fullWidth>Full width</Button>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<button class="button button-fullWidth">Full width</button>
```
  </TabItem>
</Tabs>

### Disabled

<div class="docs__block">
  <Button disabled>Disabled</Button>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Button disabled>Disabled</Button>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<button class="button button-disabled">Disabled</button>
```
  </TabItem>
</Tabs>

## Examples
