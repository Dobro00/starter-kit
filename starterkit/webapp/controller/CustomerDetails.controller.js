sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "stk/starterkit/model/formatter",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Formatter,Fragment) {
        "use strict";

        return Controller.extend("ns.starterkit.controller.CustomerDetails", {
            formatter:Formatter,
            onInit: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("CustomerDetails").attachPatternMatched(this._onPatternMatched, this);
            }
            ,
            _onPatternMatched: function (oEvent) {
                this.getView().bindElement({
                    path: "/Customers('" + oEvent.getParameter("arguments").CustomerID + "')",
                     parameters: { expand: 'Orders, Orders/Employee'
                     }
                });
            },
            DisplayContactInfo: function (){
                var oView = this.getView();
                if (!this.pDialog) {

                    this.pDialog = this.loadFragment({

                        name: "stk.starterkit.view.ContactInfoDialog"

                    });

                }

                this.pDialog.then(function(oDialog) {

                    oDialog.open();

                });

            },
            CloseFragment: function (oEvent){
                this.byId("contactDialog").close();
            },

            ReturnToCustomerList: function (oEvent){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("CustomersList")
            }
        });
    })