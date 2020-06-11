// from data.js
var tableData = data;


var button = d3.select("#filter-btn");

button.on("click", function() {
    var inputElement = d3.select("#datetime");
    var inputDate = inputElement.property("value");

    console.log(inputDate);
    

    var filteredData = tableData.filter(item => item.datetime === inputDate);

    var table = d3.select("#ufo-table");

    var tbody = table.select("tbody");

    tbody.html("");

    filteredData.forEach(function(event) {

        var row = tbody.append("tr");

        Object.entries(event).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
    
});