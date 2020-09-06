'use strict';


const _ = require('lodash');

const assessmentStore = {

  assessmentCollection: require('./assessment-store.json').assessmentCollection,

  getAllAssessments() {
    return this.assessmentCollection;
  },

  getAssessmentlist(id) {
    return _.find(this.assessmentCollection, { id: id });
  },

  removeAssessment(id, assessmentId) {
    const assessmentlist = this.getAssessmentlist(id);
    _.remove(assessmentlist.assessment, { id: assessmentId });
  },

  addAssessment(id, assessment) {
    const assessmentlist = this.getAssessmentlist(id);
    assessmentlist.assessment.push(assessment);
  },

  addAssessmentlist(assessmentlist) {
    this.assessmentCollection.push(assessmentlist);
  },

  removeAssessmentlist(id) {
    _.remove(this.assessmentCollection, { id: id });
  },


};

module.exports = assessmentStore;

