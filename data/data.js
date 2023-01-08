//const booksTable = document.querySelector("#collapsibleTable0")
const booksTable = document.getElementsByTagName('table')


function convertData() {
	const skyrimBooksTable = $('#collapsibleTable0').tableToJSON(
		{
			ignoreColumns:[0, 2, 4]
		}
	);
	console.log(skyrimBooksTable);
	alert(JSON.stringify(skyrimBooksTable))
}

convertData()
