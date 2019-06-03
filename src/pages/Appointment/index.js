import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  AsyncStorage,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header';
import api from '../../services/api';
import styles from './styles';
import AppointmentsItem from './components/AppointmentsItem';

// import styles from './styles';

const TabIcon = ({ tintColor }) => <Icon name="book" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default class Appointment extends Component {
  static navigationOptions = {
    title: 'Meus apontamentos',
    tabBarIcon: ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />,
  };

  state = {
    data: [],
    loading: true,
    refreshing: false,
    id: '',
  };

  async componentDidMount() {
    this.loadAppointments();
  }

  loadAppointments = async () => {
    this.setState({ refreshing: true });

    const id = await AsyncStorage.getItem('@Timesheet:id');
    const response = await api.get(`/users/${id}/appointment`);
    // response.data.map(async (item) => {
    this.setState({ data: response.data, id });
    // });

    this.setState({
      refreshing: false,
      loading: false,
    });
  };

  renderListItem = ({ item }) => <AppointmentsItem appointmentsItem={item} />;

  renderList = () => {
    const { data } = this.state;
    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item._id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadAppointments}
        refreshing={this.state.refreshing}
      />
    );
  };

  insertWithMoc = async () => {
    // const _id = await AsyncStorage.getItem('@Timesheet:id');
    console.tron.log(this.state.id);
    const response = await api
      .post(`/users/${this.state.id}/appointment`, {
        date: '2019-05-29',
        hour: 2,
        number: 1512,
        detail: 'Registro automático via RN',
      })
      .then((response) => {
        this.loadAppointments();
      })
      .catch((error) => {
        console.log(error);
      });

    this.loadAppointments();
  };

  render() {
    const { loading } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Header title="Meus apontamentos" />
          {loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
        </View>
        <View style={styles.formBaixo}>
          <TouchableOpacity style={styles.button} onPress={this.insertWithMoc}>
            <Text style={styles.buttonText}>Registrar apontamento</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
