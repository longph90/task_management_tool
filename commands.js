!function(){"use strict";Office.onReady((function(){})),Office.actions.associate("action",(function(e){var i,o={type:Office.MailboxEnums.ItemNotificationMessageType.InformationalMessage,message:"Performed action.",icon:"Icon.80x80",persistent:!0};null===(i=Office.context.mailbox.item)||void 0===i||i.notificationMessages.replaceAsync("ActionPerformanceNotification",o),e.completed()}))}();
//# sourceMappingURL=commands.js.map