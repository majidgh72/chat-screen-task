<template>
    <div class="MessagesList">
        <MessageItem
            v-for="(message, index) in store.getChats"
            v-bind="message"
            :clickHandler="() => handleClick(message.id)"
            :key="index"
        />
    </div>
</template>

<script>
import { useStore } from '@/stores/messages';
import MessageItem from "@/components/MessageItem/index.vue";

export default {
    name: "MessagesList",
    setup() {
        const store = useStore();
        return {
            store,
        }
    },
    components: {
        MessageItem
    },
    methods: {
        handleClick(id) {
            this.store.setActiveUserId(id);
        }
    }
}
</script>

<style lang="scss" src="./styles.scss"></style>