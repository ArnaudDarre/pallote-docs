---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Checkbox, Checkboxes } from "pallote-react"

# Checkboxes

Component for every call-to-action.

<div class="docs__block">
  <Checkboxes label="Legend">
    <Checkbox id="checkbox_1" value="1" label="Option 1" />
    <Checkbox id="checkbox_2" value="2" label="Option 2" />
  </Checkboxes>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Checkboxes label="Legend">
  <Checkbox id="checkbox_1" value="1" label="Option 1" />
  <Checkbox id="checkbox_2" value="2" label="Option 2" />
</Checkboxes>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input">
  <legend class="input_label">Legend</legend>
  <div class="input_control checkboxes">
    <div class="checkbox">
      <input type="checkbox" id="checkbox_1" value="checkbox_1" class="checkbox_control" />
      <label for="checkbox_1" class="checkbox_label">Option 1</label>
    </div>
    <div class="checkbox">
      <input type="checkbox" id="checkbox_2" value="checkbox_2" class="checkbox_control" />
      <label for="checkbox_2" class="checkbox_label">Option 2</label>
    </div>
  </div>
</div>
```
  </TabItem>
</Tabs>

## Props

### Direction

<div class="docs__block">
  <Checkboxes label="Landscape">
    <Checkbox id="landscape_1" value="1" label="Option 1" />
    <Checkbox id="landscape_2" value="2" label="Option 2" />
  </Checkboxes>
  <Checkboxes label="Portrait" direction="portrait">
    <Checkbox id="portrait_1" value="1" label="Option 1" />
    <Checkbox id="portrait_2" value="2" label="Option 2" />
  </Checkboxes>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Checkboxes label="Landscape">
  <Checkbox id="landscape_1" value="1" label="Option 1" />
  <Checkbox id="landscape_2" value="2" label="Option 2" />
</Checkboxes>

<Checkboxes label="Portrait" direction="portrait">
  <Checkbox id="portrait_1" value="1" label="Option 1" />
  <Checkbox id="portrait_2" value="2" label="Option 2" />
</Checkboxes>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input">
  <legend class="input_label">Landscape</legend>
  <div class="input_control checkboxes">
    <div class="checkbox">
      <input type="checkbox" id="landscape_1" value="landscape_1" class="checkbox_control" />
      <label for="landscape_1" class="checkbox_label">Option 1</label>
    </div>
    <div class="checkbox">
      <input type="checkbox" id="landscape_2" value="landscape_2" class="checkbox_control" />
      <label for="landscape_2" class="checkbox_label">Option 2</label>
    </div>
  </div>
</div>

<div class="input input-portrait">
  <legend class="input_label">Portrait</legend>
  <div class="input_control checkboxes">
    <div class="checkbox">
      <input type="checkbox" id="landscape_1" value="landscape_1" class="checkbox_control" />
      <label for="landscape_1" class="checkbox_label">Option 1</label>
    </div>
    <div class="checkbox">
      <input type="checkbox" id="landscape_2" value="landscape_2" class="checkbox_control" />
      <label for="landscape_2" class="checkbox_label">Option 2</label>
    </div>
  </div>
</div>
```
  </TabItem>
</Tabs>

### Error

<div class="docs__block">
  <Checkboxes label="Error" error>
    <Checkbox id="error_1" value="1" label="Option 1" />
    <Checkbox id="error_2" value="2" label="Option 2" />
  </Checkboxes>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Checkboxes label="Error" error>
  <Checkbox id="error_1" value="1" label="Option 1" />
  <Checkbox id="error_2" value="2" label="Option 2" />
</Checkboxes>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input input-error">
  <legend class="input_label">Error</legend>
  <div class="input_control checkboxes">
    <div class="checkbox">
      <input type="checkbox" id="error_1" value="error_1" class="checkbox_control" />
      <label for="error_1" class="checkbox_label">Option 1</label>
    </div>
    <div class="checkbox">
      <input type="checkbox" id="error_2" value="error_2" class="checkbox_control" />
      <label for="error_2" class="checkbox_label">Option 2</label>
    </div>
  </div>
</div>
```
  </TabItem>
</Tabs>

### Disabled

<div class="docs__block">
  <Checkboxes label="Disabled" disabled>
    <Checkbox id="disabled_1" value="1" label="Option 1" />
    <Checkbox id="disabled_2" value="2" label="Option 2" />
  </Checkboxes>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Checkboxes label="Disabled" disabled>
  <Checkbox id="disabled_1" value="1" label="Option 1" />
  <Checkbox id="disabled_2" value="2" label="Option 2" />
</Checkboxes>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input input-disabled">
  <legend class="input_label">Disabled</legend>
  <div class="input_control checkboxes">
    <div class="checkbox">
      <input type="checkbox" id="disabled_1" value="disabled_1" class="checkbox_control" />
      <label for="disabled_1" class="checkbox_label">Option 1</label>
    </div>
    <div class="checkbox">
      <input type="checkbox" id="disabled_2" value="disabled_2" class="checkbox_control" />
      <label for="disabled_2" class="checkbox_label">Option 2</label>
    </div>
  </div>
</div>
```
  </TabItem>
</Tabs>

### Required

<div class="docs__block">
  <Checkboxes label="Required" required>
    <Checkbox id="required_1" value="1" label="Option 1" />
    <Checkbox id="required_2" value="2" label="Option 2" />
  </Checkboxes>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Checkboxes label="Required" required>
  <Checkbox id="required_1" value="1" label="Option 1" />
  <Checkbox id="required_2" value="2" label="Option 2" />
</Checkboxes>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input input-required">
  <legend class="input_label">Required</legend>
  <div class="input_control checkboxes">
    <div class="checkbox">
      <input type="checkbox" id="required_1" value="required_1" class="checkbox_control" />
      <label for="required_1" class="checkbox_label">Option 1</label>
    </div>
    <div class="checkbox">
      <input type="checkbox" id="required_2" value="required_2" class="checkbox_control" />
      <label for="required_2" class="checkbox_label">Option 2</label>
    </div>
  </div>
</div>
```
  </TabItem>
</Tabs>
