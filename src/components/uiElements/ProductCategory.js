import React from "react";
import {View, Image, Text, FlatList, TouchableOpacity} from 'react-native';
import {TextStyles} from "../../styles/TextStyles";
import CardView from "./CardView";
import ProductItem from "./ProductItem";

const ProductCategory = (props) => {
    const styles = {
        container:{
            marginTop: 10
        },
        containerTitle:{
            flexDirection: 'row',
            paddingHorizontal: 5
        }

    };

    this.renderProducts = function ({item, index}) {
        return (
          <ProductItem
            onPress={props.onPress}
            key={item.id}
            data={item}/>
        )
    };


    return (
      <View style={styles.container}>
          <View style={styles.containerTitle}>
              <Text style={[TextStyles.textBlack14Bold, {flex: 1}]}>{props.catogoryTitle}</Text>
              <TouchableOpacity onPress={props.onShowAll}>
                  <Text style={[TextStyles.textRed14Bold]}>See All</Text>
              </TouchableOpacity>
          </View>
          {props.data.length > 0 ?
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{}}
              data={props.data}
              renderItem={this.renderProducts.bind(this)}/>:
            <Text style={[TextStyles.textBlack12Normal, {flex: 1, textAlign: 'center', paddingVertical: 10}]}>NO DATA</Text>
          }
      </View>

    )
}
export default ProductCategory
