class Sorter {
  constructor() {
     this.sorter = [];
     this.comparator = (a, b) => a - b;
  }

  add(element) {
    this.sorter.push(element);
  }

  at(index) {
    return (this.sorter[index]);
  }

  get length() {
    return (this.sorter.length);
  }

  toArray() {
    return this.sorter;
  }

  sort(indices) {
    indices.sort((a, b) => a - b); 
    var first = this.sorter.slice(0, indices[0]); 
    var second = this.sorter.slice(indices[0], indices[indices.length - 1] + 1); 
    var third = this.sorter.slice(indices[indices.length - 1] + 1, this.sorter.length); 
    this.sorter = [].concat(first, second.sort(this.comparator), third); 
  }

  setComparator(compareFunction) {
     this.comparator = compareFunction;
   }
}

module.exports = Sorter;