import React from "react";
import {View, Image, Text, TouchableOpacity} from 'react-native';
import CardView from "./CardView";
import {TextStyles} from "../../styles/TextStyles";

const CategoryItemDetail = (props) => {
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
        },
        containerDescription: {
            position: 'absolute',
            top: 0,
            left: 30,
            bottom: 0,
            justifyContent: 'center'
        }

    };

    return (
      <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
          <CardView style={styles.container}>
              <Image
                style={styles.image}
                source={{uri: props.data.thumbnail}}/>
              <View style={styles.containerDescription}>
                  <Text style={[TextStyles.textBlack14Bold]}>{props.data.category}</Text>
                  <Text style={[TextStyles.textBlack12Normal]}>Items: {props.data.items}</Text>
              </View>
          </CardView>
      </TouchableOpacity>
    )
}
export default CategoryItemDetail
