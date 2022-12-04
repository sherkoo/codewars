class PaginationHelper {
  constructor(collection, itemsPerPage) {
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  pageItemCount() {
    // returns the number of items within the entire collection
    return this.collection.length;
  }
  pageCount() {
    // returns the number of pages
    return this.collection.length % this.itemsPerPage;
  }
  pagepageItemCount(pageIndex) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
    return this.collection.length % pageIndex;
  }
  pageIndex(itemIndex) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    if (itemIndex > this.pageItemCount() - 1 || itemIndex < 0) {
      return -1;
    }

    return Math.ceil((itemIndex + 1) / this.itemsPerPage) - 1;
  }
}

var helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);

console.log(helper.pageCount());
console.log(helper.pageItemCount());
// console.log(helper.pagepageItemCount(0));
console.log(helper.pageIndex(5));
console.log(helper.pageIndex(0));
