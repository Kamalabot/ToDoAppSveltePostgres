import {serializeNonPOJOs} from "$lib/helpers"

export const load = async({locals}) =>{
	
	const {sql} = locals;
	
	const result = sql`SELECT * FROM todo`;
	
	return {
		dbReturn: result
	}
}

export const actions = {
	add: async({locals, request})=>{
		const formData = await request.formData()
		//console.log(Object.fromEntries([...formData]))
		let taskNew = Object.fromEntries([...formData])
		console.log(taskNew.task);
		const {sql} = locals;
		try{
			const addTask = await sql`INSERT INTO todo (description) values (${taskNew.task});`
			} catch (err){
				console.log(err);
				return{
					error:true,
					message: err
				}
			}
	},
	
	delete: async({locals, request})=>{
		const formData = await request.formData()
		console.log(formData)
	},

	edit: async({locals, request})=>{
		const formData = await request.formData()
		console.log(formData)
	}
}