---
sidebar_position: 2
---

# Usage

## Pallote React

After installing `pallote-react`, you can import any component of the design system. See [Components](/docs/components) for a full list of available components.

```jsx
import React from 'react';
import { Button } from 'palotte-react';

export default function ButtonTest() {
  return <Button>Hello Pallote</Button>;
}
```

## Pallote CSS

After installing `pallote-css`, import the global style file in your main SASS file.

```css
@import '~/node_modules/pallote-css/dist/pallote.scss';
```

