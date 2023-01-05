module.exports = {
  apps: [
    {
      name: 'app1',
      script: './src/index.js',
      watch: true,
      autorestart: true,
      args: '--puerto=3001',
    },
    {
      name: 'app2',
      script: './src/index.js',
      watch: true,
      autorestart: true,
      args: '--puerto=3002',
    },
    {
      name: 'app3',
      script: './src/index.js',
      watch: true,
      autorestart: true,
      instances: 'max',
      args: '--puerto=3003',
    }
  ],
};