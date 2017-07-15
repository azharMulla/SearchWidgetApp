/**
 * Created by @im on 7/15/2017.
 */

(function() {
    "use strict";

    var module = angular.module("SearchWidgetApp",[]);

    // Filter, which will search for entered text in Name and Policy Number
    module.filter('nameAndPolicyFilter', function(){
        return function(list,searchItem){
            return list.filter(function(item){
                return (item.name.toLowerCase().indexOf(searchItem) > -1 || item.policyNum.toLowerCase().indexOf(searchItem) > -1)
            });
        }
    });

}());