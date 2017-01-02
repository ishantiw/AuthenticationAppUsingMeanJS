/*
Creating an Angular Directive
we need a parser because to convert angular expression to functions so that we can manually evaluate password for this directive
*/
export function CompareToDirective($parse) {
    /*
    we return an object which defines our directive but before we import our directive lets register our directive in index.module.js */
    "ngInject"
    return {
        require: "ngModel",//tell angular that we need to refer to the ng-model
        link: function(scope, elm, attrs, ngModel) {//link function to refer to the several objects
            var mainModel = $parse(attrs.compareTo);
            var secondModel = $parse(attrs.ngModel);

            scope.$watch(attrs.ngModel, newValue => {
                ngModel.$setValidity(attrs.name, newValue == mainModel(scope));
            });

            scope.$watch(attrs.compareTo, newValue => {
                ngModel.$setValidity(attrs.name, newValue == secondModel(scope));
            });
        }

    }

}
