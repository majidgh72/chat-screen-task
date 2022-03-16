<template>
    <div :class="['ChatMessage', { 'sent': type === 'sent' }]">
        {{ text }}
    </div>
</template>

<script>
export default {
    name: 'ChatMessage',
    props: {
        text: String,
        type: String,
    }
}
</script>

<style lang="scss" src="./styles.scss"></style>