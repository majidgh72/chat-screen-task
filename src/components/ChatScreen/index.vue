<template>
    <div class="ChatScreen">
        <ChatMessage
            v-for="(message, index) in store.getUserMessages"
            :text="message.content"
            :type="message.type"
            :key="index"
        />
    </div>
</template>

<script>
import { useStore } from "@/stores/messages";
import ChatMessage from "@/components/ChatMessage/index.vue";

export default {
    name: "ChatScreen",
    setup() {

        const store = useStore();

        return {
            store,
        }
    },
    components: {
        ChatMessage
    }
}
</script>

<style lang="scss" src="./styles.scss"></style>