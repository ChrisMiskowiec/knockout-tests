define(
  [
    'knockout',
    'text!status-icon.html'
  ],
  function (ko, htmlString) {
    function StatusIconViewModel(params) {
      var self = this;

      self.errors = params.errors || ko.obserableArray([]);
      self.warnings = params.warnings || ko.observableArray([]);

      self.status = ko.pureComputed(function () {
        if (self.errors().length > 0) {
          return 'error';
        } else if (self.warnings().length > 0) {
          return 'warning';
        } else {
          return 'ok';
        }
      });

      self.cycle = function () {
        if (self.status() == 'error') {
          self.errors.pop();
        } else if (self.status() == 'warning') {
          self.warnings.pop();
          self.errors.push({});
        } else {
          self.warnings.push({});
        }
      };
    }

    return {
      viewModel: StatusIconViewModel,
      template: htmlString
    };
  });