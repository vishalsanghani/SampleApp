import React from "react";
import {View, Dimensions} from 'react-native';
import ProductItem from "./ProductItem";

const {width} = Dimensions.get('window');

const ProductItemGrid = (props) => {
    const styles = {};
    const tmpWidth = (width - 40) / 2;
    return (
      <View style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between'
      }}>
          {props.data.map((item, index) => {
                return (
                  <ProductItem
                    key={item.id}
                    data={item}
                    imageStyle={{height: tmpWidth, width: tmpWidth}}
                    style={{
                        margin: 0,
                        marginRight: 0,
                        marginTop: 20,
                        width: tmpWidth, backgroundColor: 'white'
                    }}/>
                )
            }
          )}
      </View>
    )
}
export default ProductItemGrid
