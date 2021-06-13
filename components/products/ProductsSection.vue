<template>
  <section class="products">
    <div class="container">
      <name-heading
        title="our products"
        view="title title_products"
      />
      <header-products />
      <ul class="goods">
        <products-item
          v-for="product of paginatedProducts"
          :key="product.id"
          :product="product"
        />
      </ul>
      <pagination
        :pages="pages"
      />
      <products-not-found
        :products="products"
        title="Product(s) not found!"
        view="result"
      />
    </div>
  </section>
</template>

<script>
import NameHeading from '~/components/ui/NameHending.vue';
import HeaderProducts from '~/components/products/HeaderProducts.vue';
import ProductsItem from '~/components/products/ProductsItem.vue';
import Pagination from '~/components/main/Pagination.vue';
import ProductsNotFound from '~/components/products/ProductsNotFound.vue';

export default {
  name: 'ProductsSection',
  components: {
    NameHeading,
    HeaderProducts,
    ProductsItem,
    Pagination,
    ProductsNotFound,
  },
  props: {
    paginatedProducts: {
      type: Array,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
    pages: {
      type: Number,
      required: true,
    },
  },
};
</script>
