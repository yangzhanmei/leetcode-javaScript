/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
  this.obj = {};
  this.capacity = capacity;
  this.used = [];
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
  if (this.capacity === 0) {
    return -1;
  }
  const value = this.obj[key];
  if (value) {
    this.update(key);
  }

  return value || value === 0 ? value : -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
  if (this.capacity === 0) {
    return;
  }
  let deleteItem;
  if (Object.keys(this.obj).length === this.capacity) {
    if (!this.obj[key]) {
      let min = this.used[0].num;
      let usedIndex;
      this.used.forEach(item => {
        if (min > item.num) {
          min = item.num;
        }
      });
      for (let i = 0; i < this.used.length; i++) {
        if (this.used[i].num === min) {
          deleteItem = this.used[i].key;
          usedIndex = i;
          break;
        }
      }
      if (deleteItem !== undefined) {
        delete this.obj[deleteItem];
        this.used.splice(usedIndex, 1);
      }
    }
  }
  this.obj[key] = value;
  this.update(key);
};

LFUCache.prototype.update = function(key) {
  const usedItem = this.used.find(item => item.key === key);
  const index = this.used.findIndex(item => item.key === key);
  if (!usedItem) {
    this.used.push({ key, num: 1 });
  } else {
    this.used.splice(index, 1);
    this.used.push({ key, num: usedItem.num + 1 });
  }
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
