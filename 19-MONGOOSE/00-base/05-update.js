const { initMongoDB, disconnectMongo } = require('./01-conexion');
const { UsuarioModel } = require('./02-schema');

const updatear = async () => {
  await initMongoDB();

  console.log('Update documento por ID');

  const idDocumento = '637c12bef2a9a98a42bba7fd';

  const u1 = await UsuarioModel.findByIdAndUpdate(
    idDocumento,
    { name: 'Lionel Andres Messi' },
    { new: true }
  );

  console.log('Updated Document');
  console.log(u1);

  console.log('Update documento con filtros');
  const u2 = await UsuarioModel.updateOne(
    { admin: false }, 
    { $set: { password: 'Modificada' } }
  );

  console.log('\n\n\n\nUpdated con filtros');
  console.log(u2);
  await disconnectMongo();

};

updatear();
