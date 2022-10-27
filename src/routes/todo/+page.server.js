import pool from "$lib/db"
import {serializeNonPOJOs} from "$lib/helpers"

export const load = async() =>{
	
	try{
		const allDo = await pool.query("SELECT * FROM todo")
		console.log(serializeNonPOJOs(allDo))
	} catch(err){
		console.error(err)
		return{
			error:true,
			message:err
		}
	}
}