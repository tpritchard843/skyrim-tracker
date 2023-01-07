const booksTable = document.querySelector("#collapsibleTable0")


function parseHTMLTableElem( tableEl, expectingHeaderRow ) {
	var columns = Array.from( tableEl.querySelectorAll( 'th' ) ).map( it => it.textContent );
	var rows = Array.from( tableEl.querySelectorAll( 'tbody > tr' ) );
	// must check for table that has no th cells, but only if we are told to "expectingHeaderRow"
	if ( columns.length == 0 && expectingHeaderRow ) {
		// get columns for a non-th'd table
		columns = Array.from( tableEl.querySelectorAll( 'tbody > tr' )[ 0 ].children ).map( it => it.textContent )
		// must remove first row as it is the header
		rows.shift();
	}
	const returnJson = {
		'headers': columns,
		'rows': rows.map( row => {
			const cells = Array.from( row.querySelectorAll( 'td' ) )
			return columns.reduce( ( obj, col, idx ) => {
				obj[ col ] = cells[ idx ].textContent
				return obj
			}, {} )
		} )
	};
	// if we were expecting a header row with th cells lets see if we got it
	// if we got nothing lets try looking for a regular table row as the header
	if ( !expectingHeaderRow && returnJson.headers.length == 0 && ( returnJson.rows[ 0 ] && Object.keys( returnJson.rows[ 0 ] ).length === 0 ) ) {
		return parseHTMLTableElem( tableEl, true );
	}
	return returnJson;
}

parseHTMLTableElem(booksTable, true)
