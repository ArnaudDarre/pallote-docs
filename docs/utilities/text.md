---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Text } from "pallote-react"

# Text

Use these utility props and classes to override the text style of an element.

## Variant

<div class="docs__block docs__block--portrait">
  <div class="docs_row grid--ai-baseline">
    <Text variant="h1">h1</Text>
    <Text variant="h2">h2</Text>
    <Text variant="h3">h3</Text>
    <Text variant="h4">h4</Text>
    <Text variant="h5">h5</Text>
    <Text variant="h6">h6</Text>
  </div>
  <div class="docs_row grid--ai-baseline">
    <Text variant="subtitle">Subtitle</Text>
    <Text variant="body">Body</Text>
    <Text variant="caption">Caption</Text>
    <Text variant="overline">Overline</Text>
  </div>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Text variant="h1">h1</Text>
<Text variant="h2">h2</Text>
<Text variant="h3">h3</Text>
<Text variant="h4">h4</Text>
<Text variant="h5">h5</Text>
<Text variant="h6">h6</Text>

<Text variant="subtitle">Subtitle</Text>
<Text variant="body">Body</Text>
<Text variant="caption">Caption</Text>
<Text variant="overline">Overline</Text>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<h1 class="h1">h1</h1>
<h2 class="h2">h2</h2>
<h3 class="h3">h3</h3>
<h4 class="h4">h4</h4>
<h5 class="h5">h5</h5>
<h6 class="h6">h6</h6>

<p class="subtitle">Subtitle</p>
<p class="body">Body</p>
<p class="caption">Caption</p>
<p class="overline">Overline</p>
```
  </TabItem>
</Tabs>

## Align

<div class="docs__block docs__block--portrait">
  <Text align="left" className="w-100">Left</Text>
  <Text align="center" className="w-100">Center</Text>
  <Text align="right" className="w-100">Right</Text>
  <Text align="justify" className="w-100">Justify</Text>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Text align="left">Left</Text>
<Text align="center">Center</Text>
<Text align="right">Right</Text>
<Text align="justify">Justify</Text>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<p class="text-left">Left</p>
<p class="text-center">Center</p>
<p class="text-right">Right</p>
<p class="text-justify">Justify</p>
```
  </TabItem>
</Tabs>

## Weight

<div class="docs__block">
  <Text weight="light">Light</Text>
  <Text weight="regular">Regular</Text>
  <Text weight="bold">Bold</Text>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Text weight="light">Light</Text>
<Text weight="regular">Regular</Text>
<Text weight="bold">Bold</Text>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<p class="text-light">Light</p>
<p class="text-regular">Regular</p>
<p class="text-bold">Bold</p>
```
  </TabItem>
</Tabs>

## Transform

<div class="docs__block">
  <Text transform="none">None</Text>
  <Text transform="capitalize">Capitalize</Text>
  <Text transform="uppercase">Uppercase</Text>
  <Text transform="lowercase">Lowercase</Text>
  <Text transform="initial">Initial</Text>
  <Text transform="inherit">Inherit</Text>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Text transform="none">None</Text>
<Text transform="capitalize">Capitalize</Text>
<Text transform="uppercase">Uppercase</Text>
<Text transform="lowercase">Lowercase</Text>
<Text transform="initial">Initial</Text>
<Text transform="inherit">Inherit</Text>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<p class="text-none">None</p>
<p class="text-capitalize">Capitalize</p>
<p class="text-uppercase">Uppercase</p>
<p class="text-lowercase">Lowercase</p>
<p class="text-initial">Initial</p>
<p class="text-inherit">Inherit</p>
```
  </TabItem>
</Tabs>

## Underline

<div class="docs__block">
  <Text underline>Underline</Text>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Text underline>Underline</Text>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<p class="text-underline">Underline</p>
```
  </TabItem>
</Tabs>

## Italic

<div class="docs__block">
  <Text italic>Italic</Text>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Text italic>Italic</Text>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<p class="text-italic">Italic</p>
```
  </TabItem>
</Tabs>

## Code

<div class="docs__block">
  <Text code>Code</Text>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Text code>Code</Text>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<p class="text-code">Code</p>
```
  </TabItem>
</Tabs>

## Color

<div class="docs__block docs__block--portrait">
  <div class="docs_row">
    <Text color="default">Default</Text>
    <Text color="alt">Alt</Text>
    <Text color="disabled">Disabled</Text>
  </div>
  <div class="docs_row">
    <div class="fill--white"><Text color="contrast">Contrast</Text></div>
    <div class="fill--white"><Text color="contrastAlt">Contrast alt</Text></div>
    <div class="fill--white"><Text color="contrastDisabled">Contrast disabled</Text></div>
  </div>
  <div class="docs_row">
    <Text color="primary">Primary</Text>
    <Text color="secondary">Secondary</Text>
    <Text color="highlight">Highlight</Text>
  </div>
  <div class="docs_row">
    <Text color="success">Success</Text>
    <Text color="info">Info</Text>
    <Text color="warning">Warning</Text>
    <Text color="error">Error</Text>
  </div>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Text color="default">Default</Text>
<Text color="alt">Alt</Text>
<Text color="disabled">Disabled</Text>

<Text color="contrast">Contrast</Text>
<Text color="contrastAlt">Contrast alt</Text>
<Text color="contrastDisabled">Contrast disabled</Text>

<Text color="primary">Primary</Text>
<Text color="secondary">Secondary</Text>
<Text color="highlight">Highlight</Text>

<Text color="success">Success</Text>
<Text color="info">Info</Text>
<Text color="warning">Warning</Text>
<Text color="error">Error</Text>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<p class="text-default">Default</p>
<p class="text-alt">Alt</p>
<p class="text-disabled">Disabled</p>

<p class="text-contrast">Contrast</p>
<p class="text-contrastAlt">Contrast alt</p>
<p class="text-contrastDisabled">Contrast disabled</p>

<p class="text-primary">Primary</p>
<p class="text-secondary">Secondary</p>
<p class="text-highlight">Highlight</p>

<p class="text-success">Success</p>
<p class="text-info">Info</p>
<p class="text-warning">Warning</p>
<p class="text-error">Error</p>
```
  </TabItem>
</Tabs>
