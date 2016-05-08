define(
  [
    'knockout'
  ], 
  function (ko) {
    ko.bindingHandlers.toggleEdit = {
      init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var value = valueAccessor();

        var $element = $(element);

        var viewTemplate = ko.unwrap(value.viewTemplate);
        var editTemplate = ko.unwrap(value.editTemplate);

        ko.renderTemplate(viewTemplate, viewModel, {}, element);

        $element.focusin(function () {
          ko.renderTemplate(editTemplate, viewModel, {}, element);
        });
        $element.focusout(function () {
          ko.renderTemplate(viewTemplate, viewModel, {}, element);
        });

        return { controlsDescendantBindings: true };
      },
      update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
      }
    };
  });