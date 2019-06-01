import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import createNavigator from '~/routes';
import '~/config/ReactotronConfig';

class App extends Component {
  state = {
    userCheck: false,
    userLogged: false,
  };

  async componentDidMount() {
    // await AsyncStorage.clear();
    const username = await AsyncStorage.getItem('@Timesheet:username');
    this.appLoaded(username);
  }

  appLoaded = (username) => {
    this.setState({
      userCheck: true,
      userLogged: !!username,
    });
  };

  render() {
    if (!this.state.userCheck) return null;

    const Routes = createNavigator(this.state.userLogged);
    return <Routes />;
  }
}

export default App;
