define(['knockout'], function (ko) {
  function ScheduleViewModel(data) {
    function Item() {
      var self = this;
      self.volume = ko.observable(0);
    }

    var self = this;
     
    self.errors = ko.observableArray([]);
    self.warnings = ko.observableArray([]);

    self.firstName = ko.observable('');
    self.lastName = ko.observable('');

    self.fullName = ko.pureComputed(function () {
        return self.firstName() + ' ' + self.lastName();
    });

    self.items = ko.observableArray([
      new Item(),
      new Item(),
      new Item()
    ]);

    self.addError = function () {
      self.errors.push('New Error');
    };

    self.addWarning = function () {
      self.errors.push('New Error');
    };

    self.submit = function () {
    };
  }

  return ScheduleViewModel;
});