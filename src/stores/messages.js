import { defineStore } from 'pinia';
import chats from '@/data/chats';
import filterArray from '@/services/filterArray';
import findInArray from '../services/findInArray';

export const useStore = defineStore({

    id: 'messages',

    state: () => ({
        searchKey: '',
        activeUserId: 1,
        chats: chats,
    }),

    getters: {
        getChats(state) {
            let result = state.searchKey === ''
                ? state.chats
                : filterArray(state.chats, "name", state.searchKey);

            return result;
        },
        getActiveChat(state) {
            let index = findInArray(state.chats, "id", state.activeUserId);
            return state.chats[index];
        },
        getUserMessages(state) {
            let index = findInArray(state.chats, "id", state.activeUserId);
            return state.chats[index].messages;
        }
    },

    actions: {
        setSearch(key) {
            this.searchKey = key;
        },
        sendMessage(message) {
            let index = findInArray(this.chats, "id", this.activeUserId);
            this.chats[index].messages.push({
                content: message,
                type: "sent"
            });
        },
        setActiveUserId(id) {
            this.activeUserId = id;
        }
    }
})
