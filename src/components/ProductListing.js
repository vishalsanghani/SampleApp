import React, {PureComponent} from 'react'
import {
    ScrollView,
    Dimensions,
    StyleSheet,
    View
} from 'react-native'
import {connect} from "react-redux";
import ProductItemGrid from "./uiElements/ProductItemGrid";
import ProductList from "./uiElements/ProductList";

const {width} = Dimensions.get('window');

class ProductListing extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            categoryList: props.categoryList,
            productList: props.productList,
            listType: 0, //list = 0, Grid = 1
        };

        props.navigation.setParams({
            onListClick: this.onListClick.bind(this),
            onGridClick: this.onGridClick.bind(this),
        });
    }

    onListClick(){
        this.setState({listType: 0})
    }

    onGridClick(){
        this.setState({listType: 1})
    }

    componentDidMount() {
    }


    componentWillUnmount() {

    }


    render() {
        return (
          <ScrollView style={styles.container}>
              {this.state.listType === 1 ?
                <ProductItemGrid
                  data={this.state.productList}/>:
                <ProductList
                  data={this.state.productList}/>
              }
          </ScrollView>
        )
    }
}


export default connect(
  appState => ({
      categoryList: appState.products.get('categoryList'),
      productList: appState.products.get('productList')
  }),
  dispatch => ({}),
)(ProductListing);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        marginBottom: 20
    },

});
