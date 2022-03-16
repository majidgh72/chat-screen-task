<template>
    <div class="MessageItem" @click="handleClick">
        <img class="avatar" :src="avatar" :alt="name" />
        <div class="details">
            <div class="row">
                <div class="name">{{ name }}</div>
                <span class="time">{{ time }}</span>
            </div>
            <div class="row">
                <div class="last-chat">{{ lastMessage }}</div>
                <span class="unread" v-if="unreadCount > 0">{{ unreadCount }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MessageItem',
    props: {
        name: String,
        avatar: String,
        time: String,
        lastMessage: String,
        unreadCount: Number,
        clickHandler: Function,
    },
    methods: {
        handleClick() {
            this.clickHandler();
        }
    }
}
</script>

<style lang="scss" src="./styles.scss"></style>