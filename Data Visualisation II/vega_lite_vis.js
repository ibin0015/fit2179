var vg_1 = "daily_cost_bar_chart.vg.json";
vegaEmbed("#bar_chart", vg_1, {"actions": false}).then(function(result) {
}).catch(console.error);

var vg_2 = "Coffee_consumption.vg.json";
vegaEmbed("#choropleth_map", vg_2, {"actions": false}).then(function(result) {
}).catch(console.error);

var vg_3 = "Top_exporter.vg.json";
vegaEmbed("#bar_chart2", vg_3, {"actions": false}).then(function(result) {
}).catch(console.error);

var vg_4 = "Coffee_bean_preference.vg.json";
vegaEmbed("#lollipop_chart", vg_4, {"actions": false}).then(function(result) {
}).catch(console.error);