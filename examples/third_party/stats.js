// stats.js - http://github.com/mrdoob/stats.js
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
      (global.Stats = factory());
}(this, (function () {
  'use strict';

  /**
   * @author mrdoob / http://mrdoob.com/
   */

  var fps = document.querySelector('#fps');
  var Stats = function () {
    var beginTime = (performance || Date).now(), prevTime = beginTime, frames = 0;
    var fpsPanel = new Stats.Panel();

    return {
      begin: function () {
        console.log('FPS started')
        beginTime = (performance || Date).now();
      },
      end: function () {
        frames++;
        var time = (performance || Date).now();
        if (time > prevTime + 1000) {
          fpsPanel.update((frames * 1000) / (time - prevTime), 100);
          prevTime = time;
          frames = 0;
        }
        console.log('FPS end')
        return time;
      },
      update: function () {
        console.log('FPS Updating')
        beginTime = this.end();
      }
    };
  };

  Stats.Panel = function () {
    var min = Infinity, max = 0, round = Math.round;
    return {
      update: function (value, maxValue) {
        min = Math.min(min, value);
        max = Math.max(max, value);
        var fpsnow = round(value);
        fps.innerHTML = '<span style="color: rgba(255, 255, 255, 0.8);background-color: red;">' + fpsnow + ' FPS</span>';
      }
    };
  };
  return Stats;
})));