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
  // var fpsscope = document.querySelector('#fpsscope');

  var Stats = function () {
    var beginTime = (performance || Date).now(), prevTime = beginTime, frames = 0;
    var fpsPanel = new Stats.Panel();

    return {
      begin: function () {
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
        return time;
      },
      update: function () {
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
        var c = '255, 255, 255, ';

        if (fpsnow < 10)
          c = '255, 111, 97,';
        else if (fpsnow < 30 && fpsnow >= 10)
          c = '255, 174, 91, ';
        else if (fpsnow < 50 && fpsnow >= 30)
          c = '62, 142, 157, ';
        else if (fpsnow >= 50)
          c = '73, 193, 100, ';

        fps.innerHTML = '<span style="color: rgba(' + c + '0.75);">' + fpsnow + ' <span style="font-size: 3rem;">FPS</span>' + '</span>';
        // fpsscope.innerHTML = round( min ) + '-' + round( max );
      }
    };
  };
  return Stats;
})));