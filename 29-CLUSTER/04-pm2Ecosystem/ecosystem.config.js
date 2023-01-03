module.exports = {
  apps : [
    {
    name   : "app1",
    script : "./src/server.js",
    watch: true,
    autorestart: true,
    exec_mode: 'cluster',
    instances: 'max',
    // instaces: 3,
    max_memory_restart: '1000M'
    },
    {
    name   : "app2",
    script : "../03-pm2/src/server.js",
    watch: true,
    autorestart: true,
    exec_mode: 'cluster',
    max_memory_restart: '1000M'
    }
]
}
