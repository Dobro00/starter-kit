sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("stk.starterkit.controller.Performance", {
            onInit: function () {

            },
            ReturnToCustomerList: function (oEvent){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("CustomersList")
            },
            onMotivate: function (oEvent){
                var oEmployee = oEvent.getSource().getBindingContext().getObject();
                var sEmail = oEmployee.FirstName + "." + oEmployee.LastName + "@company.com";
                var sSubject = "Good Job!"
                var sBody = "You are doing well thank you!";
                sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody)
            },
            onFire: function (oEvent){
                var oEmployee = oEvent.getSource().getBindingContext().getObject();
                var sEmail = oEmployee.FirstName + "." + oEmployee.LastName + "@company.com";
                var sSubject = "Horrible Job!"
                $.ajax({
                    url: "/generate_insult.php",
                    data:{
                        lang: "en",
                        type:"json"
                    },
                    success: function (oResponse) {
                        var sBody = oResponse.insult;
                        sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody)
                    }})

            // var oModel = new sap.ui.model.json.JSONModel();
            // oModel.loadData("generate_insult.php", {
            //     lang: "en",
            //     type: "json"
            // }).then(function () {
            //     var sBody = oModel.getData().insult;
            //     sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody);
            // })
        }})
    });