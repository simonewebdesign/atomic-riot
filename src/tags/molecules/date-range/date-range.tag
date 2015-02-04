<date-range>
  
  <input id="startDate" type="date" onchange={ updateMinEndDate } />

  <input id="endDate" type="date" min={ start } max="2015-03-02" />

  updateMinEndDate(e) {
    console.log("[date-range.js] updateMinEndDate() - event: ", e)
    this.start = this.startDate.value
  }

</date-range>
