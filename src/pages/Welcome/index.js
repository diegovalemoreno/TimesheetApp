import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import api from '../../services/api';
import styles from './styles';

export default class Welcome extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    username: '',
    loading: false,
    errorMessage: null,
  };

  checkUserExists = async (username) => {
    const user = await api.get(`/users/${username}`);
    return user;
  };

  saveUser = async (username) => {
    await AsyncStorage.setItem('@Ourbooks:username', username);
    // await AsyncStorage.setItem('@Ourbooks:password', password);
    // await AsyncStorage.setItem('@Ourbooks:token', token);
  };

  // forgotPassword = () => {
  //   const { navigation } = this.props;
  //   navigation.navigate('ForgotPassword');
  // };

  signIn = async () => {
    const { username } = this.state;

    if (username.length === 0) return;

    this.setState({ loading: true });

    try {
      await this.checkUserExists(username);
      await this.saveUser(username);
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'User' })],
      });
      this.props.navigation.dispatch(resetAction);
    } catch (err) {
      this.setState({ loading: false, errorMessage: 'Usuário não existe' });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Timesheet</Text>
        <Text style={styles.text}>Para continuar precisamos que voce informe seu usuario.</Text>
        {!!this.state.errorMessage && <Text style={styles.error}>Usuário não eeeexiste</Text>}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu usuário"
            underlineColorAndroid="rgba(0, 0, 0, 0)"
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
          />

          <TouchableOpacity style={styles.button} onPress={this.signIn}>
            {this.state.loading ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <Text style={styles.buttonText}>Entrar</Text>
            )}
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => {}}>
            <View>
              <Text style={styles.buttonForgotPassword}>Esqueceu a senha</Text>
            </View>
          </TouchableOpacity> */}
        </View>
      </View>
    );
  }
}
