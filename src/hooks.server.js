import postgres from "postgres";

export const handle = async({event, resolve}) =>{
	const sql = postgres('postgres://postgres:1234@172.17.0.2:5432/todoapp');
	
	event.locals = {
		sql:sql
	};
	const response = await resolve(event);
	return response
}