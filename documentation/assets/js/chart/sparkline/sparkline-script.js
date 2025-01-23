(function ($) {
  "use strict";
  var sparkline_chart = {
    init: function () {
      setTimeout(function () {
        $("#simple-line-chart-sparkline").sparkline([5, 10, 20, 14, 17, 21, 20, 10, 4, 13, 0, 10, 30, 40, 10, 15, 20], {
          type: 'line',
          width: '100%',
          height: '150',
          tooltipClassname: 'chart-sparkline',
          lineColor: '#ec8951',
          fillColor: 'transparent',
          highlightLineColor: '#ec8951',
          highlightSpotColor: '#ec8951',
          targetColor: '#ec8951',
          performanceColor: '#ec8951',
          boxFillColor: '#ec8951',
          medianColor: '#ec8951',
          minSpotColor: '#ec8951'
        });
      })
    }
  };
  sparkline_chart.init()
})(jQuery);