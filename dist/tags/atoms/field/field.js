riot.tag('field', '<label if="{ label_text }" id="{ id }"> label_text </label> <input type="{ type }" id="{ id }" name="{ id }" value="{ val }" onkeyup="{ updateValue }">', function(opts) {

  this.type = opts.type
  this.label_text = opts.label_text

  this.updateValue = function(e) {
    this.val = this.id.value
  }.bind(this);


});
