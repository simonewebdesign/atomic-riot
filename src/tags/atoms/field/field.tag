<field>

  <label if={ label_text } id={ id }>
    label_text
  </label>

  <input type={ type } id={ id } name={ id } value={ val } onkeyup={ updateValue } />

  this.type = opts.type
  this.label_text = opts.label_text

  updateValue(e) {
    this.val = this.id.value
  }

</field>
