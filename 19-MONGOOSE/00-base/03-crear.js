const { log } = require('console');
const { initMongoDB, disconnectMongo } = require('./01-conexion');
const { UsuarioModel } = require('./02-schema');

 const crearUsuario = async (newUsuario) => {
	try{
		console.log(`Vamos a crear a ${newUsuario.name}`)
		await UsuarioModel.create(newUsuario)
		console.log("DONE\n\n");
	}catch(error){
		console.log(error)
	}
}

const main = async () => {
	await initMongoDB();

	const newUsuario = {
		name: 'Juan', 
		firstname: 'Perez',
		email: 'juanperez@gmail.com',
		admin: true,
		user: 'jperez2000',
		password: "SuperPassword",
		age: 28
	}

	await crearUsuario(newUsuario);

	const usuarios = [
		{
			name: 'Emiliano', 
			firstname: 'Martinez',
			email: 'dibumartinez@gmail.com',
			admin: false,
			user: 'DibuM',
			password: "SuperPassword",
			age: 30
		},
		{
			name: 'Lionel', 
			firstname: 'Messi',
			email: 'lio_messi@gmail.com',
			admin: true,
			user: 'lmessi',
			password: "SuperPassword",
			age: 35
		},
		{
			name: 'Cristian', 
			firstname: 'Romero',
			email: 'cuti_romero@gmail.com',
			admin: false,
			user: 'cutiR',
			password: "SuperPassword",
			age: 31
		},
	]

	const creaciones = usuarios.map(a => crearUsuario(a))
	await Promise.all(creaciones);

	await disconnectMongo();

}

main();
