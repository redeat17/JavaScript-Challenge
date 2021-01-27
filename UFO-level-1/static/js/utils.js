// Function to create/populate table with data.
const createTable = (data, tableBody) => {
  // Loop through the items in the data array.
  data.forEach(ufo => {
    // Insert a row in the table at the last row
    let newRow = tableBody.append('tr');

    // Insert a cell in the row at index, create text nodes for each, append a text node to the cell.
    Object.entries(ufo).forEach(([key, value]) => newRow.append('td').text(value.toString()));
  });
};