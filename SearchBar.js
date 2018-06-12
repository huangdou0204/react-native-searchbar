import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { TextInput, StyleSheet, View, TouchableOpacity, ViewPropTypes } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard'

const inputHeight = 32
const containerPadding = 5

export default class SearchBar extends PureComponent {
  static propTypes = {
    ...TextInput.propTypes,
    inputHeight: PropTypes.number,
    containerPadding: PropTypes.number,
    iconPadding: PropTypes.number,
    iconSize: PropTypes.number,
    containerStyle: ViewPropTypes.style,
    searchBarStyle: ViewPropTypes.style,
    iconCloseComponent: PropTypes.element,
    iconSearchComponent: PropTypes.element,
    iconBackComponent: PropTypes.element,
    iconCloseName: PropTypes.string,
    iconSearchName: PropTypes.string,
    iconBackName: PropTypes.string,
    iconColor: PropTypes.string,
    onBackPress: PropTypes.func,
    alwaysShowBackButton: PropTypes.bool
  }

  static defaultProps = {
    ...TextInput.defaultProps,
    iconCloseName: 'md-close',
    iconSearchName: 'ios-search',
    iconBackName: 'md-arrow-back',
    returnKeyType: 'search',
    underlineColorAndroid: 'transparent',
    iconColor: '#666',
    alwaysShowBackButton: false,
    inputHeight: inputHeight,
    containerPadding: containerPadding,
    iconPadding: 10,
    iconSize: 16
  }

  state = {
    isOnFocus: false
  }

  _onClose = () => {
    this.props.onChangeText('')
    this.props.onClose && this.props.onClose()
  }

  _onFocus = () => {
    this.setState({ isOnFocus: true })
    this.props.onFocus && this.props.onFocus()
  }

  _onBlur = () => {
    this.setState({ isOnFocus: false })
    this.props.onBlur && this.props.onBlur()
    this._dismissKeyboard()
  }

  _dismissKeyboard = () => {
    dismissKeyboard()
  }

  _backPressed = () => {
    dismissKeyboard()
    this.props.onBackPress && this.props.onBackPress()
  }

  render() {
    const {
      inputHeight,
      containerPadding,
      containerStyle,
      searchBarStyle,
      style,
      iconColor,
      iconCloseComponent,
      iconSearchComponent,
      iconBackComponent,
      iconBackName,
      iconSearchName,
      iconCloseName,
      onBlur,
      onFocus,
      iconPadding,
      iconSize,
      ...rest
    } = this.props

    return (
      <View
        onStartShouldSetResponder={this._dismissKeyboard}
        style={[styles.container, containerStyle, { padding: containerPadding }]}
      >
        <View
          style={[
            styles.searchBar,
            {
              borderRadius: inputHeight * 0.5,
              paddingLeft: iconPadding
            },
            searchBarStyle
          ]}
        >
          {this.state.isOnFocus || this.props.alwaysShowBackButton ? (
            <TouchableOpacity onPress={this._backPressed}>
              {iconBackComponent || <Icon name={iconBackName} size={iconSize} color={iconColor} />}
            </TouchableOpacity>
          ) : (
            iconSearchComponent || <Icon name={iconSearchName} size={iconSize} color={iconColor} />
          )}

          <TextInput
            onFocus={this._onFocus}
            onBlur={this._onBlur}
            style={[
              styles.searchBarInput,
              {
                height: inputHeight,
                paddingLeft: iconPadding
              },
              style
            ]}
            {...rest}
          />

          {this.state.isOnFocus && this.props.value ? (
            <TouchableOpacity onPress={this._onClose}>
              {iconCloseComponent || (
                <Icon
                  style={{ paddingRight: iconPadding }}
                  name={iconCloseName}
                  size={iconSize}
                  color={iconColor}
                />
              )}
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    borderColor: '#444'
  },
  searchBarInput: {
    flex: 1,
    paddingVertical: 5,
    color: '#333',
    fontSize: 13
  }
})
