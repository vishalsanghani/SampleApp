import React from "react";
import {FlatList} from 'react-native';
import ProductItemRow from "./ProductItemRow";

const ProductList = (props) => {
    const styles = {};

    this.renderProducts = function ({item, index}) {
        return (
          <ProductItemRow
            data={item}
            onPress={props.onPress}/>
        )
    };

    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{}}
        data={props.data}
        extraData={this.state}
        renderItem={this.renderProducts.bind(this)}/>
    )
}
export default ProductList
