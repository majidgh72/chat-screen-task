<template>
    <div class="MainScreen">
        <ChatTopBar />
        <ChatScreen />
        <ChatForm />
    </div>
</template>

<script>
import ChatTopBar from "@/components/ChatTopBar/index.vue";
import ChatScreen from "@/components/ChatScreen/index.vue";
import ChatForm from "@/components/ChatForm/index.vue";
export default {
    name: "MainScreen",
    components: {
        ChatTopBar,
        ChatScreen,
        ChatForm
    }
}
</script>

<style lang="scss" src="./styles.scss"></style>