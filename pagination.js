let itemCount = 10;
let items = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "g",
  "g",
  "g",
  "g",
  "g",
  "g",
  "g",
  "g",
  "g",
  "g",
  "g",
  "g",
  "g",
  "g",
  "g",
  "g",
  "g",
];
let pageCount = Math.ceil(items.length / itemCount);

class Pagination {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }

  itemCount() {
    return this.collection.length;
  }

  pageItemCount(pageIndex) {
    if (pageIndex < 0) {
      return -1;
    }
    let results = this.collection.slice(
      pageIndex * this.itemsPerPage,
      pageIndex * this.itemsPerPage + this.itemsPerPage
    );

    if (results.length <= 0) {
      return -1;
    } else {
      return results.length;
    }
  }

  pageIndex(itemIndex) {
    if (itemIndex > this.itemCount() - 1 || itemIndex < 0) {
      return -1;
    }

    return Math.ceil((itemIndex + 1) / this.itemsPerPage) - 1;
  }
}

// for (let i = 0; i < pageCount; i++) {
//   console.log("---");
//   console.log("id: " + i);
//   console.log(i * itemCount);
//   console.log(i * itemCount + itemCount);
//   console.log(items.slice(i * itemCount, i * itemCount + itemCount));
//   console.log("---");
// }

// console.log(itemCount(0));
// console.log(itemCount(1));

let page = new Pagination(items, 10);

console.log(page.pageItemCount(-2));

// console.log(page.pageIndex(6));

// console.log(page.itemCount());

// console.log(page.pageCount());
// console.log(page.itemCount(0));
// console.log(page.itemCount(1));

// console.log(page.itemCount(5));

// console.log(page.pageIndex(1));
// // console.log(page.pageIndex(20));

// function thing() {
//   return 2;
// }

// // console.log([1, 2, 3].findIndex(thing()));

// console.log("---");
// console.log(items.indexOf("b"));
// console.log("---");
