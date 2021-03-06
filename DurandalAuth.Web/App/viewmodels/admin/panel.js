﻿define(['services/unitofwork'], function (unitofwork) {
    var viewmodel = {
        userprofiles: ko.observableArray(),
        activate: function () {
            var self = this,
                uow = unitofwork.create();
            ga('send', 'pageview', { 'page': window.location.href, 'title': document.title });
            return  uow.userprofiles.all().then(function (data) {
                self.userprofiles(data);
            });
        }
    }

    return viewmodel;
});