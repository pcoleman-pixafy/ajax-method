# Synopsis #

Generic AJAX methods of get and set (GET and POST) that get attached to the pix namespace. Once it has been added to the Gruntfile as referenced below, you will have access to the object under pix.ajax.

### Methods ###
#### get ####
* Type: Function
+ Params: options, success function, failure function
    + Options:
        * dataType: 'json'
        * url: null
        * data: null
    + Success:
        * function(data){}
    + Failure:
        * function(textStatus, errorThrown){}
#### set ####
* Type: Function
+ Params: options, success function, failure function
    + Options:
        * dataType: 'json'
        * url: null
        * data: null
    + Success:
        * function(data){}
    + Failure:
        * function(textStatus, errorThrown){}

## Installation ##
1. Run npm install "git+ssh://bitbucket.org:pixafymodules/pix-ajax-method.git"
2. Add 'node_modules/ajax-methods/ajax-methods.js' to your Gruntfile in the uglify config.
    *  If you are using the PRTG Theme as your base you can skip step 2 as it will automatically be included.
3. Run 'grunt uglify' so that the file gets included in your minified module.


```
#!javascript
node_modules: {
    options: {
        mangle: false,
        sourceMap: true
    },
    files: [
        {
            src: [
                'node_modules/pix-**/*.js',
                '!node_modules/pix-**/Gruntfile.js'
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