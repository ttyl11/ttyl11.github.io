'use strict';

var noop = function() {};

var FastDom = function() {
  this.reads = [];
  this.writes = [];
};

FastDom.prototype = {
  constructor: FastDom,

  runTasks: function(tasks) {
    var task;
    while (task = tasks.shift()) task();
  },

  measure: function(fn, ctx) {
    var task = !ctx ? fn : fn.bind(ctx);
    this.reads.push(task);
    scheduleFlush(this);
    return task;
  },

  mutate: function(fn, ctx) {
    var task = !ctx ? fn : fn.bind(ctx);
    this.writes.push(task);
    scheduleFlush(this);
    return task;
  },

  clear: function(task) {
    return remove(this.reads, task) || remove(this.writes, task);
  },

  extend: function(props) {
    if (typeof props !== 'object') throw new Error('expected object');
    var child = Object.create(this);
    for (var key in props) {
      if (props.hasOwnProperty(key)) child[key] = props[key];
    }
    child.fastdom = this;
    if (child.initialize) child.initialize();
    return child;
  },

  catch: null
};

function scheduleFlush(fastdom) {
  if (!fastdom.scheduled) {
    fastdom.scheduled = true;
    setTimeout(function() { flush(fastdom); }, 0);
  }
}

function flush(fastdom) {
  var writes = fastdom.writes;
  var reads = fastdom.reads;
  var error;
  try {
    fastdom.runTasks(reads);
    fastdom.runTasks(writes);
  } catch (e) { error = e; }
  fastdom.scheduled = false;
  if (reads.length || writes.length) scheduleFlush(fastdom);
  if (error) throw error;
}

function remove(array, item) {
  var index = array.indexOf(item);
  return !!~index && !!array.splice(index, 1);
}

var exports = new FastDom();

export default exports;
