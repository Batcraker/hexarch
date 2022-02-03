<template>
  <ProductsVue/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductsVue from '@/infrastructure/components/Products.vue'
import { Products } from '@/domain/models/Products'
import { basketService } from '@/domain/service/BasketService'
import {Basket } from '@/domain/models/Basket'

type DataProps = {
  basket: Basket|null
}

export default defineComponent({
  name: 'App',
  components: {
    ProductsVue
  },
  methods: {
    addToCart(product: Products){
      this.basket = basketService.InProdutsToBasket(product, this.basket)
    }
  },
  data(): DataProps{
    return {
      basket: null
    }
  },
  mounted(){
    this.basket = null
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
