import {serializeNonPOJOs} from "$lib/helpers"

export const load = async({locals}) =>{
	
	const {sql} = locals;
	
	const result = sql`SELECT * FROM todo`;
	
	return {
		dbReturn: result
	}
}