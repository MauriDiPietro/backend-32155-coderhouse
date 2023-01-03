
# Comandos forever
instalar de manera global ```npm i forever -g```
- ```forever start <filename> [args]```: inicia un nuevo proceso
- ```forever list```: lista todos los procesos activos
- ```forever stop <ID>```: detiene un proceso según su id de proceso
- ```forever stopall```: detiene todos los procesos activos
- ```forever --help```: muestra la ayuda completa
- ```forever logs N```: muestra los logs del proceso (N es el numero del proceso, lo podemos ver cuando hacemos forever list, el primer dato entre [])

# Comandos PM2
instalar de manera global ```npm i pm2 -g```
- ```pm2 start <filename> --name='Server1' --watch```: inicia un nuevo proceso en modo fork
- ```pm2 start <filename> --name='Server1' --watch -i max```: inicia los procesos en modo cluster
- ```pm2 list```: lista todos los procesos activos
- ```pm2 stop <ID>```: detiene un proceso según su id de proceso
- ```pm2 restart <name || ID>```: reinicia uno o todos los procesos activos
- ```pm2 monit``` :Para monitorear sus logs, métricas e información
- ```pm2 logs```: para consultar los logs
- ```pm2 stop 'all'```: detiene todos los procesos activos
- ```pm2 --help```: muestra la ayuda completa
- ```pm2 plus```: para ver los procesos de manera gráfica

