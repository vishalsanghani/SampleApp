import React, {PureComponent} from 'react'
import {
    FlatList,
    StyleSheet,
} from 'react-native'
import {connect} from "react-redux";
import CategoryItemDetail from "./uiElements/CategoryItemDetail";

class CategoryListing extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            categoryList: props.categoryList
        };
    }

    componentDidMount() {
    }


    componentWillUnmount() {

    }

    renderCategories({item, index}) {
        return (
          <CategoryItemDetail
            data={item}
            onPress={()=>{this.props.navigation.navigate('ProductListing')}}
            key={item.id}/>
        )

    }

    render() {
        return (
          <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.container}
            data={this.state.categoryList}
            extraData={this.state}
            renderItem={this.renderCategories.bind(this)}/>
        )
    }
}


export default connect(
  appState => ({
      categoryList: appState.products.get('categoryList')
  }),
  dispatch => ({}),
)(CategoryListing);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        marginBottom: 20
    },

});
