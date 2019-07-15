import React from "react";
import {Image, Text, TouchableOpacity} from 'react-native';
import CardView from "./CardView";
import {TextStyles} from "../../styles/TextStyles";

const CategoryItem = (props) => {
    const {category, image} = props.data
    const styles = {
        container: {
            alignItems: 'center',
            flexDirection: 'column',
            marginRight: 10,
            padding: 10,
        },
        image: {
            height: 80,
            width: 80,
            borderRadius: 80 / 2,
        }

    };

    return (
      <TouchableOpacity onPress={props.onPress}>
          <CardView style={styles.container}>
              <Image style={styles.image} source={{uri: image}}/>
              <Text style={[TextStyles.textBlack12Bold, {marginTop: 5}]}>{category}</Text>
          </CardView>
      </TouchableOpacity>

    )
}
export default CategoryItem
