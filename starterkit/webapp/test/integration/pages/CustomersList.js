sap.ui.define([
    'sap/ui/test/Opa5',
    "sap/ui/test/actions/Press"
], function (Opa5, Press) {
    'use strict';
    var sViewName = "CustomersList";
    Opa5.createPageObjects({
        onTheCustomersList: {
            actions: {
                iPressCreate: function(){
                    return this.waitFor({
                        controlType: "sap.m.Button",
                        matchers: new sap.ui.test.matchers.I18NText({
                            key: "CreateNewCustomer",
                            modelName: "i18n",
                            propertyName: "text"
                        }),
                        viewName: sViewName,
                        actions: new Press(),
                        errorMessage: "Did not find the button"
                    })
                }
            },
            assertions: {

                iShouldSeeTheCarousel: function () {
                    return this.waitFor({
                        id: "CustomersListCarousel",
                        viewName: sViewName,
                        success: function () {
                            Opa5.assert.ok(true, "The carousel is displayed")
                        },
                        errorMessage: "Did not find the carousel"
                    })
                },
                iShouldSeeTheTable: function () {
                    return this.waitFor({
                        controlType: "sap.m.Table",
                        viewName: sViewName,
                        success: function (oTable) {
                            Opa5.assert.ok(true, "The table is displayed!");
                            var iItemsCount = oTable[0].getItems().length;
                            Opa5.assert.notStrictEqual(iItemsCount, 0, "Table has items:" + iItemsCount)
                        },
                        errorMessage: "Did not find the table"
                    })
                },
                iShouldSeeTheCreateButton: function () {
                    return this.waitFor({
                        controlType: "sap.m.Button",
                        matchers: new sap.ui.test.matchers.I18NText({
                            key: "CreateNewCustomer",
                            modelName: "i18n",
                            propertyName: "text"
                        }),
                        viewName: sViewName,
                        success: function () {
                            Opa5.assert.ok(true, "The create button is displayed")
                        },
                        errorMessage: "Did not find the button"
                    })
                },
                iShouldSeeThePage: function () {
                    return this.waitFor({
                        controlType: "sap.m.Page",
                        viewName: "CreateCustomer",
                        success: function () {
                            Opa5.assert.ok(true, "The page is displayed")
                        },
                        errorMessage: "Did not found the page"
                    })
                }
            }
        }
    })
});