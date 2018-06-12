# react-native-searchbar
A React Native SearchBar

<img src='https://raw.githubusercontent.com/tong233/react-native-searchbar/master/creenshot.png'>


# Setup

Clone SearchBar.js. This library depends on [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons). Please link it by following their installation guide.

# Usage

All props are optional except height.

```js
import React, { Component } from 'react';
import SearchBar from 'react-native-material-design-searchbar';

export default class ExampleComponent extends Component {
  state = {
    value = ''
  }
  render() {
    return (
      <SearchBar
        value={this.state.value}
        onFocus={() => console.log('On Focus')}
        onBlur={() => console.log('On Blur')}
        placeholder="search"
        onChangeText={value => this.setState({ value })}
      />
    );
  }
};

```

# Available Props
- [TextInput props](https://facebook.github.io/react-native/docs/textinput.html) : SearchBar inherits all the properties of the `TextInput`
- `onBackPress`: Optional function, Callback on back icon pressed
- `alwaysShowBackButton`: Optional bool, use if you want to always show the back button instead of search, default is `false`
- `iconCloseName`: Optional string, use it to customize the close icon
- `iconSearchName`: Optional string, use it to customize the search icon
- `iconBackName`: Optional string, use it to customize the back icon
- `iconCloseComponent`: Optional object, custom component for the close icon (overrides iconCloseName)
- `iconSearchComponent`: Optional object, custom component for the search icon (overrides iconSearchName)
- `iconBackComponent`: Optional object, custom component for the back icon (overrides iconBackName)
- `iconColor`: Optional string, use it to define a different padding size, default is `#737373`
- `containerPadding`: Optional string, use it to define a different padding size, default is `5`
- `searchBarStyle`: Optional string, use it to pass your style to the containing `View`
- `style`: Optional string, use it to pass your style to the `TextInput`


# Contributing

Contributions are welcome.

# Origin

react-native-searchbar was inspired by [react-native-material-design-searchbar](https://github.com/ananddayalan/react-native-material-design-searchbar) Thanks ananddayalan.

# LICENSE

MIT

