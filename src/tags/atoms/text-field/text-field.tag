<text-field>
  
  <input type="text" name="field" value="foo" onkeyup={ updateValue } />

  <p>Value of the input is: { val }</p>

  updateValue(e) {
    this.val = this.field.value
  }

</text-field>
