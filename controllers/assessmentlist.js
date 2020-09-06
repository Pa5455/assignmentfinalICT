'use strict';

const logger = require('../utils/logger');
const assessmentStore = require('../models/assessment-store');
const uuid = require('uuid');

const assessmentlist = {
  index(request, response) {
    const assessmentlistId = request.params.id;
    logger.debug('Assessmentlist id = ', assessmentlistId);
    const viewData = {
      title: 'Assessmentlist',
      assessmentlist: assessmentStore.getAssessmentlist(assessmentlistId),
    };
    response.render('assessmentlist', viewData);
  },


  deleteAssessment(request, response) {
    const assessmentlistId = request.params.id;
    const assessmentId = request.params.assessmentid;
    logger.debug(`Deleting Assessment ${assessmentId} from Assessmentlist ${assessmentlistId}`);
    assessmentStore.removeAssessment(assessmentlistId, assessmentId);
    response.redirect('/assessmentlist/' + assessmentlistId);
  },

  addAssessment(request, response) {
    const assessmentlistId = request.params.id;
    const assessmentlist = assessmentStore.getAssessmentlist(assessmentlistId);
    const newAssessment = {
      id: uuid.v1(),
      weight: request.body.weight,
      chest: request.body.chest,
      thigh: request.body.thigh,
      upperArm: request.body.upperArm,
      waist: request.body.waist,
      hips: request.body.hips,
    };
    assessmentStore.addAssessment(assessmentlistId, newAssessment);
    response.redirect('/assessmentlist/' + assessmentlistId);

  },

};

module.exports = assessmentlist;