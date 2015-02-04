riot.tag('date-range', '<input id="startDate" type="date" max="{ end }" onchange="{ updateMinEndDate }"> <input id="endDate" type="date" min="{ start }" max="{ opts.max }" onchange="{ updateMaxStartDate }">', function(opts) {

  this.opts.max = "2015-03-02"

  this.updateMinEndDate = function(e) {
    this.start = this.startDate.value
  }.bind(this);

  this.updateMaxStartDate = function(e) {
    this.end = this.endDate.value
  }.bind(this);


});
