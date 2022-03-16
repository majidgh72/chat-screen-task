<template>
    <div class="Widget">
        <Sidebar />
        <MainScreen />
    </div>
</template>

<script>
import Sidebar from "@/components/Sidebar/index.vue";
import MainScreen from "@/components/MainScreen/index.vue";

export default {
    name: "Widget",
    components: {
        Sidebar,
        MainScreen
    }
}
</script>

<style lang="scss" src="./styles.scss"></style>