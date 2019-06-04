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
    id: '',
    loading: false,
    errorMessage: null,
  };

  checkUserExists = async (username) => {
    const user = await api.get(`/users/${username}`);

    return user.data[0];
  };

  saveUser = async (username, id) => {
    await AsyncStorage.setItem('@Timesheet:username', username);
    await AsyncStorage.setItem('@Timesheet:id', id);
  };

  signIn = async () => {
    const { username } = this.state;
    const { navigation } = this.props;
    this.setState({ loading: true });
    try {
      const response = await this.checkUserExists(username);
      await this.saveUser(username, response._id);
      navigation.navigate('Appointment');
    } catch (err) {
      this.setState({ loading: false });
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Timesheet</Text>
        <Text style={styles.text}>Para continuar precisamos que voce informe seu usuario.</Text>
        {!!this.state.errorMessage && <Text style={styles.error}>Usuário não existe</Text>}
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
