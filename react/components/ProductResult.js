import { graphql, withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import React, { Component } from 'react'
import Shelf from './Shelf'

class ProductResult extends Component {
  render () {
    const {
      data
    } = this.props

    return (
      <div>
        { data.loading && (<div>Loading...</div>) }

        {
          data.products.length ?
            data.products.map((e, i) => {
              return (
                <Shelf
                  productName={e.productName}
                  image={e.items[0].images[0].imageUrl}
                  brand={e.brand}
                  url={e.link}
                />
              )
            }) : (<div>No results :(</div>)
        }
      </div>
    )
  }
}

const SEARCH_PROD = gql`
  query Products ($query: String!) {
    products(
      query: $query
    ) {
      productName,
      brand,
      link,
      items {
        images {
          imageUrl
        }
      }
    }
  }
`

const query_options = {
  options: (props) => ({
    variables: {
      query: props.query,
      fetchPolicy: 'network-only'
    }
  })
}

export default graphql(SEARCH_PROD, query_options) (ProductResult)
// export default ProductResult
