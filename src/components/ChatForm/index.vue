<template>
    <div class="ChatForm">
        <form @submit.prevent="handleSubmitForm">
            <input
                type="text"
                placeholder="Type a message ..."
                v-model="message"
            />
            <button type="submit">
                <SendIcon :size="20" color="#fff" />
            </button>
        </form>
    </div>
</template>

<script>
import { useStore } from "@/stores/messages";
import SendIcon from "@/components/Icons/SendIcon.vue";

export default {
    name: "ChatForm",
    setup() {
        const store = useStore();

        return {
            store,
        };
    },
    data() {
        return {
            message: "",
        }
    },
    methods: {
        handleSubmitForm() {
            this.store.sendMessage(this.message);
            this.message = "";
        }
    },
    components: {
        SendIcon
    }
}
</script>

<style lang="scss" src="./styles.scss"></style>