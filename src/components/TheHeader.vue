<script lang="ts" setup>
import VuckoLogo from './logo/VuckoLogo.vue'
import AppMenu from '@/components/AppMenu.vue'

function toggleMenu() {
    console.log('clicked')
}
</script>

<template>
    <header class="heading fixed flex items-center content-space-between">
        <div class="heading__logo">
            <VuckoLogo />
        </div>

        <div class="heading__menu">
            <button class="toggle-menu" @click="toggleMenu">Menu</button>
        </div>
    </header>
    <AppMenu style="display: none" />
</template>

<style lang="scss" scoped>
.heading {
    @include inset-x();
    width: 100%;
    height: 4.5rem;
    padding-top: 1.5rem;
    padding-inline: size(6);
    z-index: 9999;

    &__logo {
        height: auto;
        width: 9.5rem;

        svg {
            overflow: hidden;
        }
    }

    &__menu {
        & > button {
            font-size: size(6);
            // font-family: $font-family-base;
            font-weight: $font-weight-medium;
            border: none;
            background: transparent;
            text-transform: capitalize;
        }
    }
}
</style>
