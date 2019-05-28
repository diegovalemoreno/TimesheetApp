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
import PropTypes from 'prop-types';
// import api from '../../services/api';
import styles from './styles';

export default class Welcome extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };
  state = {
    user: '',
    token: '',
    loading: false,
     error: false,
  }

  // checkUserExists = async (user, password) => {
  //   user = await api.post('/sessions/', {
  //     user,
  //     password,
  //   });
  //   return user;
  // }

  // saveUser = async (user, password, token) => {
  //   await AsyncStorage.setItem('@Ourbooks:user', user);
  //   await AsyncStorage.setItem('@Ourbooks:password', password);
  //   await AsyncStorage.setItem('@Ourbooks:token', token);
  // }

  // forgotPassword = () => {
  //   const { navigation } = this.props;
  //   navigation.navigate('ForgotPassword');
  // };

  signIn = async () => {
    const { user } = this.state;
    const { navigation } = this.props;
    this.setState({ loading: true });
    try {
      // const response = await this.checkUserExists(user);
      // await this.saveUser(user, response.data.token);

      navigation.navigate('Appointment');
    } catch (err) {
      this.setState({ loading: false });
      this.setState({ error: true });
    }
  }

  render() {
    const { user, loading, error } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>
          Timesheet
        </Text>
        <Text style={styles.text}>
          Para continuar precisamos que voce informe seu usuario.
        </Text>
        { error && <Text style={styles.error}>Usuario inexiste</Text>}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu usuario"
            underlineColorAndroid="transparent"
            value={user}
            onChangeText={text => this.setState({ user: text })}
          />

          
          <TouchableOpacity style={styles.button} onPress={this.signIn}>
            {loading ? (
              <ActivityIndicator size="small" color="#FFF" />)
              : (<Text style={styles.buttonText}>Entrar</Text>
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