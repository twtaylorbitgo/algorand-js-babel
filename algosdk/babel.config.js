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
                    //"exclude": [ /node_modules/ ],
                    //"useBuiltIns": "entry"

                }
            ]
        ]
    ;

    // const plugins = [ "@babel/plugin-transform-async-to-generator", {
    //     "module": "bluebird",
    //     "method": "coroutine"
    //   }
    // ];

    //const include = [ "/src/", "/node_modules/" ];

  
    return {
      presets,
    //   plugins,
       //include
    };
  }