/* globals QUnit, sinon */

sap.ui.define([
  'ui5experts/toolbox/controller/BaseController',
  'ui5experts/toolbox/test/unit/helper/FakeI18nModel',
  'sap/ui/base/ManagedObject',
  'sap/ui/qunit/qunit-css',
  'sap/ui/qunit/qunit-junit',
  'sap/ui/qunit/qunit-coverage',
  'sap/ui/thirdparty/sinon',
  'sap/ui/thirdparty/sinon-qunit'
], function (BaseController, FakeI18nModel, ManagedObject) {

  'use strict';

  QUnit.module('BaseController - Basic');

  QUnit.test('Test BaseController.js existance', function (assert) {
    assert.ok(BaseController, 'BaseController does not exist');
    assert.equal(BaseController.getMetadata().getName(),
      'ui5experts.toolbox.controller.BaseController', 'BaseController is not a real ' +
      'ui5experts.toolbox.controller.BaseController');
  });


  QUnit.module('BaseController - Helpers', {
    beforeEach: function () {
      this.oBaseController = new BaseController();
      this.oComponentStub = new ManagedObject();
      this.oComponentStub.setModel(new FakeI18nModel({
        key1: '4711'
      }), 'i18n');

      sinon.stub(this.oBaseController, 'getOwnerComponent').returns(this.oComponentStub);
    },

    afterEach: function () {
      this.oBaseController.destroy();
      this.oComponentStub.destroy();
    }
  });

  QUnit.test('Test getText', function (assert) {
    assert.ok(this.oBaseController.getText, 'method getText does not exist.');
    assert.equal(this.oBaseController.getText('key1'), '4711', 'wrong text for key');
    assert.notEqual(this.oBaseController.getText('key2'), 'key2', 'if no then key should returned');
  });

});
