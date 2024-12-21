---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Radio, RadioButtons } from "pallote-react"

# Radio buttons

Component for every call-to-action.

<div class="docs__block">
  <RadioButtons label="Legend">
    <Radio name="radio" id="radio_1" value="1" label="Option 1" />
    <Radio name="radio" id="radio_2" value="2" label="Option 2" />
  </RadioButtons>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<RadioButtons label="Legend">
  <Radio name="radio" id="radio_1" value="1" label="Option 1" />
  <Radio name="radio" id="radio_2" value="2" label="Option 2" />
</RadioButtons>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input">
  <legend class="input_label">Legend</legend>
  <div class="input_control radios">
    <div class="radio">
      <input type="radio" name="radio" id="radio_1" value="radio_1" class="radio_control" />
      <label for="radio_1" class="radio_label">Option 1</label>
    </div>
    <div class="radio">
      <input type="radio" name="radio" id="radio_2" value="radio_2" class="radio_control" />
      <label for="radio_2" class="radio_label">Option 2</label>
    </div>
  </div>
</div>
```
  </TabItem>
</Tabs>

## Props

### Direction

<div class="docs__block">
  <RadioButtons label="Landscape">
    <Radio name="landscape" id="landscape_1" value="1" label="Option 1" />
    <Radio name="landscape" id="landscape_2" value="2" label="Option 2" />
  </RadioButtons>
  <RadioButtons label="Portrait" direction="portrait">
    <Radio name="portrait" id="portrait_1" value="1" label="Option 1" />
    <Radio name="portrait" id="portrait_2" value="2" label="Option 2" />
  </RadioButtons>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<RadioButtons label="Landscape">
  <Radio name="landscape" id="landscape_1" value="1" label="Option 1" />
  <Radio name="landscape" id="landscape_2" value="2" label="Option 2" />
</RadioButtons>

<RadioButtons label="Portrait" direction="portrait">
  <Radio name="portrait" id="portrait_1" value="1" label="Option 1" />
  <Radio name="portrait" id="portrait_2" value="2" label="Option 2" />
</RadioButtons>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input">
  <legend class="input_label">Landscape</legend>
  <div class="input_control radios">
    <div class="radio">
      <input type="radio" name="landscape" id="landscape_1" value="landscape_1" class="radio_control" />
      <label for="landscape_1" class="radio_label">Option 1</label>
    </div>
    <div class="radio">
      <input type="radio" name="landscape" id="landscape_2" value="landscape_2" class="radio_control" />
      <label for="landscape_2" class="radio_label">Option 2</label>
    </div>
  </div>
</div>

<div class="input input-portrait">
  <legend class="input_label">Portrait</legend>
  <div class="input_control radios">
    <div class="radio">
      <input type="radio" name="portrait" id="portrait_1" value="portrait_1" class="radio_control" />
      <label for="portrait_1" class="radio_label">Option 1</label>
    </div>
    <div class="radio">
      <input type="radio" name="portrait" id="portrait_2" value="portrait_2" class="radio_control" />
      <label for="portrait_2" class="radio_label">Option 2</label>
    </div>
  </div>
</div>
```
  </TabItem>
</Tabs>

### Error

<div class="docs__block">
  <RadioButtons label="Error" error>
    <Radio name="error" id="error_1" value="1" label="Option 1" />
    <Radio name="error" id="error_2" value="2" label="Option 2" />
  </RadioButtons>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<RadioButtons label="Error" error>
  <Radio name="error" id="error_1" value="1" label="Option 1" />
  <Radio name="error" id="error_2" value="2" label="Option 2" />
</RadioButtons>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input input-error">
  <legend class="input_label">Error</legend>
  <div class="input_control radios">
    <div class="radio">
      <input type="radio" name="error" id="error_1" value="error_1" class="radio_control" />
      <label for="error_1" class="radio_label">Option 1</label>
    </div>
    <div class="radio">
      <input type="radio" name="error" id="error_2" value="error_2" class="radio_control" />
      <label for="error_2" class="radio_label">Option 2</label>
    </div>
  </div>
</div>
```
  </TabItem>
</Tabs>

### Disabled

<div class="docs__block">
  <RadioButtons label="Disabled" disabled>
    <Radio name="disabled" id="disabled_1" value="1" label="Option 1" />
    <Radio name="disabled" id="disabled_2" value="2" label="Option 2" />
  </RadioButtons>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<RadioButtons label="Disabled" disabled>
  <Radio name="disabled" id="disabled_1" value="1" label="Option 1" />
  <Radio name="disabled" id="disabled_2" value="2" label="Option 2" />
</RadioButtons>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input input-disabled">
  <legend class="input_label">Disabled</legend>
  <div class="input_control radios">
    <div class="radio">
      <input type="radio" name="disabled" id="disabled_1" value="disabled_1" class="radio_control" />
      <label for="disabled_1" class="radio_label">Option 1</label>
    </div>
    <div class="radio">
      <input type="radio" name="disabled" id="disabled_2" value="disabled_2" class="radio_control" />
      <label for="disabled_2" class="radio_label">Option 2</label>
    </div>
  </div>
</div>
```
  </TabItem>
</Tabs>

### Required

<div class="docs__block">
  <RadioButtons label="Required" required>
    <Radio name="required" id="required_1" value="1" label="Option 1" />
    <Radio name="required" id="required_2" value="2" label="Option 2" />
  </RadioButtons>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<RadioButtons label="Required" required>
  <Radio name="required" id="required_1" value="1" label="Option 1" />
  <Radio name="required" id="required_2" value="2" label="Option 2" />
</RadioButtons>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input input-required">
  <legend class="input_label">Required</legend>
  <div class="input_control radios">
    <div class="radio">
      <input type="radio" name="required" id="required_1" value="required_1" class="radio_control" />
      <label for="required_1" class="radio_label">Option 1</label>
    </div>
    <div class="radio">
      <input type="radio" name="required" id="required_2" value="required_2" class="radio_control" />
      <label for="required_2" class="radio_label">Option 2</label>
    </div>
  </div>
</div>
```
  </TabItem>
</Tabs>
