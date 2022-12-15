
# Proceso para obtener credenciales de google

- ingresar a ```console.cloud.google.com```

- ```PROYECTO NUEVO```

- ```PANEL```
- ```Descripcion general de las API```
- ```Pantalla de consentimiento```
- ```PERMISOS```
- ```Agregar o quitar permisos```
- ```Tildar opciones email y profile```
- ```ACTUALIZAR```
- ```CREDENCIALES```
- ```Crear credenciales```
- ```Id de OAuth```
- ```AGREGAR URI```
- URI: ```http://localhost:3000```
- URI de redireccionamiento autorizado: ```http://localhost:3000/oauth2/redirect/accounts.google.com```
- ```CREAR```

### Luego de este proceso ya nos muestra las credenciales para rellenar nuestro objeto de configuración:

```
  	{
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: "/oauth2/redirect/accounts.google.com",  //url que necesitamos para que nos redirija al login
      scope: ["profile"], //vamos a obtener el perfil del usuario
      state: true,
    }
```