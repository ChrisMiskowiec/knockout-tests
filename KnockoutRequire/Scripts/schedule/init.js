require.config({
  baseUrl: 'Scripts/schedule',
  paths: {
    bindingHandlers: '../bindingHandlers',
    bootstrap: '../bootstrap',
    jquery: '../jquery-2.2.3',
    knockout: '../knockout-3.4.0',
    text: '../text'
  },
  shim: {
    bootstrap: { deps: ['jquery']}
  }
});

require(
  [
    'jquery',
    'knockout',
    'bindingHandlers/toggle-edit',
    'ScheduleViewModel'
  ],
  function ($, ko, toggleEdit, ScheduleViewModel) {
    $(document).ready(function () {
      ko.components.register('status-icon', { require: 'status-icon' });

      ko.applyBindings(new ScheduleViewModel());
    });
  });