module.exports = {
  "apps" : [{
    "name"        : "mock_server",
    "script"      : "./bin/run.js",
    "watch"       : true,
    "env": {
      "NODE_ENV": "development",
    },
    "env_production" : {
       "NODE_ENV": "production"
    }
  }]
}