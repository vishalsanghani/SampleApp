import React from "react";
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {TextStyles} from "../../styles/TextStyles";
import CardView from "./CardView";
import Entypo from 'react-native-vector-icons/Entypo'
import {Colors} from "../../internal/utils/Colors";

const ProductItemRow = (props) => {
    const {title, cost, review, discount} = props.data
    const styles = {
        container: {
            flex: 1,
            flexDirection: 'row',
            marginTop: 10
        },
        image: {
            height: 100,
            width: 100,
        },
        offerContainer:{
            padding: 3,
            position: 'absolute',
            top:0,
            right: 10,
            backgroundColor: 'red'
        }

    };
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
          <CardView style={[styles.container, props.style]}>
              <Image style={[styles.image, props.imageStyle]} source={{uri: props.data ? props.data.thumbnail : ''}}/>
              <View style={{padding: 5, marginLeft: 10}}>
                  <Text style={[TextStyles.textBlack12Bold]}>{title}</Text>
                  <Text style={[TextStyles.textRed12Bold]}>{cost} INR</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Entypo name={'star'} size={10} color={Colors.yellow}/>
                  <Text style={[TextStyles.textBlack12Normal, {color: Colors.yellow}]}>{review}</Text>
                  </View>
              </View>
              <View style={styles.offerContainer}>
                  <Text style={[TextStyles.textWhite8Bold]}>{discount+'%\nOff'}</Text>
              </View>
          </CardView>
      </TouchableOpacity>

    )
}
export default ProductItemRow
