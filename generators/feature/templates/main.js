import angular from "angular"
import <%= featurename %>Module from "./<%= featurename %>.module.js";

angular
    .element(document)
    .ready(() => {
        angular.bootstrap(document, [<%= featurename %>Module]);
    });