"use strict";

const logger = require('../utils/logger');
const assessmentStore = require('../models/assessment-store.js');
const uuid = require('uuid');

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const viewData = {
      title: 'Dashboard',
      assessments: assessmentStore.getAllAssessments()
    };
    logger.info('about to render', assessmentStore.getAllAssessments());
    response.render("dashboard", viewData);
  },
  deleteAssessmentlist(request, response) {
    const assessmentlistId = request.params.id;
    logger.debug(`Deleting Assessmentlist ${assessmentlistId}`);
    assessmentStore.removeAssessmentlist(assessmentlistId);
    response.redirect('/dashboard');
  },


  addAssessmentlist(request, response) {
    const newAssessmentList = {
      id: uuid.v1(),
      memberName: request.body.memberName,
      assessments: [],
    };
    assessmentStore.addAssessmentlist(newAssessmentList);
    response.redirect('/dashboard')
  }



};

module.exports = dashboard;