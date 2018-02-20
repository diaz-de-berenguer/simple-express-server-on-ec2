module.exports = {
  apps : [
    {
      name      : 'Server',
      script    : './index.js'
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'ubuntu',
      host : 'ec2-54-187-181-64.us-west-2.compute.amazonaws.com',
      key  : '../nodeservertutorial.pem',
      ref  : 'origin/master',
      repo : 'git@github.com:diaz-de-berenguer/simple-express-server-on-ec2.git',
      path : '/home/ubuntu/simple-express-server-on-ec2',
      'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
};
