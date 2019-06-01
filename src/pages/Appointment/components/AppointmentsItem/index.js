import React from 'react';

import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import styles from './styles';

const AppointmentsItem = ({ appointmentsItem }) => (
  <View style={styles.container}>
    <Text style={styles.repoTitle}>{`Título: ${appointmentsItem.detail}`}</Text>
    <Text style={styles.repoTitle}>{`Duração: ${appointmentsItem.hour}`}</Text>
    <Text style={styles.repoTitle}>{`Data: ${appointmentsItem.date}`}</Text>
    <Text style={styles.repoTitle}>{`Numero Demanda: ${appointmentsItem.number}`}</Text>
    <View style={styles.infoContainer}>
      {/* <View style={styles.infoContainer}>
        <Text style={styles.infoText}>{appointmentsItem.number}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>{appointmentsItem.updatedAt}</Text>
      </View> */}
    </View>
  </View>
);

AppointmentsItem.prototypes = {
  appointmentsItem: PropTypes.shape({
    detail: PropTypes.string,
    hour: PropTypes.string,
    // pagecount: PropTypes.number,
    // point: PropTypes.number,
  }).isRequired,
};

export default AppointmentsItem;
