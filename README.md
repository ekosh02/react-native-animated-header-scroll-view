# @ekosh02/react-native-animated-header-scroll-view

This is a custom React Native component that simplifies the creation of animated scroll views with dynamic headers. It provides smooth and responsive animations based on the scroll position and extends the standard ScrollView without relying on external libraries like reanimated or gesture-handler

<p>
  <img src="https://raw.githubusercontent.com/ekosh02/react-native-animated-header-scroll-view/main/assets/demo-ios.gif" height="500" alt="demo-ios" />
</p>

&nbsp;&nbsp;&nbsp;

## Installation

Install using npm:

```bash
npm install @ekosh02/react-native-animated-header-scroll-view
```

Or using yarn:

```bash
yarn add @ekosh02/react-native-animated-header-scroll-view
```

&nbsp;&nbsp;&nbsp;

## Features

- Simplifies the creation of animated headers in React Native applications.
- Smooth scaling and translation animations based on scroll position.
- Automatically handles header transitions with fade-in and fade-out effects.
- No external dependencies like react-native-reanimated or react-native-gesture-handler.

&nbsp;&nbsp;&nbsp;

## Usage Example

Here's an example of how to use `@ekosh02/react-native-animated-header-scroll-view` in a React Native project:

```tsx
import { AnimatedScrollView } from '@ekosh02/react-native-animated-header-scroll-view'
import { Text, View } from 'react-native'

const ExampleScreen = () => {
  return (
    <AnimatedScrollView
      topHeaderComponent={
        <View>
          <Text>Top Header</Text>
        </View>
      }
      scrolledHeaderComponent={
        <View>
          <Text>Scrolled Header</Text>
        </View>
      }
      contentView={
        <View>
          <Text>Animated Content</Text>
        </View>
      }
    >
      <View>
        <Text>Static child content goes here</Text>
      </View>
    </AnimatedScrollView>
  )
}

export default ExampleScreen
```

&nbsp;&nbsp;&nbsp;

## Component Props

The `AnimatedScrollView` component accepts the following props:

| Prop                      | Type              | Description                                                                                                                                                                   |
| ------------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `topHeaderComponent`      | `React.ReactNode` | Component displayed as the main header before scrolling.                                                                                                                      |
| `scrolledHeaderComponent` | `React.ReactNode` | Component displayed as the header after scrolling past a threshold.                                                                                                           |
| `contentView`             | `React.ReactNode` | Content inside the scroll view that will be animated with scaling and translation effects.                                                                                    |
| `children`                | `React.ReactNode` | Regular static content inside the scroll view.                                                                                                                                |
| `scaleMin`                | `number`          | Controls how much the ContentView shrinks during the scroll animation. For example, scaleMin={0.8} means the ContentView shrinks to 80% of its original size while scrolling. |
| `...props`                | `ScrollViewProps` | Any additional props passed to the underlying `ScrollView`.                                                                                                                   |

&nbsp;&nbsp;&nbsp;

## Component Behavior

The `AnimatedScrollView` component automatically provides smooth transitions and animations for the header and content:

| Behavior          | Description                                                                                                       |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| Header Transition | Smooth fade transitions between `topHeaderComponent` and `scrolledHeaderComponent`, triggered by scroll position. |
| Content Scaling   | The `contentView` element scales down and translates upwards when the user scrolls, creating a parallax effect.   |
| Scroll Tracking   | Scroll position is dynamically tracked, triggering appropriate animations and header changes.                     |

&nbsp;&nbsp;&nbsp;

## Important Information

@ekosh02/react-native-animated-header-scroll-view does not manage safe areas automatically, as it does not use react-native-safe-area-context. You'll need to manually handle the top and bottom indents for safe zones using styles or other approaches. In future versions, we plan to integrate automatic safe area handling to simplify layout management.

&nbsp;&nbsp;&nbsp;

## Image Scaling Issue

Using scaleMin = 0.7 in ContentView may cause empty spaces around the image due to reduced width.

<p>
  <img src="https://raw.githubusercontent.com/ekosh02/react-native-animated-header-scroll-view/main/assets/demo-ios-with-scaling-issue.gif" height="300" alt="demo-ios-with-scaling-issue" />
</p>

To fix сalculate the initial image width from screen width and scale to avoid gaps:

1. Get the screen width using Dimensions.get("window").width.
2. Calculate INITIAL_WIDTH by dividing the screen width by SCALE_AT_MIN.
3. Apply INITIAL_WIDTH to your image or content in ContentView to ensure it scales correctly.

```tsx
import { Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width
const SCALE_AT_MIN = 0.7
const INITIAL_WIDTH = screenWidth / SCALE_AT_MIN
```

&nbsp;&nbsp;&nbsp;

## Contribution Guidelines

We welcome contributions! Here’s how you can help:

- Report issues or request features by opening an [issue](https://github.com/ekosh02/react-native-animated-header-scroll-view/issues).
- Submit pull requests to suggest fixes or enhancements.

Before contributing, please ensure your code follows the project's style and passes all tests.

&nbsp;&nbsp;&nbsp;

## License

This project is licensed under the [ISC License](https://github.com/ekosh02/react-native-animated-header-scroll-view/blob/main/LICENSE).
