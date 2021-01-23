// from data.js
var tableData = data;
console.log(data);
// YOUR CODE HERE!
var tbody = d3.select("#ufo-table>tbody");
console.log(tbody.node());
// Dynamically build table
/*tableData.forEach(record => {
    var row = tbody.append("tr");

    row.append("td").text(record["datetime"]);
    row.append("td").text(record["city"]);
    row.append("td").text(record["state"]);
    row.append("td").text(record["country"]);
    row.append("td").text(record["shape"]);
    row.append("td").text(record["durationMinutes"]);
    row.append("td").text(record["comments"]);
})
*/
tableData.forEach((ufoSite) => {
    var row = tbody.append("tr");
    Object.entries(ufoSite).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

Object.values(record).forEach(col => {
    row.append("td").text(col);
});

//Add event listener to button
btn = d3.select("#filter-btn");
btn.on("click", function test(){
    tbody.html("");

var inputDate = d3.select("#datetime").property("value");
var filteredData = tableData.filter(row => row.datetime === inputDate);

filteredData.forEach((ufoSite) => {
  var row = tbody.append("tr");
  Object.entries(ufoSite).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

})

