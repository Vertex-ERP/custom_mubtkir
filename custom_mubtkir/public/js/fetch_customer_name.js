frappe.ui.form.on('Customer', {
    after_save: function(frm) {
        if (!frm.doc.customer_name_in_arabic) {
            frm.set_value('customer_name_in_arabic', frm.doc.customer_name);
        }
    }
});
