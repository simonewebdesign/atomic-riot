riot.tag('date-range', '<input id="startDate" type="date" onchange="{ updateMinEndDate }"> <input id="endDate" type="date" min="{ start }" max="2015-03-02">', function(opts) {

  this.updateMinEndDate = function(e) {
    console.log("[date-range.js] updateMinEndDate() - event: ", e)
    this.start = this.startDate.value
  }.bind(this);


});
