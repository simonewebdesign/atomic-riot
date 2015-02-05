<date-range>
  
  <input id="startDate" type="date" max={ end } onchange={ updateMinEndDate } />

  <input id="endDate" type="date" min={ start } max={ opts.max } onchange={ updateMaxStartDate } />

  this.opts.max = "2015-03-02"

  updateMinEndDate(e) {
    this.start = this.startDate.value
  }

  updateMaxStartDate(e) {
    this.end = this.endDate.value
  }

</date-range>
