riot.tag('text-field', '<input type="text" name="field" value="foo" onkeyup="{ updateValue }"> <p>Value of the input is: { val }</p>', function(opts) {

  this.updateValue = function(e) {
    this.val = this.field.value
  }.bind(this);


});
