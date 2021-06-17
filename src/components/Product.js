import React from 'react';

import {Text, StyleSheet} from 'react-native';

import {Card, Button} from 'react-native-elements';

import {withNavigation} from 'react-navigation';

class Product extends React.Component {
    productCallBack = async (order, index) => {

        let updatedProducts = this.state.products;

        const currImg = updatedProducts[index].currImg;

        updatedProducts[index] = {currImg, order};

        await.this.setState({products:updatedProducts});

    }

   render(){
       return(
       <div key={this.props.index} className={"Cartitem"}>
           <figure><img src={this.props.image.src} alt={this.props.image.name} id={this.props.index}  /></figure>
           <form>
               <table className="ContentInformation"></table>
               <tr>
                   <td><b> Description</b></td>
                   <td>{this.props.image.description}</td>
               </tr>
               <tr>
                   <td><Quantity Selector productCallBack={this.productCallBack}/></td>
               </tr>

           </form>
       </div>
       )
   }


  render() {
    return (
      (
        <section className="Content" id="Cart" onClick={this.releaseScroll}>
          <div className="TraspBackground" />

          <ShoppingCart
            items={this.state.cart}
            lockScroll={this.lockScroll}
            checkout={this.checkout}
          />
        </section>
      ),
      (
        <Card image={{uri: this.props.product.img}}>
          <Text style={{marginBottom: 10, marginTop: 20}} h2>
            {this.props.product.name}
          </Text>

          <Text style={styles.price} h4>
            {this.props.product.price}
          </Text>

          <Text h6 style={styles.colour}>
            {this.props.product.colour}
          </Text>

          <Button
            type="clear"
            title="Buy now"
            onPress={() =>
              this.props.navigation.navigate('Details', {
                name: this.props.product.name,
                price: this.props.product.price,
                img: this.props.product.img,
                colour: this.props.product.colour,
              })
            }
          />
        </Card>
      )
    );
  }
}

const styles = StyleSheet.create({
  name: {
    color: '#5a647d',

    fontWeight: 'bold',

    fontSize: 30,
  },

  price: {
    fontWeight: 'bold',

    marginBottom: 10,
  },

  colour: {
    fontSize: 10,

    color: '#c1c4cd',
  },
});
export default withNavigation(Product);

export const ShoppingCart = async props => {
  let cartList;
  cartList = this.props.items.maps((currImg, Index) => (
    <Display
      image={currImg}
      index={index}
      key={index}
      productCallback={this.productCallback}
    />
  );

    let componentDidMount;
    componentDidMount = aysnc () =>
    {

        let productList = [];

        await this.props.items.map((currImg, Index) =>

            productList.push((currImg, order: {size: Size[0], type: Type[0], quantity:1}})

);

this.setState({products.productsList});

}



  //  If the shopping cart has no items, let the users know its empty

  if (props.items.length == 0) {
    return <div className="EmptyCart">Nothing In Cart</div>;
  } else {
    return (
      <div
        className="shoppingCart"
        id="shoppingCartScroll"
        onClick={e => props.lockScroll()}>
        <ProductDisplay items={props.items} checkout={props.checkout} />
      </div>
    );
  }
};
