import postgres from "postgres";

export const handle = async({event, resolve}) =>{
	postgresql://
	const sql = postgres(`vercel:${process.env.dbPasswd}@free-tier14.aws-us-east-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dcavern-pika-6213`);
	const createTable = await sql`CREATE TABLE todo( 
									todo_id BIGSERIAL PRIMARY KEY NOT NULL,
									description VARCHAR(255)
									);`
	event.locals = {
		sql:sql
	};
	const response = await resolve(event);
	return response
}