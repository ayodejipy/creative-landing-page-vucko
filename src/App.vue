<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
// import RenderedComponent from './components/RenderedComponent.vue'
import { defineCustomElement, onMounted, h, reactive } from 'vue'

const MyVueElement = defineCustomElement({
    props: {
        message: String
    },
    template: `<h2>{{ message }}</h2>`
})

// Register the custom element.
// After registration, all `<my-vue-element>` tags
// on the page will be upgraded.
customElements.define('cc-vue-element', MyVueElement)

// You can also programmatically instantiate the element:
// (can only be done after registration)
// onMounted(
//     () =>
//         (document.getElementById(
//             'customApp'
//         )!.innerHTML = `<my-vue-element message="Hello Big man"></my-vue-element>`)
// )
</script>

<template>
    <div class="container">
        <TheHeader />

        <RouterView />
    </div>
    <TheFooter />
</template>

<style lang="scss">
.container {
    width: 100%;
    padding-inline: size(6);

    @include mq('md') {
        padding-inline: size(10);
    }
}
</style>
