export default new class Storage {
    constructor() {
        this.storage = localStorage;
    }

    save(wishlist) {
        this.storage.setItem('wishlist', JSON.stringify(wishlist));
    }

    fetchAll() {
        const serializedWishlist = this.storage.getItem('wishlist');
        return JSON.parse(serializedWishlist);
    }

    performUpdate(data) {
        this.save(data);
    }
}