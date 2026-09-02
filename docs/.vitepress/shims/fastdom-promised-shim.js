'use strict';

function create(promised, type, fn, ctx) {
  var tasks = promised._tasks;
  var fastdom = promised.fastdom;
  var task;

  var promise = new Promise(function(resolve, reject) {
    task = fastdom[type](function() {
      tasks.delete(promise);
      try { resolve(ctx ? fn.call(ctx) : fn()); }
      catch (e) { reject(e); }
    }, ctx);
  });

  tasks.set(promise, task);
  return promise;
}

var exports = {
  initialize: function() {
    this._tasks = new Map();
  },

  mutate: function(fn, ctx) {
    return create(this, 'mutate', fn, ctx);
  },

  measure: function(fn, ctx) {
    return create(this, 'measure', fn, ctx);
  },

  clear: function(promise) {
    var tasks = this._tasks;
    var task = tasks.get(promise);
    this.fastdom.clear(task);
    tasks.delete(promise);
  }
};

export default exports;
