/**
 * Created by @im on 7/15/2017.
 */

(function() {
    "use strict";

    var module = angular.module("SearchWidgetApp");

    module.component("clientListItem", {
        templateUrl: "app/components/client-list-item.component.html",
        bindings: {
            clientInfo: "<"
        },
        controllerAs: "model",
        controller: function() {
            var model = this;
        }
    });


} ());