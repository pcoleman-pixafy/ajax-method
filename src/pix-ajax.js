/**
 * [pixAjax - This sends an XHR with custom params]
 * Modular pattern to make this work with node.js module pattern.
 * @param  {[object]} options [parameter object with settings for the XHR]
 */
import $j from 'jquery';

export default function pixAjax(){
    "use strict";
    
    /**
     * defaults - default Ajax settings.
     * @type {Object}
     */
    var defaults = {
        type: 'GET',
        dataType: 'json',
        url: null,
        data: null
    };

    /**
     * logback - default callback function for Ajax calls
     * @param  {Object / HTML / String} data - data returned via Ajax
     */
    var logback = function(data){
        console.log(data);
    };

    /**
     * failback - callback that runs on fail Ajax call.
     * @param  {String} textStatus - string description of error.
     * @param  {Object} errorThrown - Object holding the error
     */
    var failback = function(textStatus, errorThrown){
        console.error(textStatus);
        console.error(errorThrown);
    };

    /**
     * genericAjax : factory function for creating the get and set methods.
     * @param  {String} type GET or POST
     * @return {Function} generated function
     */
    var genericAjax = function(type){
        return function(options, fn, failFn){
            var opts = $j.extend(true, {}, defaults, options);
            opts.type = !!type ? type : opts.type;

            fn = !!fn && fn instanceof Function ? fn : logback;
            failFn = !!failFn && failFn instanceof Function ? failFn : failback;

            if(!!opts.url){
                $j.ajax(opts)
                .then(
                    //succes / done deffered promise callback
                    function(data, textStatus, jqXHR){
                        if(!!data){
                            fn(data, textStatus, jqXHR);
                        }
                    },
                    //error / failure deffered promise callback
                    function(jqXHR, textStatus, errorThrown){
                        failFn(textStatus, errorThrown, jqXHR);
                    }
                );
            }
            else {
                console.warn('No URL supplied for AJAX call: ');
                console.warn(opts);
            }
        };
    };

    /**
     * Ajax GET
     */
    var _get = (function(){
        return genericAjax('GET');
    })();

    /**
     * Ajax POST (set)
     */
    var _set = (function(){
        return genericAjax('POST');
    })();

    return {
        get: _get,
        set: _set
    };
}