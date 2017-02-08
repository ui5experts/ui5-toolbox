sap.ui.define([
  'sap/ui/core/mvc/Controller'
], function (Controller) {

  'use strict';

  return Controller.extend('ui5experts.toolbox.controller.BaseController', {

    getText: function (sKey, aParams) {
      return this.getOwnerComponent().getModel('i18n').getResourceBundle().getText(sKey, aParams);
    }

  });
});
