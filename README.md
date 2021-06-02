# Welcome to jixic 🤖

jixic is a custom template for react-native web and app both

### How to use?

    npx react-native init your-project-name --template https://github.com/virendrapsamrat/jixic

for android

    npx react-native run-android

for ios

    cd ios
    pod install
    cd ..
    npx react-native run-ios


for web

    yarn install
    yarn web

for react-native-vector-icons linking

    npx react-native link

also if you get "Copy Pods Resources" issue in react-native-vector-icons in ios follow this
xcode => Build phases => Copy Bundle Resources => Remove all vector icons fonts

### Included libraries

- [react-navigation v5](https://reactnavigation.org/docs/getting-started)
- [axios](https://www.npmjs.com/package/axios)
- [react-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons)
- [react-native-responsive-screen](https://www.npmjs.com/package/react-native-responsive-screen)
- [react-native-keyboard-aware-scroll-view](https://github.com/APSL/react-native-keyboard-aware-scroll-view)
- [@react-native-community/async-storage](https://www.npmjs.com/package/@react-native-community/async-storage)

### File structure

Files structure is from [React-Native boilerplate](https://marketplace.visualstudio.com/items?itemName=rishikeshgaikar.react-native-boilerplate)


### To-Do

- [ ] Add more custom components

### Known Issues

None. If you find something, please report it by opening [new issue](https://github.com/virendrapsamrat/jixic/issues/new).
