import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: resolve => require(['@/components/Hello/Hello.vue'], resolve)
    }
    // ,{
    //   // path: '/',
    //   path: '/login',
    //   name: 'login',
    //   component: resolve => require(['@/components/login/login.vue'], resolve)
    // },{
    //   path: '/TRFScanning',
    //   name: 'TRFScanning',
    //   component: resolve => require(['@/components/TRFScanning/TRFScanning.vue'], resolve)
    // },{
    //   path: '/TRFScanningUpload',
    //   name: 'TRFScanningUpload',
    //   component: resolve => require(['@/components/TRFScanningUpload/TRFScanningUpload.vue'], resolve)
    // },
    // {
    //   path: '/accountModel',
    //   name: 'accountModel',
    //   component: resolve => require(['@/account/accountModel/accountModel.vue'], resolve),
    //   children:[{
    //       path: 'accountNumberList',
    //       name: 'accountNumberList',
    //       component: resolve => require(['@/account/accountNumberList/accountNumberList.vue'], resolve)
    //   }, {
    //     path: 'addAccount',
    //     name: 'addAccount',
    //     component: resolve => require(['@/account/addAccount/addAccount.vue'], resolve)
    //   }]
    // },
    // {
    //   path: '/',
    //   name: 'master',
    //   component: resolve => require(['@/components/master/master.vue'], resolve),
    //   children:[{
    //     path: 'specimen',
    //     name: 'specimen',
    //     component: resolve => require(['@/components/specimen/specimen.vue'], resolve),
    //     meta: {
    //       title: 'specimen',
    //       keepAlive: true
    //     }
    //   },{
    //     path: '/customerService',
    //     name: 'customerService',
    //     component: resolve => require(['@/components/customerService/customerService.vue'], resolve),
    //     meta: {
    //       title: 'customerService',
    //       keepAlive: true
    //     }
    //   },{
    //     path: '/institutionAccount',
    //     name: 'institutionAccount',
    //     component: resolve => require(['@/components/institutionAccount/institutionAccount.vue'], resolve),
    //     meta: {
    //       title: 'institutionAccount',
    //       keepAlive: true
    //     }
    //   },{
    //     path: '/institutionSetup',
    //     name: 'institutionSetup',
    //     component: resolve => require(['@/components/institutionSetup/institutionSetup.vue'], resolve),
    //     meta: {
    //       title: 'institutionSetup',
    //       keepAlive: true
    //     }
    //   },{
    //     path: '/physicianAccount',
    //     name: 'physicianAccount',
    //     component: resolve => require(['@/components/physicianAccount/physicianAccount.vue'], resolve),
    //     meta: {
    //       title: 'physicianAccount',
    //       keepAlive: true
    //     }
    //   },{
    //     path: '/reportDelivery',
    //     name: 'reportDelivery',
    //     component: resolve => require(['@/components/reportDelivery/reportDelivery.vue'], resolve),
    //     meta: {
    //       title: 'reportDelivery',
    //       keepAlive: true
    //     }
    //   },{
    //     path: '/clinicAccount',
    //     name: 'clinicAccount',
    //     component: resolve => require(['@/components/clinicAccount/clinicAccount.vue'], resolve),
    //     meta: {
    //       title: 'clinicAccount',
    //       keepAlive: true
    //     }
    //   },{
    //     path: '/InstitutionSamewithClinic',
    //     name: 'InstitutionSamewithClinic',
    //     component: resolve => require(['@/components/InstitutionSamewithClinic/InstitutionSamewithClinic.vue'], resolve),
    //     meta: {
    //       title: 'InstitutionSamewithClinic',
    //       keepAlive: true
    //     }
    //   },{
    //     path: '/addFollowUp',
    //     name: 'addFollowUp',
    //     component: resolve => require(['@/components/addFollowUp/addFollowUp.vue'], resolve),
    //     meta: {
    //       title: 'addFollowUp',
    //       keepAlive: true
    //     }
    //   },{
    //     path: '/export',
    //     name: 'export',
    //     component: resolve => require(['@/components/export/export.vue'], resolve),
    //     meta: {
    //       title: 'export',
    //       keepAlive: true
    //     }
    //   },{
    //     path: '/InvoiceExport',
    //     name: 'InvoiceExport',
    //     component: resolve => require(['@/components/InvoiceExport/InvoiceExport.vue'], resolve),
    //     meta: {
    //       title: 'InvoiceExport',
    //       keepAlive: true
    //     }
    //   },{
    //     path: '/followUpRecord',
    //     name: 'followUpRecord',
    //     component: resolve => require(['@/components/followUpRecord/followUpRecord.vue'], resolve),
    //     meta: {
    //       title: 'followUpRecord',
    //       keepAlive: true
    //     }
    //   },{
    //     path: '/fillinMemberInformation',
    //     name: 'fillinMemberInformation',
    //     component: resolve => require(['@/components/fillinMemberInformation/fillinMemberInformation.vue'], resolve),
    //     meta: {
    //       title: 'fillinMemberInformation',
    //       keepAlive: true
    //     }
    //   },{
    //     path: '/resultsFollowup',
    //     name: 'resultsFollowup',
    //     component: resolve => require(['@/components/resultsFollowup/resultsFollowup.vue'], resolve),
    //     meta: {
    //       title: 'resultsFollowup',
    //       keepAlive: true
    //     }
    //   },{
    //     path: '/membership',
    //     name: 'membership',
    //     component: resolve => require(['@/components/membership/membership.vue'], resolve),
    //     meta: {
    //       title: 'membership',
    //       keepAlive: true
    //     }
    //   },{
    //     path: '/membershipDetails',
    //     name: 'membershipDetails',
    //     component: resolve => require(['@/components/membershipDetails/membershipDetails.vue'], resolve),
    //     meta: {
    //       title: 'membershipDetails',
    //       keepAlive: true
    //     }
    //   },{
    //     path: '/doctorInformation',
    //     name: 'doctorInformation',
    //     component: resolve => require(['@/components/doctorInformation/doctorInformation.vue'], resolve),
    //     meta: {
    //       title: 'doctorInformation',
    //       keepAlive: true
    //     }
    //   },{
    //     path: '/partneringLab',
    //     name: 'partneringLab',
    //     component: resolve => require(['@/components/partneringLab/partneringLab.vue'], resolve),
    //     meta: {
    //       title: 'partneringLab',
    //       keepAlive: true
    //     }
    //   },{
    //     path: 'addSpecimen',
    //     name: 'addSpecimen',
    //     component: resolve => require(['@/components/addSpecimen/addSpecimen.vue'], resolve),
    //     meta: {
    //       title: 'addSpecimen',
    //       keepAlive: true
    //     }
    //   },{
    //     path: 'specimenDetails',
    //     name: 'specimenDetails',
    //     component: resolve => require(['@/components/specimenDetails/specimenDetails.vue'], resolve),
    //     meta: {
    //       title: 'specimenDetails',
    //       keepAlive: true
    //     }
    //   },{
    //     path: 'reagent',
    //     name: 'reagent',
    //     component: resolve => require(['@/components/reagent/reagent.vue'], resolve),
    //     meta: {
    //       title: 'reagent',
    //       keepAlive: true
    //     }
    //   },{
    //     path: 'addReagent',
    //     name: 'addReagent',
    //     component: resolve => require(['@/components/addReagent/addReagent.vue'], resolve),
    //     meta: {
    //       title: 'addReagent',
    //       keepAlive: true
    //     }
    //   },{
    //     path: 'reagentDetails',
    //     name: 'reagentDetails',
    //     component: resolve => require(['@/components/reagentDetails/reagentDetails.vue'], resolve),
    //     meta: {
    //       title: 'reagentDetails',
    //       keepAlive: true
    //     }
    //   },{
    //     path: 'addNewLot',
    //     name: 'addNewLot',
    //     component: resolve => require(['@/components/addNewLot/addNewLot.vue'], resolve),
    //     meta: {
    //       title: 'addNewLot',
    //       keepAlive: true
    //     }
    //   },{
    //     path: 'ReagentDetailsBatches',
    //     name: 'ReagentDetailsBatches',
    //     component: resolve => require(['@/components/ReagentDetailsBatches/ReagentDetailsBatches.vue'], resolve),
    //     meta: {
    //       title: 'ReagentDetailsBatches',
    //       keepAlive: true
    //     }
    //   },{
    //     path: 'labReport',
    //     name: 'labReport',
    //     component: resolve => require(['@/components/labReport/labReport.vue'], resolve),
    //     meta: {
    //       title: 'labReport',
    //       keepAlive: true
    //     }
    //   },{
    //     path: 'reportSigning',
    //     name: 'reportSigning',
    //     component: resolve => require(['@/components/reportSigning/reportSigning.vue'], resolve),
    //     meta: {
    //       title: 'reportSigning',
    //       keepAlive: true
    //     }
    //   },{
    //     path: 'printExport',
    //     name: 'printExport',
    //     component: resolve => require(['@/components/printExport/printExport.vue'], resolve),
    //     meta: {
    //       title: 'printExport',
    //       keepAlive: true
    //     }
    //   },{
    //     path: 'printList',
    //     name: 'printList',
    //     component: resolve => require(['@/components/printList/printList.vue'], resolve),
    //     meta: {
    //       title: 'printList',
    //       keepAlive: true
    //     }
    //   },{
    //     path: 'printLabels',
    //     name: 'printLabels',
    //     component: resolve => require(['@/components/printLabels/printLabels.vue'], resolve),
    //     meta: {
    //       title: 'printLabels',
    //       keepAlive: true
    //     }
    //   },{
    //     path: 'batchPrintLabels',
    //     name: 'batchPrintLabels',
    //     component: resolve => require(['@/components/batchPrintLabels/batchPrintLabels.vue'], resolve),
    //     meta: {
    //       title: 'batchPrintLabels',
    //       keepAlive: true
    //     }
    //   },{
    //     path: 'labProcess',
    //     name: 'labProcess',
    //     component: resolve => require(['@/components/labProcess/labProcess.vue'], resolve),
    //     meta: {
    //       title: 'labProcess',
    //       keepAlive: true
    //     }
    //   },{
    //     path: 'plasmaLsolation',
    //     name: 'plasmaLsolation',
    //     component: resolve => require(['@/components/plasmaLsolation/plasmaLsolation.vue'], resolve),
    //     meta: {
    //       title: 'plasmaLsolation',
    //       keepAlive: true
    //     }
    //   },{
    //     path: 'createBatch',
    //     name: 'createBatch',
    //     component: resolve => require(['@/components/createBatch/createBatch.vue'], resolve),
    //     meta: {
    //       title: 'createBatch',
    //       keepAlive: true
    //     }
    //   },{
    //     path: 'addBatch',
    //     name: 'addBatch',
    //     component: resolve => require(['@/components/addBatch/addBatch.vue'], resolve),
    //     meta: {
    //       title: 'addBatch',
    //       keepAlive: true
    //     }
    //   },{
    //     path: 'batchDetails',
    //     name: 'batchDetails',
    //     component: resolve => require(['@/components/batchDetails/batchDetails.vue'], resolve),
    //     meta: {
    //       title: 'batchDetails',
    //       keepAlive: true
    //     }
    //   },{
    //     path: 'sampleRequests',
    //     name: 'sampleRequests',
    //     component: resolve => require(['@/components/sampleRequests/sampleRequests.vue'], resolve),
    //     meta: {
    //       title: 'sampleRequests',
    //       keepAlive: true
    //     }
    //   },{
    //     path: 'approvalRequests',
    //     name: 'approvalRequests',
    //     component: resolve => require(['@/components/approvalRequests/approvalRequests.vue'], resolve),
    //     meta: {
    //       title: 'approvalRequests',
    //       keepAlive: true
    //     }
    //   },{
    //     path: 'batchRequests',
    //     name: 'batchRequests',
    //     component: resolve => require(['@/components/batchRequests/batchRequests.vue'], resolve),
    //     meta: {
    //       title: 'batchRequests',
    //       keepAlive: true
    //     }
    //   },{
    //     path: 'problemBatch',
    //     name: 'problemBatch',
    //     component: resolve => require(['@/components/problemBatch/problemBatch.vue'], resolve),
    //     meta: {
    //       title: 'problemBatch',
    //       keepAlive: true
    //     }
    //   },{
    //     path: '/TRFEntry',
    //     name: 'TRFEntry',
    //     component: resolve => require(['@/components/TRFEntry/TRFEntry.vue'], resolve),
    //     meta: {
    //       title: 'TRFEntry',
    //       keepAlive: true
    //     }
    //   },{
    //     path: '/TRFVerification',
    //     name: 'TRFVerification',
    //     component: resolve => require(['@/components/TRFVerification/TRFVerification.vue'], resolve),
    //     meta: {
    //       title: 'TRFVerification',
    //       keepAlive: true
    //     }
    //   },{
    //     path: '/patientInformation',
    //     name: 'patientInformation',
    //     component: resolve => require(['@/components/patientInformation/patientInformation.vue'], resolve),
    //     meta: {
    //       title: 'patientInformation',
    //       keepAlive: true
    //     }
    //   },{
    //     path: '/processCreateBatch',
    //     name: 'processCreateBatch',
    //     component: resolve => require(['@/components/processCreateBatch/processCreateBatch.vue'], resolve),
    //     meta: {
    //       title: 'processCreateBatch',
    //       keepAlive: true
    //     }
    //   },{
    //     path: '/unfinished',
    //     name: 'unfinished',
    //     component: resolve => require(['@/components/unfinished/unfinished.vue'], resolve),
    //     meta: {
    //       title: 'unfinished',
    //       keepAlive: true
    //     }
    //   },{
    //     path: '/resultsReview',
    //     name: 'resultsReview',
    //     component: resolve => require(['@/components/resultsReview/resultsReview.vue'], resolve),
    //     meta: {
    //       title: 'resultsReview',
    //       keepAlive: true
    //     }
    //   },{
    //     path: '/pipelineResultsReview',
    //     name: 'pipelineResultsReview',
    //     component: resolve => require(['@/components/pipelineResultsReview/pipelineResultsReview.vue'], resolve),
    //     meta: {
    //       title: 'pipelineResultsReview',
    //       keepAlive: true
    //     }
    //   },{
    //     path: '/extraction',
    //     name: 'extraction',
    //     component: resolve => require(['@/components/extraction/extraction.vue'], resolve),
    //     meta: {
    //       title: 'extraction',
    //       keepAlive: true
    //     }
    //   },{
    //     path: '/batchSettingsPage',
    //     name: 'batchSettingsPage',
    //     component: resolve => require(['@/components/batchSettingsPage/batchSettingsPage.vue'], resolve),
    //     meta: {
    //       title: 'batchSettingsPage',
    //       keepAlive: true
    //     }
    //   },{
    //     path: '/libraryPrep',
    //     name: 'libraryPrep',
    //     component: resolve => require(['@/components/libraryPrep/libraryPrep.vue'], resolve),
    //     meta: {
    //       title: 'libraryPrep',
    //       keepAlive: true
    //     }
    //   },{
    //     path: '/targetCapture',
    //     name: 'targetCapture',
    //     component: resolve => require(['@/components/targetCapture/targetCapture.vue'], resolve),
    //     meta: {
    //       title: 'targetCapture',
    //       keepAlive: true
    //     }
    //   },{
    //     path: '/sequencing',
    //     name: 'sequencing',
    //     component: resolve => require(['@/components/sequencing/sequencing.vue'], resolve),
    //     meta: {
    //       title: 'sequencing',
    //       keepAlive: true
    //     }
    //   },{
    //     path: '/createBatchDetails',
    //     name: 'sequecreateBatchDetailscing',
    //     component: resolve => require(['@/components/createBatchDetails/createBatchDetails.vue'], resolve),
    //     meta: {
    //       title: 'createBatchDetails',
    //       keepAlive: true
    //     }
    //   }]
    // }
  ]
})
