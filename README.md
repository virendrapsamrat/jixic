# jixic 🤖

**jixic** is a powerful custom React Native template designed to bootstrap your cross-platform applications with ease. It provides out-of-the-box support for **Android**, **iOS**, and **Web**, allowing you to build truly universal apps from a single codebase.

## 🚀 Features

- **Cross-Platform**: Run on iOS, Android, and Web seamlessly.
- **Navigation**: Pre-configured with React Navigation v5.
- **State Management**: Redux boilerplate included (inferred structure).
- **Web Support**: Powered by React Native Web and Webpack 5.
- **Linting & Testing**: ESLint and Jest configurations ready to use.
- **Responsive Layouts**: Utilities for responsive screen designs.

## 🛠 Tech Stack

- **React Native**: 0.75.2
- **React**: 17.0.1
- **Bundler**: Webpack 5 (for Web)
- **Navigation**: React Navigation v5
- **Icons**: react-native-vector-icons

## 📂 Project Structure

Verified repository structure:

```
root
├── template.config.js       # React Native CLI init config
├── script.js                # Post-init welcome script
└── template/                # Project boilerplate
    ├── app/
    │   ├── src/
    │   │   ├── components/  # Reusable UI components
    │   │   ├── scenes/      # Application screens
    │   │   ├── redux/       # State management
    │   │   ├── Routes.js    # Navigation setup
    │   │   └── Styles.js    # Shared styles
    │   └── res/             # Resources (images, strings, etc.)
    ├── index.js             # Mobile entry point
    ├── index.web.js         # Web entry point
    └── webpack.config.js    # Webpack configuration
```

## 🏁 Getting Started

### Installation

Initialize a new project using this template:

```bash
npx react-native init MyApp --template https://github.com/virendrapsamrat/jixic
cd MyApp
```

### Running the App

**Android**
```bash
npx react-native run-android
```

**iOS**
```bash
cd ios
pod install
cd ..
npx react-native run-ios
```

**Web**
```bash
yarn install
yarn web
```

## 📦 Included Libraries

- [react-navigation v5](https://reactnavigation.org/docs/getting-started)
- [axios](https://www.npmjs.com/package/axios)
- [react-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons)
- [react-native-responsive-screen](https://www.npmjs.com/package/react-native-responsive-screen)
- [react-native-keyboard-aware-scroll-view](https://github.com/APSL/react-native-keyboard-aware-scroll-view)
- [@react-native-community/async-storage](https://www.npmjs.com/package/@react-native-community/async-storage)

## 🔧 Troubleshooting

### React Native Vector Icons on iOS
If you encounter the "Copy Pods Resources" issue:
1. Open Xcode.
2. Go to **Build Phases** > **Copy Bundle Resources**.
3. Remove all `react-native-vector-icons` fonts from the list.
4. Rebuild the project.

## 🐛 Known Issues

None currently reported. Found a bug? [Open a new issue](https://github.com/virendrapsamrat/jixic/issues/new).

---
*Generated with ❤️ by the jixic team*
