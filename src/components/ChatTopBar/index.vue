<template>
    <div class="ChatTopBar">
        <img class="avatar" :src="store.getActiveChat.avatar" />
        <span class="name">{{ store.getActiveChat.name }}</span>
    </div>
</template>

<script>
import { useStore } from "@/stores/messages"

export default {
    name: 'ChatTopBar',
    setup() {
        const store = useStore();

        return {
            store,
        }
    }
}
</script>

<style lang="scss" src="./styles.scss"></style>