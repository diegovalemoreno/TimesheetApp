import React, { Component } from 'react';
import {
  TouchableOpacity, AsyncStorage, View, StatusBar, Text,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import styles from './styles';

class HeaderRight extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  };

  signOut = async () => {
    const { navigation } = this.props;
    await AsyncStorage.clear();
    navigation.navigate('Welcome');
  };

  render() {
    const { title } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.left} />
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={this.signOut}>
          <Icon name="exchange" size={16} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default HeaderRight;
