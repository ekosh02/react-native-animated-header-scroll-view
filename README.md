# @ekosh02/react-native-animated-header-scroll-view

<p>
  <img src="https://raw.githubusercontent.com/ekosh02/react-native-animated-header-scroll-view/main/assets/demo-ios.gif" height="500" alt="Demo iOS" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://raw.githubusercontent.com/ekosh02/react-native-animated-header-scroll-view/main/assets/demo-android.gif" height="500" alt="Demo Android" />
</p>

`@ekosh02/react-native-animated-header-scroll-view` is a custom React Native component that simplifies the creation of animated scroll views with dynamic headers. It provides smooth and responsive animations based on the scroll position and extends the standard ScrollView without relying on external libraries like reanimated or gesture-handler

## Installation

Install using npm:

```bash
npm install @ekosh02/react-native-animated-header-scroll-view
```

Or using yarn:

```bash
yarn add @ekosh02/react-native-animated-header-scroll-view
```

## Features

- Simplifies the creation of animated headers in React Native applications.
- Smooth scaling and translation animations based on scroll position.
- Automatically handles header transitions with fade-in and fade-out effects.
- No external dependencies like react-native-reanimated or react-native-gesture-handler.

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

## Component Props

The `AnimatedScrollView` component accepts the following props:

| Prop                      | Type              | Description                                                                                |
| ------------------------- | ----------------- | ------------------------------------------------------------------------------------------ |
| `topHeaderComponent`      | `React.ReactNode` | Component displayed as the main header before scrolling.                                   |
| `scrolledHeaderComponent` | `React.ReactNode` | Component displayed as the header after scrolling past a threshold.                        |
| `contentView`             | `React.ReactNode` | Content inside the scroll view that will be animated with scaling and translation effects. |
| `children`                | `React.ReactNode` | Regular static content inside the scroll view.                                             |
| `...props`                | `ScrollViewProps` | Any additional props passed to the underlying `ScrollView`.                                |

## Component Behavior

## Component Behavior

The `AnimatedScrollView` component automatically provides smooth transitions and animations for the header and content:

| Behavior          | Description                                                                                                       |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| Header Transition | Smooth fade transitions between `topHeaderComponent` and `scrolledHeaderComponent`, triggered by scroll position. |
| Content Scaling   | The `contentView` element scales down and translates upwards when the user scrolls, creating a parallax effect.   |
| Scroll Tracking   | Scroll position is dynamically tracked, triggering appropriate animations and header changes.                     |

The header components fade in and fade out smoothly using `Animated.timing`, based on the scroll position, which enhances the user experience.

## Important Information

@ekosh02/react-native-animated-header-scroll-view does not manage safe areas automatically, as it does not use react-native-safe-area-context. You'll need to manually handle the top and bottom indents for safe zones using styles or other approaches. In future versions, we plan to integrate automatic safe area handling to simplify layout management.

## Contribution Guidelines

We welcome contributions! Here’s how you can help:

- Report issues or request features by opening an [issue](https://github.com/ekosh02/react-native-animated-header-scroll-view/issues).
- Submit pull requests to suggest fixes or enhancements.

Before contributing, please ensure your code follows the project's style and passes all tests.

## License

This project is licensed under the [ISC License](https://github.com/ekosh02/react-native-animated-header-scroll-view/blob/main/LICENSE).
