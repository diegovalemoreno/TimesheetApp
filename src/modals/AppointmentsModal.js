import React, { Component } from 'react';

import { View, Modal } from 'react-native';
import { Button, Text } from 'react-native-elements';
import PropTypes from 'prop-types';
// import { Container } from './styles';
import { metrics, colors } from '~/styles';

class AppointmentsModal extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    AppointmentsModalisOpen: true,
  };

  CloseModal = () => {
    const { navigation } = this.props;
    this.setState({ AppointmentsModalisOpen: false });
    navigation.navigate('Appointment');
  };

  render() {
    const { modalStyle, constainerStyle, buttonContainerStyle } = styles;

    return (
      <Modal
        transparent
        animationType="slide"
        visible={this.state.AppointmentsModalisOpen}
        onRequestClose={() => this.CloseModal()}
      >
        <View style={modalStyle}>
          <View style={constainerStyle}>
            <View style={buttonContainerStyle}>
              <Button
                raised
                icon={{ name: 'close' }}
                title="Fechar"
                backgroundColor={colors.secundary}
                onPress={() => this.CloseModal()}
              />
            </View>
            <Text>Teste com modal</Text>
          </View>
        </View>
      </Modal>
    );
  }
}

const marginPerc = 0.05;

const styles = {
  modalStyle: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  constainerStyle: {
    flex: 1,
    marginTop: metrics.screenHeight * marginPerc,
    marginBottom: metrics.screenHeight * marginPerc,
    marginLeft: metrics.screenWidth * marginPerc,
    marginRight: metrics.screenWidth * marginPerc,
    backgroundColor: colors.white,
  },
  buttonContainerStyle: {
    paddingBottom: 10,
  },
};

export default AppointmentsModal;
