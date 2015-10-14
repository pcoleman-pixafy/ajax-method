## Synopsis

This module sets up grunt on any Magento installation. It will include a Gruntfile and install some standard plguins to compile and minify javascript and css. It will optionally create a sass folder and move your css files into it. In the future we will include the ability to use this for non-Magento projects.  

## Installation
Run npm install "git+ssh://git@bitbucket.org/pixafymodules/ajax-method.git"
Add 'node_modules/ajax-methods/ajax-methods.js' to your Gruntfile in the uglify config.


```
#!javascript
modules: {
    options: {
        mangle: globalMangle,
        sourceMap: true
    },
    files: [
        {
            src: [
                magento_jsFolder+'modules/*.js',
                'node_modules/ajax-methods/ajax-methods.js'
            ],
            dest: magento_jsFolder+destFolder+'modules.min.js'
        }
    ]
}

```

## Contributors

Patrick Coleman

## License

ISC License