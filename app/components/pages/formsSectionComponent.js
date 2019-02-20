"use strict";
module.exports = angular.module('formsSectionComponent', [])
    .component('formsSection', {
        controller: ['$scope', 'appService', 'ipCookie',
            function ($scope, appService, ipCookie) {

                /*
                    INJECT SERVICES
                */
                $scope.appService = appService;
                $scope.ipCookie = ipCookie;

                this.$onInit = () => {
                    $scope.form = appService.createForm('test-form');
                };

                this.$onDestroy = () => {
                    appService.deleteForm('test-form');
                };
            }],
        template: `
            <div class="card">
                  <!-- Form -->
                  <div ng-form="form.config">
                  
                       <!-- Add angular form config to form object -->
                       <!--<div ng-init="form.config = this.test"></div>-->
                       <!-- Add angular form config to form object -->
                       
                      <!-- Form inputs-->
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="inputEmail4">Email</label>
                          <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                        </div>
                        <div class="form-group col-md-6">
                          <label for="inputPassword4">Password</label>
                          <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="inputAddress">Address</label>
                        <input required type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                      </div>
                      <div class="form-group">
                        <label for="inputAddress2">Address 2</label>
                        <input ng-model="form.data.address2" required type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="inputCity">City</label>
                          <input type="text" class="form-control" id="inputCity">
                        </div>
                        <div class="form-group col-md-4">
                          <label for="inputState">State</label>
                          <select id="inputState" class="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                          </select>
                        </div>
                        <div class="form-group col-md-2">
                          <label for="inputZip">Zip</label>
                          <input type="text" class="form-control" id="inputZip">
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="form-check">
                          <input required class="form-check-input" type="checkbox" id="gridCheck" ng-model="form.data.check">
                          <label class="form-check-label" for="gridCheck">
                            Check me out
                          </label>
                        </div>
                      </div>
                      <!-- Form inputs -->
                      
                      <!-- Submit button -->
                      <button type="submit" ng-click="appService.submitTest()" class="btn btn-primary">Sign in</button>
                      <!-- Submit button -->
                  </div>
                  <!-- Form -->
                  
                  <div class="debug" ng-if="ipCookie('debug')">
                  
                        <button ng-click="appService.deleteForm('test-form')">Clear form</button>
                        <button ng-click="appService.setSubmitted('test-form')">Set submitted</button>
                        <!--{{this.test}}-->
                        <pre>{{appService.form('test-form') | json}}<pre>
                        
                  </div>
                  
            </div>
		`
    });