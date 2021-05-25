
const url = 'https://pokeapi.co/api/v2/pokemon';
let pokemon_info_page = [];


let check_page = ( data ) => {
	if ( data.next !== null ) {
		let idx_next_page = data.next.indexOf( '?' );
		let query_url = data.next.slice( idx_next_page );
		return query_url;
	}
	return data.next;
}

let _get = ( path = '' ) => {
	return fetch(`${ url }/${ path }`);
}


export let get_info_pokemon = ( path ) => {
	return _get( path )
		.then( response => response.json())
		.then( data => {
			console.log( data );
			return data;
		});
}


export let get_list_pokemon = ( path = '' ) => {
	return _get( path )
		.then( response => response.json())
		.then( data => {
			let p = check_page( data );
			pokemon_info_page.push( data );
			return p !== null ? get_list_pokemon( p ) : pokemon_info_page ;
		});
}