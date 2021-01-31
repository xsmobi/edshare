const express = require('express')
const app = express()
const port = 3000

// Airtable verbunden!

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyDXdM9K9L8WfzIJ'}).base('appB6K9fLiEWtIDLL');


base('Index').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Title'));

        // document.writeln(Title); // **************************b
	//console.log(Title);

    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});







app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)







})