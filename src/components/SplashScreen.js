import React, {PureComponent} from 'react'
import {
    View,
    Text
} from 'react-native'
import {Colors} from "../internal/utils/Colors";

export default class SplashScreen extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        setTimeout(() => this.props.navigation.navigate('Dashboard'), 3000);
    }



    render() {
        return (
          <View style={{flex: 1, backgroundColor: Colors.splash, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 30, fontWeight: 'bold'}}>LOGO HERE</Text>
          </View>
        )
    }
}
