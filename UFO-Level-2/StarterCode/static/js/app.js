// from data.js
var tableData = data;

var button = d3.select("#filter-btn");

button.on("click", function() {
    var inputElement = d3.select("#datetime");
    var inputDate = inputElement.property("value");
    var inputElement2 = d3.select("#state");
    var inputState = inputElement2.property("value");
    var inputElement3 = d3.select("#city");
    var inputCity = inputElement3.property("value");
    var inputElement4 = d3.select("#country");
    var inputCountry = inputElement4.property("value");
    var inputElement5 = d3.select("#shape");
    var inputShape = inputElement5.property("value");

    // console.log(inputDate);
    // console.log(inputState);
    // console.log(inputCity);
    // console.log(inputCountry);
    // console.log(inputShape);
    
    // filtering data based on multiple criteria

    if (inputDate != null) {
        if (inputState == "" && inputCity == "" && inputCountry == "" && inputShape == "") {
            var filteredData = tableData.filter(item => 
                item.datetime === inputDate)}
        else if (inputState != null && inputCity == "" && inputCountry == "" && inputShape == "") {
            var filteredData = tableData.filter(item => 
                item.datetime === inputDate &&
                item.state === inputState 
            )}
        else if (inputState != null && inputCity != null && inputCountry == "" && inputShape == "") {
            var filteredData = tableData.filter(item => 
                item.datetime === inputDate &&
                item.city === inputCity && 
                item.state === inputState 
            )}
        else {
            var filteredData = tableData.filter(item => 
                item.datetime === inputDate &&
                item.city === inputCity && 
                item.state === inputState && 
                item.country === inputCountry &&
                item.shape === inputShape
            )}}
    else { 
        console.log("Nothing is entered.")};

    // var filteredData = tableData.filter(item => item.datetime === inputDate && item.state === inputState);


    //appending dynamic data to table

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