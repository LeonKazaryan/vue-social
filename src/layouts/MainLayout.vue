<template>
    <div class="main-layout">
        <AppHeader/>
        <slot></slot>
    </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue' 

export default{
    name: "MainLayout",
    components: {
        AppHeader,
    }
}
</script>
