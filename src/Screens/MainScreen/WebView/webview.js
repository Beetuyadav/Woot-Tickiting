import React, { Component } from 'react';
import { WebView, ActivityIndicator,Platform } from 'react-native';

import { Toolbar } from 'react-native-material-ui';

export default class WebViewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
      let titleName;
      titleName = 'WOBOT TICKETING';
    
    return {
      header: (
        <Toolbar
          leftElement="arrow-back"
          style={{
            container: {
              backgroundColor:'green',
              ...Platform.select({
                ios: {
                  paddingTop: 20,
                  height: 64,
                },
              }),
            },
          }}
          centerElement={titleName}
          onLeftElementPress={() => navigation.goBack()}
          rightElement={{ actions: ['', 'clear'] }}
          onRightElementPress={({ action }) => {
            if (action === 'clear') navigation.goBack();
          }}
        />
      ),
    };
  };

  _loadingView = () => <ActivityIndicator size="large" style={{ flex: 1 }} />;

  render() {
      console.warn('URLDTAA____',url);
    const { navigation: {getparam} } = this.props;
    
    return (
      <WebView
        source={{uri: `${getparam('url')}`}}
        style={{ backgroundColor: '#fff', flex: 1 }}
        renderLoading={() => this._loadingView()}
        startInLoadingState
        onNavigationStateChange={event => {
          // remove this code
          this.props = event.action;
        }}
      />
    );
  }
}


