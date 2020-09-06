'use strict';


const _ = require('lodash');
const JsonStore = require('./json-store');

const assessmentStore = {

  store: new JsonStore('./models/assessmentlist-store.json', {assessmentCollection: []}),
  collection: 'assessmentCollection',

  getAllAssessments() {
    return this.store.findAll(this.collection);
  },

  getAssessmentlist(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },

  removeAssessment(id, assessmentId) {
    const assessmentlist = this.getAssessmentlist(id);
    const assessments = assessmentlist.assessments;
    _.remove(assessments, { id: assessmentId});
    this.store.save();
  },

  addAssessment(id,assessment) {
    const assessmentlist = this.getAssessmentlist(id);
    assessmentlist.assessments.push(assessment);
    this.store.save();
    
  },

  addAssessmentlist(assessmentlist) {
    this.store.add(this.collection, assessmentlist);
    this.store.save();
  },

  removeAssessmentlist(id) {
    const
    _.remove(this.assessmentCollection, { id: id });
  },


};

module.exports = assessmentStore;

