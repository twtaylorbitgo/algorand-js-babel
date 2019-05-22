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
                    //"include": "/node_modules/algosdk/",
                    "exclude": [ /node_modules/ ],
                    "useBuiltIns": "entry"

                }
            ]
        ]
    ;
    const plugins = [ ];
  
    return {
      presets,
      plugins
    };
  }