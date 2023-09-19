import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            account: null
        }
    },

    persist: [
        {
            key: 'user',
            paths: ['account'],
            storage: localStorage
        }
    ]
})