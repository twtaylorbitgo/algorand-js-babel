module.exports = function (api) {
    api.cache(true);
  
    const presets =  
        [
            [
                "@babel/preset-env",
                {
                    "targets": {
                        "node": "6.12.3"
                    },
                    "debug": true,
                }
            ]
        ]
    ;
    
    return {
      presets
    };
  }