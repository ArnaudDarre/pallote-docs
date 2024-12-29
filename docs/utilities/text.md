---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Text } from "pallote-react"

# Text

Use these utility props and classes to override the text style of an element.

## Props

### Variant

<div class="docs__block docs__block--portrait">
  <div class="docs_row grid--ai-baseline">
    <Text variant="h1 mt-0">Heading 1</Text>
    <Text variant="h2 mt-0">Heading 2</Text>
    <Text variant="h3 mt-0">Heading 3</Text>
    <Text variant="h4 mt-0">Heading 4</Text>
    <Text variant="h5 mt-0">Heading 5</Text>
    <Text variant="h6 mt-0">Heading 6</Text>
  </div>
  <div class="docs_row grid--ai-baseline">
    <Text variant="subtitle mt-0">Subtitle</Text>
    <Text variant="body mt-0">Body</Text>
    <Text variant="caption mt-0">Caption</Text>
    <Text variant="overline mt-0">Overline</Text>
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

### Align

<div class="docs__block docs__block--portrait">
  <Text align="left" className="w-100">Align left and rub whiskers on bare skin act innocent. Catto munch salmono while happily ignoring when being called terrorize the hundred-and-twenty-pound rottweiler and steal his bed, not sorry eat from dog's food.</Text>
  <Text align="center" className="w-100">Align center and stare at ceiling cough hairball on conveniently placed pants and break lamps and curl up into a ball, so get scared by sudden appearance of cucumber hack step on your keyboard while you're gaming and then turn in a circle.</Text>
  <Text align="right" className="w-100">Align right lick master's hand at first then bite because im moody chew the plant scratch my tummy actually i hate you now fight me. Sun bathe steal the warm chair right after you get up.</Text>
  <Text align="justify" className="w-100">Align justify meow in empty rooms mew mew. I love cats i am one wake up scratch humans leg for food then purr then i have a and relax lick master's hand at first then bite because im moody dismember a mouse and then regurgitate parts of it on the family room floor.</Text>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Text align="left">Left{/* content */}</Text>
<Text align="center">Center{/* content */}</Text>
<Text align="right">Right{/* content */}</Text>
<Text align="justify">Justify{/* content */}</Text>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<p class="text-left"><!-- content --></p>
<p class="text-center"><!-- content --></p>
<p class="text-right"><!-- content --></p>
<p class="text-justify"><!-- content --></p>
```
  </TabItem>
</Tabs>

### Weight

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

### Transform

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

### Underline

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

### Italic

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

### Code

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

### Color

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

## Examples

<div class="docs__block docs__block--portrait">
  <Text variant="h4" underline>Be mindful of text sizes</Text>
  <Text variant="caption" italic color="success">And colour contrast</Text>
  <Text variant="body" weight="bold">When writing content</Text>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Text variant="h4" underline>Be mindful of text sizes</Text>
<Text variant="caption" italic color="success">And colour contrast</Text>
<Text variant="body" weight="bold">When writing content</Text>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<p class="h4 text-underline">Be mindful of text sizes</p>
<p class="caption text-italic text-success">And colour contrast</p>
<p class="body text-bold">When writing content</p>
```
  </TabItem>
</Tabs>
