import React, {PureComponent} from 'react'
import {
    ScrollView,
    Image,
    StyleSheet,
    View,
} from 'react-native'
import {connect} from "react-redux";
import Actions from "../internal/modules/Actions";
import Swiper from 'react-native-swiper';
import CategoryItem from "./uiElements/CatogoryItem";
import ProductCategory from "./uiElements/ProductCategory";
import CategoryList from "./uiElements/CategoryList";
import {Colors} from "../internal/utils/Colors";

class Dashboard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            categoryList: [],
            productList: [],
            bannerList: [],
        };
    }

    componentDidMount() {
        this.props.getBannerAds()
        this.props.getCategory()
        this.props.getProducts()
    }

    static getDerivedStateFromProps(props, state) {
        return {
            categoryList: props.categoryList,
            productList: props.productList,
            bannerList: props.bannerList,
        };
    }

    componentWillUnmount() {

    }

    renderBanners() {
        return (
          <Swiper
            nextButton={<View/>}
            prevButton={<View/>}
            autoplay
            loop={true}
            activeDotColor={Colors.red}
            style={styles.wrapper}
            showsButtons={true}>
              {
                  this.state.bannerList.map((data, index) => {
                      return (
                        <Image key={data.id} source={{uri: data.image}} style={{flex: 1}}/>
                      )
                  })
              }
          </Swiper>
        )
    }


    renderCategory({item, index}) {
        return (
          <CategoryItem
            onPress={() => this.props.navigation.navigate('ProductListing')}
            key={item.id}
            data={item}/>
        )
    }

    render() {
        return (
          <ScrollView contentContainerStyle={{flexGrow: 1}} style={styles.container}>
              <View style={styles.bannerContainer}>
                  {this.renderBanners()}
              </View>
              <CategoryList
                onPress={() => {
                    this.props.navigation.navigate('ProductListing')
                }}
                onShowAll={() => {
                    this.props.navigation.navigate('CategoryListing')
                }}
                data={this.state.categoryList}/>
              <ProductCategory
                onPress={() => {
                    this.props.navigation.navigate('CategoryListing')
                }}
                onShowAll={() => {
                    this.props.navigation.navigate('CategoryListing')
                }}
                catogoryTitle={'Best Selling'}
                data={this.state.productList}/>
              <ProductCategory
                onPress={() => {
                    this.props.navigation.navigate('CategoryListing')
                }}
                onShowAll={() => {
                    this.props.navigation.navigate('CategoryListing')
                }}
                catogoryTitle={'New Arrival'}
                data={this.state.productList}/>
              <ProductCategory
                onPress={() => {
                    this.props.navigation.navigate('CategoryListing')
                }}
                onShowAll={() => {
                    this.props.navigation.navigate('CategoryListing')
                }}
                catogoryTitle={'Featured'}
                data={this.state.productList}/>
          </ScrollView>
        )
    }
}


export default connect(
  appState => ({
      categoryList: appState.products.get('categoryList'),
      productList: appState.products.get('productList'),
      bannerList: appState.products.get('bannerList'),
  }),
  dispatch => ({
      getBannerAds: () => dispatch(Actions.products.getBannerAds()),
      getCategory: () => dispatch(Actions.products.getCategory()),
      getProducts: () => dispatch(Actions.products.getProducts()),
  }),
)(Dashboard);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20,
        paddingHorizontal: 10
    },
    bannerContainer:{
        height: 200,
        marginTop: 10
    }

});
