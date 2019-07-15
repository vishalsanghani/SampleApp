import React from "react";
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {TextStyles} from "../../styles/TextStyles";
import CardView from "./CardView";

const ProductItem = (props) => {
    const {discount} = props.data
    const styles = {
        container: {
            alignItems: 'center',
            flexDirection: 'column',
            width: 170,
            marginRight: 10,
            marginTop: 10
        },
        image: {
            height: 200,
            width: 170,
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
      <CardView style={[styles.container, props.style]}>
          <TouchableOpacity onPress={props.onPress}>
              <Image style={[styles.image, props.imageStyle]} source={{uri: props.data ? props.data.thumbnail:''}}/>
              <View style={{flexDirection: 'row', padding: 5}}>
                  <Text style={[TextStyles.textBlack12Bold, {flex: 1, marginRight: 5}]}>{props.data.title}</Text>
                  <Text style={[TextStyles.textRed12Bold]}>{props.data.cost} INR</Text>
              </View>
              <View style={styles.offerContainer}>
                  <Text style={[TextStyles.textWhite8Bold]}>{discount+'%\nOff'}</Text>
              </View>
          </TouchableOpacity>
      </CardView>

    )
}
export default ProductItem
