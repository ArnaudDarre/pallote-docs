---
---
import { Grid, Input } from "pallote-react"

# Input

Component for every call-to-action.

<div class="docs__block">
  <div class="docs__items">
    <Input id="input" label="Input" />
  </div>

  ```jsx
  <Input id="input" label="Input" />
  ```
</div>

## Props

### Type

Change the input type property.

<div class="docs__block">
  <Grid wrapper spacing={2}>
    <Grid item xs="6"><Input type="date" id="date" label="Date" /></Grid>
    <Grid item xs="6"><Input type="email" id="email" label="Email" /></Grid>
    <Grid item xs="6"><Input type="number" id="number" label="Number" /></Grid>
    <Grid item xs="6"><Input type="tel" id="tel" label="Telephone" /></Grid>
    <Grid item xs="6"><Input type="text" id="text" label="Text" /></Grid>
    <Grid item xs="6"><Input type="time" id="time" label="Time" /></Grid>
  </Grid>

  ```jsx
  <Input type="date" id="date" label="Date" />
  <Input type="email" id="email" label="Email" />
  <Input type="number" id="number" label="Number" />
  <Input type="tel" id="tel" label="Telephone" />
  <Input type="text" id="text" label="Text" />
  <Input type="time" id="time" label="Time" />
  ```
</div>

### isFocused

Focus on a input on page load.

<div class="docs__block">
  <div class="docs__items">
    <Input id="isFocused" label="IsFocused" focus />
  </div>

  ```jsx
  <Input id="isFocused" label="IsFocused" focus />
  ```
</div>

### Error

Notify users that the field has an error.

<div class="docs__block">
  <div class="docs__items">
    <Input id="error" label="Error" error />
  </div>

  ```jsx
  <Input id="error" label="Error" error />
  ```
</div>

### Disabled

Add this class to signal users the field is disabled.

<div class="docs__block">
  <div class="docs__items">
    <Input id="disabled" label="Disabled" disabled />
  </div>

  ```jsx
  <Input id="disabled" label="Disabled" disabled />
  ```
</div>

### Optional

<div class="docs__block">
  <div class="docs__items">
    <Input id="required" label="Required" required />
  </div>

  ```jsx
  <Input id="required" label="Required" required />
  ```
</div>

## Props details

| Name | Type | Values | Default |
| - | - | - | - |
| `type` | `oneOff` | `date` `email` `number` `tel` `text` `time` | `text` |
| `isFocused` | `boolean` | | `false` |
| `error` | `boolean` | | `false` |
| `disabled` | `boolean` | | `false` |
| `optional` | `boolean` | | `false` |
