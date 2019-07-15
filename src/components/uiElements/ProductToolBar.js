import React from "react";
import {View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import {Colors} from "../../internal/utils/Colors";

const ProductToolBar = (props) => {
    const styles = {
        container: {
            marginBottom: 10,
            borderRadius: 3
        },
        image: {
            height: 100,
            flex: 1,
            width: null,
            borderRadius: 3
        }

    };

    return (
      <View style={{padding: 5, backgroundColor: Colors.red}}>
          <View style={{flexDirection: 'row'}}>
              <Entypo name={'list'} size={30} color={Colors.white}/>
              <Entypo name={'grid'} size={30} color={Colors.white}/>
          </View>
      </View>
    )
}
export default ProductToolBar
