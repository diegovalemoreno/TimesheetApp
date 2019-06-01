import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View, AsyncStorage, ActivityIndicator, FlatList,
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

export default class Books extends Component {
  static navigationOptions = {
    title: 'Meus apontamentos',
    tabBarIcon: ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />,
  };

  state = {
    data: [],
    loading: true,
    refreshing: false,
  };

  async componentDidMount() {
    this.loadAppointments();
  }

  loadAppointments = async () => {
    this.setState({ refreshing: true });

    const _id = await AsyncStorage.getItem('@Timesheet:id');
    const response = await api.get(`/users/${_id}/appointment`);

    // response.data.map(async (item) => {
    this.setState({ data: response.data });
    // });

    console.tron.log(this.state.data);
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

  render() {
    const { loading } = this.state;
    return (
      <View style={styles.container}>
        <Header title="Meus apontamentos" />
        {loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}
