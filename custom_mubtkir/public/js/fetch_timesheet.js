frappe.ui.form.on("Sales Invoice", {

    refresh: function(frm) {
        let checkButton = setInterval(() => {
            let buttonExists = frm.custom_buttons && frm.custom_buttons["Fetch Timesheet"];
            if (buttonExists) {
                frm.remove_custom_button("Fetch Timesheet");
                clearInterval(checkButton);
            }
        }, 500);
    } 
});
