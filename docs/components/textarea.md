---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Grid, Textarea } from "pallote-react"

# Textarea

Styling for a textarea field. This component uses the same structure as the [Input](/docs/components/input) component.

<div class="docs__block">
  <Textarea id="textarea" label="Textarea" />
</div>


<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Textarea id="textarea" label="Textarea" />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input textarea">
  <label for="textarea" class="input_label">Textarea</label>
  <textarea id="textarea" rows="4" class="input__control"></textarea>
</div>
```
  </TabItem>
</Tabs>

## Props

### isFocused

Focus on a input on page load.

<div class="docs__block">
  <Textarea id="isFocused" label="IsFocused" isFocused />
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Textarea id="isFocused" label="IsFocused" isFocused />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input input-focused textarea">
  <label for="focused" class="input_label">Focused</label>
  <textarea id="focused" rows="4" class="input__control"></textarea>
</div>
```
  </TabItem>
</Tabs>

### Error

Notify users that the field has an error.

<div class="docs__block">
  <Textarea id="error" label="Error" error />
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Textarea id="error" label="Error" error />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input input-error textarea">
  <label for="error" class="input_label">Error</label>
  <textarea id="error" rows="4" class="input__control"></textarea>
</div>
```
  </TabItem>
</Tabs>

### Disabled

Add this class to signal users the field is disabled.

<div class="docs__block">
  <Textarea id="disabled" label="Disabled" disabled />
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Textarea id="disabled" label="Disabled" disabled />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input input-disabled textarea">
  <label for="disabled" class="input_label">Disabled</label>
  <textarea id="disabled" rows="4" class="input__control"></textarea>
</div>
```
  </TabItem>
</Tabs>

### Optional

<div class="docs__block">
  <Textarea id="required" label="Required" required />
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Textarea id="required" label="Required" required />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input input-required textarea">
  <label for="required" class="input_label">Required</label>
  <textarea id="required" rows="4" class="input__control" required></textarea>
</div>
```
  </TabItem>
</Tabs>
