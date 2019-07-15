import React from "react";
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {TextStyles} from "../../styles/TextStyles";
import CategoryItem from "./CatogoryItem";

const CategoryList = (props) => {
    const styles = {
        containerTitle:{
            flexDirection: 'row',
            marginTop: 10,
            paddingHorizontal: 5
        }

    };

    this.renderCategory = function ({item, index}) {
        return (
          <CategoryItem
            onPress={props.onPress}
            key={item.id}
            data={item}/>
        )
    };


    return (
      <View style={{marginTop: 10}}>
          <View style={{flexDirection: 'column'}}>
              <View style={styles.containerTitle}>
                  <Text style={[TextStyles.textBlack14Bold, {flex: 1}]}>Categories</Text>
                  <TouchableOpacity onPress={props.onShowAll}>
                      <Text style={[TextStyles.textRed14Bold]}>See All</Text>
                  </TouchableOpacity>
              </View>
              <FlatList
                horizontal
                style={{marginTop: 10}}
                showsHorizontalScrollIndicator={false}
                data={props.data}
                renderItem={this.renderCategory.bind(this)}/>
          </View>
      </View>

    )
}
export default CategoryList
