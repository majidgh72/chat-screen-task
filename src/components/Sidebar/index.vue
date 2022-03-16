<template>
    <div class="Sidebar">
        <div class="top">
            <h2 class="title">Messages</h2>
            <SearchBox />
        </div>
        <MessagesList />
    </div>
</template>

<script>
import SearchBox from "@/components/SearchBox/index.vue";
import MessagesList from "@/components/MessagesList/index.vue";

export default {
    name: "Sidebar",
    components: {
        SearchBox,
        MessagesList
    }
}
</script>

<style lang="scss" src="./styles.scss"></style>