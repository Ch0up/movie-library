import { defineStore } from "pinia";
import Storage from '../utils/Storage';

const wishlist = Storage.fetchAll();

export const useWishlistMoviesStore = defineStore("wishlist", {
    state: () => ({
        wishlist: wishlist || [],
    }),
    actions: {
        async addToWishlist(data) {
            this.wishlist.push(data);
            this.save();
        },
        async removeFromWishlist(wishlistId) {
            this.wishlist = this.wishlist.filter((wishlist) => wishlist.id !== wishlistId);
            this.save();
        },
        async save() {
            Storage.performUpdate(this.wishlist);
        },
    },
});