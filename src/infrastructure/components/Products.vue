<template>
    <div class="conten">
        <ul>
            <li v-for="product in productos" :key="product.id">
                 <button @click="() => { onSelectProduct(product) }">{{ product.titulo }}</button>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ProducService } from '@/domain/service/ProductService'
import { Products } from '@/domain/models/Products'

type dataProps = {
    productos: Products[]
}

export default defineComponent({
    name: 'ProductsVue',
    props: {
        onSelectProduct: { type: Function }
    },
    data(): dataProps{
        return {
            productos: []
        }
    },
    mounted() {
        ProducService.getProduct().then(response => (this.productos = response))
    }
})

</script>
