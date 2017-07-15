/**
 * Created by @im on 7/15/2017.
 */

(function() {
    "use strict";

    var module = angular.module("SearchWidgetApp");

    // Function to fetch the data from SERVER (in this case from a JSON file)
    function fetchClients($http) {
        return $http.get("app/dummy/data.json")
            .then(function(response) {
                return response.data;
            });
    }

    // Controller for SearchPanel
    function controller($http) {
        var model = this;
        model.clientList = [];
        model.inputSearchText = '';

        model.$onInit = function() {
            fetchClients($http).then(function(clientList) {
                model.clientList = clientList;
            });
        };
    }

    // Component declaration
    module.component("searchPanel", {
        templateUrl: "app/components/search-panel.component.html",
        controllerAs: "model",
        controller: ["$http", controller]
    });

} ());
