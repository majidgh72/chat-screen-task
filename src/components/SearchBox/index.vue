<template>
    <div class="SearchBox">
        <input
            type="text"
            placeholder="Search"
            v-model="value"
            @input="search"
        />
        <SearchIcon color="#888" :size="20" classes="icon" />
    </div>
</template>

<script>
import { useStore } from "@/stores/messages";
import SearchIcon from "@/components/Icons/SearchIcon.vue";

export default {
    name: "SearchBox",
    setup() {
        const store = useStore();
        return {
            value: "",
            store,
        }
    },
    components: {
        SearchIcon
    },
    methods: {
        search() {
            this.store.setSearch(this.value);
        }
    }
}
</script>

<style lang="scss" src="./styles.scss"></style>