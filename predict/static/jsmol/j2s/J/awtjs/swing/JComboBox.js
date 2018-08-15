Clazz.declarePackage ("J.awtjs.swing");
Clazz.load (["J.awtjs.swing.AbstractButton"], "J.awtjs.swing.JComboBox", ["JU.SB"], function () {
c$ = Clazz.decorateAsClass (function () {
this.info = null;
this.selectedIndex = 0;
Clazz.instantialize (this, arguments);
}, J.awtjs.swing, "JComboBox", J.awtjs.swing.AbstractButton);
Clazz.makeConstructor (c$, 
function (info) {
Clazz.superConstructor (this, J.awtjs.swing.JComboBox, ["cmbJCB"]);
this.info = info;
}, "~A");
Clazz.defineMethod (c$, "setSelectedIndex", 
function (i) {
this.selectedIndex = i;
{
SwingController.setSelectedIndex(this);
}}, "~N");
Clazz.defineMethod (c$, "getSelectedIndex", 
function () {
return this.selectedIndex;
});
Clazz.defineMethod (c$, "getSelectedItem", 
function () {
return (this.selectedIndex < 0 ? null : this.info[this.selectedIndex]);
});
Clazz.overrideMethod (c$, "toHTML", 
function () {
var sb =  new JU.SB ();
sb.append ("\n<select id='" + this.id + "' class='JComboBox' onchange='SwingController.click(this)'>\n");
for (var i = 0; i < this.info.length; i++) sb.append ("\n<option class='JComboBox_option'" + (i == this.selectedIndex ? "selected" : "") + ">" + this.info[i] + "</option>");

sb.append ("\n</select>\n");
return sb.toString ();
});
});
