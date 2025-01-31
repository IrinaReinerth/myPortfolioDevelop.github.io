(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/irinareinerth/Documents/GitHub/my-portfolio-setup/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "5TFM":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function TFM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row aboutMe scene_element scene_element-fadeinup\">\n    <div class=\"col-12 col-md-6 col-lg-5\">\n      <img [src]=\"myPhotoUrl\" alt=\"Irina Reinerth Portret\">\n    </div>\n    <div class=\"col-12 col-md-6 col-lg-7\">\n        <h4 class=\"mobile-margin-top\">{{myStory}}</h4>\n        <p *ngFor=\"let paragraf of paragrafs\">\n            {{paragraf}}\n        </p>\n    </div>\n</div>\n\n<div class=\"row experience scene_element scene_element-fadeinup\">\n    <div  class=\"col-12 col-md-5\">\n        <h4>EXPERIENCE -</h4>\n        <p *ngFor=\"let experience of experiences\">\n          <span>{{experience.year}} </span>\n          <span>{{experience.name}}</span>\n        </p>\n    </div>\n    <div  class=\"col-12 col-md-5\">\n        <h4 class=\"mobile-margin-top\">EDUCATION -</h4>\n        <p *ngFor=\"let education of educations\">\n          <span>{{education.year}} </span>\n          <span>{{education.name}}</span>\n        </p>\n      </div>\n</div>\n\n<div class=\"row skills scene_element scene_element-fadeinup\">\n  <div class=\"col-12 col-md-5 offset-md-5\"><h4>SKILLS-</h4></div>\n  <p>{{skills}}</p>\n</div>\n";
      /***/
    },

    /***/
    "6AOp":
    /*!**********************************************!*\
      !*** ./src/app/project/project.component.ts ***!
      \**********************************************/

    /*! exports provided: ProjectComponent */

    /***/
    function AOp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectComponent", function () {
        return ProjectComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_project_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./project.component.html */
      "9liH");
      /* harmony import */


      var _project_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./project.component.scss */
      "xMmp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_projects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/projects.service */
      "CoJz");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK"); // import { projection } from '@angular/core/src/render3/instructions';


      var ProjectComponent = /*#__PURE__*/function () {
        function ProjectComponent(route, location, projectsService) {
          _classCallCheck(this, ProjectComponent);

          this.route = route;
          this.location = location;
          this.projectsService = projectsService;
        }

        _createClass(ProjectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = +this.route.snapshot.paramMap.get('id');
            this.getProject();
          }
        }, {
          key: "getProject",
          value: function getProject() {
            var _this = this;

            this.project = this.projectsService.getProject().filter(function (proj) {
              return proj.id === _this.id;
            })[0];
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.location.back();
          }
        }, {
          key: "goNext",
          value: function goNext() {
            var next = this.id - 1;
            this.project = this.projectsService.getProject().filter(function (proj) {
              return proj.id === next;
            })[0];
            this.id = next;
            window.scroll(0, 0);
          }
        }]);

        return ProjectComponent;
      }();

      ProjectComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
        }, {
          type: _services_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"]
        }];
      };

      ProjectComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-project',
        template: _raw_loader_project_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_project_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProjectComponent);
      /***/
    },

    /***/
    "84zG":
    /*!******************************************!*\
      !*** ./src/app/about/about.component.ts ***!
      \******************************************/

    /*! exports provided: AboutComponent */

    /***/
    function zG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./about.component.html */
      "5TFM");
      /* harmony import */


      var _about_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./about.component.scss */
      "ijUo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent() {
          _classCallCheck(this, AboutComponent);

          this.myPhotoUrl = "assets/img/me.jpg";
          this.myStory = "My Story -";
          this.paragrafs = ['I am an Interaction Engineer and Usability specialist with a passion to bring clear logic, good user experience, and a pleasant UI to web-based platforms.', 'I started in 2014 to learn about web technologies namely HTML, CSS, and Javascript. Followed by a Master program in Computer Graphics and Web Design, I deepened my knowledge in Helsinki’s Aalto University with the following courses: human-computer interaction, user-oriented design and usability product design.",     ', 'I am hands on with most popular prototyping and design tools like Adobe CC, Sketch, Figma, Invision, Anima, Craft and I am an active user of design thinking methods and I am used to work in an agile environment.'];
          this.educations = [{
            year: '2016',
            name: 'Aalto University, semester abroad'
          }, {
            year: '2015-2017',
            name: 'ITMO University, M.Sc Computer Grafics & Web-Design'
          }, {
            year: '2009-2015',
            name: 'Peter the Great St.Petersburg Polytechnic University, B. Managment'
          }, {
            year: '2014',
            name: 'Learning center Status, Creation and Promotion of Web Sites'
          }];
          this.experiences = [{
            year: '2018 - 2020',
            name: 'Visual Meta GmBH, Interaction Engineer'
          }, {
            year: '2017',
            name: 'Netcracker , UX&UI Designer'
          }, {
            year: '2017',
            name: 'Avanta Digital, Web & graphic designer'
          }, {
            year: '2012-2017',
            name: 'Reksoft, project coordinator'
          }];
          this.skills = "#HTML #CSS #JavaScript #bootstrap #Angular #Java #AdobeCC #AdobePhotoshop #AdobeIllustrator #Sketch #Figma #InVision #UI #UX #GraphicDesign #GifAnimation #WebDesign #ResponsiveDesign #CrosBrowserDesign #GitHub #Bitbucket #InteliJ";
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutComponent;
      }();

      AboutComponent.ctorParameters = function () {
        return [];
      };

      AboutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-about',
        template: _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_about_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AboutComponent);
      /***/
    },

    /***/
    "8PEf":
    /*!**********************************************!*\
      !*** ./src/app/header/header.component.scss ***!
      \**********************************************/

    /*! exports provided: default */

    /***/
    function PEf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "nav {\n  background-color: #ffffffe6;\n  padding: 1.5rem 0rem;\n}\n\n.logo-wrap {\n  display: flex;\n  flex-direction: row;\n  align-items: baseline;\n}\n\n.navbar-brand {\n  text-transform: uppercase;\n  font-size: 1.75rem;\n}\n\n.active-link {\n  border-bottom: 1px solid #eee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLDJCQUplO0VBS2Ysb0JBQUE7QUFGSjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBREY7O0FBR0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBRUE7RUFDSSw2QkFBQTtBQUNKIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR3aGl0ZVRyYW5zcGFyZW50OiAjZmZmZmZmZTY7XG4kbGlnaHRncmV5OiAjZWVlO1xuXG5uYXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZVRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDEuNXJlbSAwcmVtO1xufVxuLmxvZ28td3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cbi5uYXZiYXItYnJhbmQge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xufVxuLmFjdGl2ZS1saW5rIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGxpZ2h0Z3JleTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "9liH":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project/project.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function liH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<div class=\"projectPage scene_element scene_element-fadeinup\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md-6\">\n      <h4 (click)=\"goBack()\">\n         <a>Portfolio</a> ◂ {{project.title}}\n      </h4>\n      <p *ngFor=\"let description of project.description\">\n        {{description}}\n      </p>\n      <div *ngIf=\"project.photoUrl.length % 2 !== 0\">\n          <h4 >Project tags :</h4>\n          <ul>\n            <li *ngFor=\"let tag of project.projectTags\"># {{tag}}</li>\n          </ul>\n          <!-- <button (click)=\"goNext()\">NEXT PROJECT</button> -->\n      </div>\n    </div>\n\n    <div *ngFor=\"let url of project.photoUrl\" class=\"col-12 col-md-6\">\n        <img [src]=\"url\" [alt]=\"project.alt\">\n    </div>\n    <div class=\"col-12 col-md-6\">\n        <div *ngIf=\"project.photoUrl.length % 2 == 0\">\n            <h4>Project tags :</h4>\n            <ul>\n              <li *ngFor=\"let tag of project.projectTags\"># {{tag}}</li>\n            </ul>\n            <!-- <button (click)=\"goNext()\">NEXT PROJECT</button> -->\n        </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"this.id > 1\" class=\"Nextbtn\">\n     <button (click)=\"goNext()\" class=\"button black is-danger is-large\">Next project</button>\n  </div>\n  <div *ngIf=\"this.id == 1\" class=\"Nextbtn\">\n    <button routerLink=\"/portfolio\" class=\"button white is-danger is-large\" style=\"width: 150px\">Home</button>\n    <button routerLink=\"/about\" class=\"button black is-danger is-large\">About me</button>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BGiY":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function BGiY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row contacts scene_element scene_element-fadeinup\">\n    <div class=\"col-12 offset-md-3 col-md-6\">\n       <img [src]=\"contactPhotoUrl\" alt=\"contact\"/>\n    </div>\n    <div class=\"field\">\n        <a href=\"mailto:irina.reinerth@gmail.com\"><button type=\"submit\" class=\"button black is-danger is-large\">{{buttonNname}}</button></a>\n    </div>\n    <div class=\"flex-social-wrap\">\n      <div class=\"flex\">\n        <svg version=\"1.1\" id=\"locationIco\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n          viewBox=\"0 0 58 58\" style=\"enable-background:new 0 0 58 58;\" xml:space=\"preserve\">\n        <line style=\"fill:none;stroke:#556080;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;\" x1=\"29\" y1=\"28\" x2=\"29\" y2=\"57\"/>\n        <circle style=\"fill:#000;\" cx=\"29\" cy=\"14\" r=\"14\"/>\n        <circle style=\"fill:#fff;\" cx=\"24\" cy=\"10\" r=\"3\"/>\n        </svg>\n        <span>{{myLocation}}</span>\n      </div>\n      <div class=\"flex\">\n          <span *ngFor=\"let social of socials\">\n              <a href=\"{{social.socialIcoLink}}\" target=\"_blank\">\n                <img class=\"socialIco\" [src]=\"social.socialIcoUrl\"/>\n              </a>\n          </span>\n      </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "CoJz":
    /*!**********************************************!*\
      !*** ./src/app/services/projects.service.ts ***!
      \**********************************************/

    /*! exports provided: ProjectsService */

    /***/
    function CoJz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectsService", function () {
        return ProjectsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProjectsService = /*#__PURE__*/function () {
        function ProjectsService() {
          _classCallCheck(this, ProjectsService);

          this.projects = [];
          this.projects.push({
            id: 11,
            coverPhoto: "assets/img/penenza_cover.jpg",
            photoUrl: ["assets/img/penenza_cover.jpg", "assets/img/penenza1.png", "assets/img/penenza2.png"],
            title: "Trader Account UX and UI design",
            alt: "Trader Account UX and UI design",
            description: ["Penenza is a russian project to connect governmental tender investors and borrowers without banks.", "My role as an UX and UI designer was to create a self explanatory investor account and financial detalization sheet", "Specific of the design is that money flow can have 3 states:", "1. accrued interest", "2. paid out", "3. awaiting payment", "4. fully paid", "My job was to simplify for an investor visual definition of these payment states.", "To create the UI I used Figma this time."],
            projectTags: ["Finance Platform", "UI in Figma", "Customer dashboard design"]
          });
          this.projects.push({
            id: 10,
            coverPhoto: "assets/img/Redesign_VM/cover3.jpg",
            photoUrl: ["assets/img/Redesign_VM/cover4.jpg", "assets/img/Redesign_VM/2.prototypingArtboard.jpg", "assets/img/Redesign_VM/3.testingjpg.jpg", "assets/img/Redesign_VM/HP_old2.jpg", "assets/img/Redesign_VM/HP_new3.jpg", "assets/img/Redesign_VM/GP_old2.jpg", "assets/img/Redesign_VM/GP_new3.jpg", "assets/img/Redesign_VM/DP_old3.jpg", "assets/img/Redesign_VM/DP_new4.jpg", "assets/img/Redesign_VM/more.jpg"],
            title: "Cohesive Redesign of the platform",
            alt: "Platform Redesign",
            description: ["goal: Develop a fully new design concept based on the best UX & UI practices", "Elements created for the project: Home page, Grid Page, Product detail page, Inspiration Articles page, Account area", "During this project we followed the 4 steps process: Understanding the user, Ideation, Prototyping, Testing, Repeat.", "1. Understanding: First of all, we conducted Market research, Competitor Analysis, and User Research. We defined 2 types of user behaviors and based on them created several variations of the most common user flows on the platform.", "2. Ideation: After defining the problem and getting more Understanding, we prepared some design Ideas on the paper and conducted the first cards sorting test, where we asked a user to organize UI blocks and share their opinion.", "Before we started the Prototyping phase, we developed our design language with rules of usage for fonts, colors, shapes, and spacing", "3. Prototyping: Every week we were working on one particular page, going through all the steps of Understanding, Prototyping, Testing, and Evaluation. The result of each week was a Hi-Fidelity prototype of a new page in Sketch.", "4. Testing: We were doing user testing in the Understanding phase and Usability test with the prototypes we Created", "5. Next steps: After the design month for MVP 1 we started to develop and AB-test our design. It was the new Home page, Grid page, and Product detail page. It took around a month to develop each page, we had to develop a lot of components from scratch like a new Menu, filters, grid item, pagination, and many more. After that, we started working on the redesign for MVP 2 which was the scope of Inspiration pages, Account Area, Price alert, and Brand page", "Team: 3 designers", "Timeline: 1 month for MVP 1, overall duration of the project - 1 year"],
            projectTags: ["User oriented design", "Responsive design and layout", "E-commerce platform Redesign", "Prototyping in Sketch, Photoshop, Invision", "Design language development", "User testing, usability testing, AB testing", "competitor analysis"]
          });
          this.projects.push({
            id: 9,
            coverPhoto: "assets/img/Andeor.jpg",
            photoUrl: ["assets/img/Andeor.jpg", "assets/img/andeor2.jpg", "assets/img/andeor3.jpg"],
            title: "Dance School web-site design",
            alt: "Dance School Site",
            description: ["Responsive design and layout for a dancing school. Made in dark colours with the use of black and white photos to stand out the chamber theater atmosphere. You will find the main information on the site about dancing classes, groups and projects, reviews, photos, and a contact form."],
            projectTags: ["Dancing school web-design", "Responsive design and layout", "Dark interface", "One page site", "HTML", "CSS", "JavaScript", "Bootstrap"]
          });
          this.projects.push({
            id: 8,
            coverPhoto: "assets/img/night_guide/cover.jpg",
            photoUrl: ["assets/img/night_guide/cover.jpg", "assets/img/night_guide/map.jpg", "assets/img/night_guide/details.jpg", "assets/img/night_guide/prototype.png"],
            title: "Mobile App design for Night Guide",
            alt: "Mobile App design for Night Guide",
            description: ["goal: Create a design for night life mobile application", "Elements created for the project: Name, Logo, Colors, Fonts and Icons", "Pages: Prototype made in Figma. User flow starts on a home screen, where a user sees the logo.\
                The user needs to allow access to the maps for the application to be able to search the clubs around\
                users current location and create the route to the choosen club.\
                The interface consists of 2 view screens: on the map and as a list. From both view types user goes to details\
                page by clicking on the club. Details show number of visitors, current event at the club and avarage check.\
                From details page the user can go back and explore more options or click the button to navigate to the club.\
                At this point the session counts as converted. It helps to collect statistics and attract more clubs/restaurans/bars."],
            projectTags: ["MobileAppDesign", "MaterialDesign", "DarkUI", "ClearUserFlow", "dontMakeMeThink", "Figma"]
          });
          this.projects.push({
            id: 7,
            coverPhoto: "assets/img/Voice_Gift/1.Singers.png",
            photoUrl: ["assets/img/Voice_Gift/1.Singers.png", "assets/img/Voice_Gift/2.Info.png", "assets/img/Voice_Gift/2.1.png", "assets/img/Voice_Gift/3.Confirmation.png", "assets/img/Voice_Gift/3.1Video_preview.png", "assets/img/Voice_Gift/3.2Payment.png", "assets/img/Voice_Gift/4.Payment_confirmed.png", "assets/img/Voice_Gift/Homepage.png"],
            title: "Voice gift service",
            alt: "Voice gift service",
            description: ["Online service offers users to buy a personalised voice message: \
            Song, poem or anything else from a professional artists.\
            I wanted to create a simple and interesting design with a clear user flow starting \
            at Introduction to the service on the Home page, choosing the artist and the message \
            and purchasing the gift. I like the filter system that I came up with in this project. \
            We needed to filter artists by gender and type of art.\
            I was able to create a rotation circle filters around the video block.", "You can find below the animation showing my idea.\
            I like the playful mood that the design brings and how clean design collaborates \
            with the colours in this project."],
            projectTags: ["desktop application", "Purchase user flow", "Playful design", "Music goods and services", "Unusual filter system", "Figma"]
          }); // this.projects.push({
          //     id: 9,
          //     photoUrl : ["assets/img/Newsletter2.jpg"],
          //     title: "Subscribtion Form design and Layout",
          //     alt: "Subscribtion Form",
          //     description: ["Web-design and full implementation of forms for newsletter subscription. \
          //     The task was to create attractive for a user and in line with The EU General Data Protection \
          //     Regulation (GDPR) newsletter subscription form. For the project were designed and developed a \
          //     full page in the platform, section in the footer and a pop-up both for desktop and mobile."],
          //     projectTags : ["Newsletter subscription forms",
          //     "GDPR frced redesign",
          //     "Responsive web-design",
          //     "Pink-grey palette indesign",
          //     "HTML",
          //     "SASS"]
          //  });

          this.projects.push({
            id: 6,
            coverPhoto: "assets/img/filters2.jpg",
            photoUrl: ["assets/img/filters2.jpg"],
            title: "Mobile Filters design and implementation",
            alt: "Mobile Filters",
            description: ["Navigation and filtering among many fashion articles include seasonality, occasion, style filters. Filter panel is designed universally for desktop and smartphone. Front-end implementation also was provided. Filters are always a very interactive section, therefore I liked to work on usability and interaction design at this project. Collapsed/ expanded filters, buttons to increase a list of options to a filter,  active filter status in collapsed and expanded modes and removing active filters globally or from a specific filter. Those behaviors were the biggest things to think about and I like the final result."],
            projectTags: ["Filter’s panel", "Intraction design", "HTML, CSS, JavaScript", "Collapsed filters"]
          });
          this.projects.push({
            id: 5,
            coverPhoto: "assets/img/Style_guide/cover3.jpg",
            photoUrl: ["assets/img/Style_guide/cover3.jpg", "assets/img/Style_guide/colors.jpg", "assets/img/Style_guide/buttons.jpg", "assets/img/Style_guide/typography.jpg", "assets/img/Style_guide/screen_breaks.jpg", "assets/img/Style_guide/sketch_2.jpg"],
            title: "Style guide development",
            alt: "Style guide development",
            description: ["Problem: No consistency in design", "Solution: Created a design library for designers and developers", "Elements: Colors, Buttons, Typography, Spaces, Shapes and Forms, Checkboxes, and Radio buttons, icons.", "Components: Login form, Toast massages, 404 page, product item.", "Result: -Fully functional cloud-based Sketch library for fast hi-fi prototyping by Designers.", "-CSS and JS library inside the frontend project for inbuild styles. The element gets CSS style automaticaly based on the aplied HTML classes to this element.", "-A landing page with all use cases of elements and components coded and ready to be copied and pasted in the code by developers", "Timeline and team: 2 months, 2 interaction engineers"],
            projectTags: ["Design language development", "Responsive design", "Core components design", "Sketch", "HTML", "SASS", "JavaScript", "JSP"]
          });
          this.projects.push({
            id: 4,
            coverPhoto: "assets/img/Apps2.jpg",
            photoUrl: ["assets/img/Apps2.jpg"],
            title: "Apps promotion page",
            alt: "Apps promotion page",
            description: ["Company colours combined together led to a nice Pink-yellow gradients. To reach better readability, typography is performed in white colour. To show the surface of 3 phones and bring the floating effect were used depth and perspective design methods. The image with 3 phones was created out of one frontal positioned phone by using transformation of smart objects in Adobe Photoshop.  Design represents the page on desktop and mobile. Design was fully implemented by designer in front-end."],
            projectTags: ["Typography on a background", "Pin yellow gradient", "Apps web-page design ", "Responsive design", "Shadows as depth representation", "Smart bjects in Photoshop", "Sketch", "HTML", "SASS"]
          }); // this.projects.push({
          //     id: 5,
          //     photoUrl : ["assets/img/pionica1.jpg", "assets/img/pionica2.jpg", "assets/img/pionica3.jpg", "assets/img/pionica4.jpg"],
          //     title: "Brand identity design",
          //     alt: "Brand identity design",
          //     description: ["Brand identity for a make up stylist. Tender logo represents the power of natural beauty of every customer and inspires the make up artist to create the same fresh and lite looks. As a scope of the work was to create the logo, business cards, certificates for trainings attendance, and gift cards."],
          //     projectTags : ["Polygraph and print design",
          //     "Make up stylist logo",
          //     "Make up stylist business card",
          //     "Pion i brand intentity",
          //     "AdobePhotoshop"]
          // });

          this.projects.push({
            id: 3,
            coverPhoto: "assets/img/phonetemplate2.gif",
            photoUrl: ["assets/img/phonetemplate2.gif", "assets/img/shoppingquest1.jpg", "assets/img/shoppingquest2.jpg"],
            title: "Interaction design",
            alt: "Interaction design",
            description: ["Interaction design played a big role in human-computer interaction. It helps to show the system statuses and reactions which are one of the essentials in usability. The project is a gift finder, that is 4 questions namely gender, occasion, budget, and interests. Design solution preceded a user test and competitor analysis. The name for a project was found with the use of a design thinking methods."],
            projectTags: ["Gift finder design", "Interaction design", "Design thinking methods", "AdobeXD"]
          }); // this.projects.push({
          //     id: 3,
          //     photoUrl : ["assets/img/invitation2.jpg", "assets/img/Invitation1.jpg", "assets/img/invitation3.jpg"],
          //     title: "Graphic Design",
          //     alt: "Water-colour flowers",
          //     description: ["Water-colour flowers printed on a paper board with design fonts were made for a photo-shooting gift card. Made flower print can be also perfect complement to a wedding invitation or a post card with all the best wishes. There are also collection of item with this print available on sosity6/irinaziborova"],
          //     projectTags : ["Water-colour flowers print",
          //     "Print graphic design",
          //     "Wedding invitation",
          //     "AdobePhotoshop"]
          // });

          this.projects.push({
            id: 2,
            coverPhoto: "assets/img/1.jpg",
            photoUrl: ["assets/img/1.jpg", "assets/img/4.jpg", "assets/img/3.jpg", "assets/img/2.jpg"],
            title: "E-commerce site Design",
            alt: "E-commerce site Nicetop photo",
            description: ["Nicetop.ru is a Russian e-commerce site for a woman, man, and children fashion. The site is made in white, black and ight green colors. The design foresees a desktop and a mobile layout. The design solution is based on the project prescription from a stakeholder and consists of all core elements and site pages namely Home page, Results page, Brand page, Item detail page, and others. Many complementary sectors like delivery, payment, personal account sections, and a page with size tables were also developed during the project."],
            projectTags: ["Design language development", "Responsive design", "Core compoents design", "Mobile Filters", "Grid Item and a quick viw", "Home page, Results page, Item detail page design", "white interface with black and green accents", "E-commerce design", "AdobePhotoshop"]
          });
          this.projects.push({
            id: 1,
            coverPhoto: "assets/img/Marcopolo.jpg",
            photoUrl: ["assets/img/Marcopolo.jpg"],
            title: "Hotel web-site design",
            alt: "Marco Polo Hotel site",
            description: ["Marco Polo hotel is a small accomodation in the hart of St. Petersburg, Russia. Every suite is unique and made in Classical Russian design. To reflect this interior in my web-design were used red-wine and gold colours and a corporate monogram."],
            projectTags: ["Hotel web-site", "Resonsive design", "Classic style", "Booking system", "Dynamic pages"]
          });
        }

        _createClass(ProjectsService, [{
          key: "getProject",
          value: function getProject() {
            return this.projects;
          }
        }]);

        return ProjectsService;
      }();

      ProjectsService.ctorParameters = function () {
        return [];
      };

      ProjectsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ProjectsService);
      /***/
    },

    /***/
    "GYM/":
    /*!****************************************************!*\
      !*** ./src/app/portfolio/portfolio.component.scss ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function GYM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".masonry {\n  -moz-column-count: 3;\n       column-count: 3;\n  -moz-column-gap: 5rem;\n       column-gap: 5rem;\n}\n.masonry .item {\n  display: inline-block;\n  margin: 0 0 5rem;\n  width: 100%;\n}\n.masonry .item img {\n  margin-bottom: 2rem;\n}\n@media (max-width: 767.98px) {\n  .masonry {\n    -moz-column-count: 1 !important;\n         column-count: 1 !important;\n  }\n}\n@media (max-width: 991.98px) {\n  .masonry {\n    -moz-column-count: 2;\n         column-count: 2;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2JyZWFrcG9pbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxxQkFBQTtPQUFBLGdCQUFBO0FBSEo7QUFLRTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBSEo7QUFLSTtFQUNJLG1CQUFBO0FBSFI7QUM4REk7RURyREE7SUFDSSwrQkFBQTtTQUFBLDBCQUFBO0VBTE47QUFDRjtBQ3dESTtFRGhEQTtJQUNJLG9CQUFBO1NBQUEsZUFBQTtFQUxOO0FBQ0YiLCJmaWxlIjoicG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnNcIjtcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9icmVha3BvaW50c1wiO1xuXG4ubWFzb25yeSB7XG4gICAgY29sdW1uLWNvdW50OjM7XG4gICAgY29sdW1uLWdhcDo1cmVtO1xuICBcbiAgLml0ZW0ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDAgMCA1cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgaW1nIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB9XG4gIH1cbn1cblxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHNtKXtcbiAgICAubWFzb25yeSB7XG4gICAgICAgIGNvbHVtbi1jb3VudDogMSAhaW1wb3J0YW50O1xuICAgIH1cbn1cbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihtZCl7XG4gICAgLm1hc29ucnkge1xuICAgICAgICBjb2x1bW4tY291bnQ6IDI7XG4gICAgfVxufSIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "HhuZ":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function HhuZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row footer\">\n  <div class=\"col-12 col-md-4\">\n    <h4>{{contact}}</h4>\n  </div>\n  <div class=\"col-12 col-md-8\">\n    <ul class=\"list-inline\">\n        <li class=\"-pt-mono list-inline-item\" *ngFor=\"let link of links\">\n          <a [attr.href]=\"link.url\" target=\"_blank\">{{link.title}}</a>\n        </li>\n        <!-- <li class=\"-pt-mono list-inline-item\"><a  href=\"https://www.instagram.com/irinaziborova.de/\" target=\"_blank\">Instagram ‣</a></li>\n        <li class=\"-pt-mono list-inline-item\"><a  href=\"https://www.linkedin.com/in/ziborovairina/\" target=\"_blank\">LinkedIn ‣</a></li> -->\n    </ul>\n    <a class=\"-pt-mono\" href=\"mailto:irina.reinerth@gmail.com\">Email me</a>\n    <div class=\"-pt-mono rights\"><span class=\"copy-symbol\">&copy;</span>{{currentYear | date:'yyyy'}} {{title}}</div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "Np+I":
    /*!************************************************!*\
      !*** ./src/app/contact/contact.component.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function NpI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".flex-column {\n  display: flex;\n  flex-flow: column;\n}\n\n.field {\n  width: 100%;\n  text-align: center;\n}\n\n.field button.black {\n  background-color: #333;\n  border: none;\n  color: white;\n  padding: 4px 50px;\n  margin: 20px;\n}\n\n.field button.black:hover {\n  opacity: 0.5;\n}\n\n.flex-social-wrap {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n\n.flex {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n#locationIco {\n  width: 24px;\n}\n\n.socialIco {\n  width: 20px;\n  margin: 24px 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFLQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUlJO0VBQ0ksc0JBYkM7RUFjRCxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUZSOztBQUlRO0VBQ0ksWUFBQTtBQUZaOztBQWtCQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxPQUFBO0FBZko7O0FBaUJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFkSjs7QUFpQkE7RUFDSSxXQUFBO0FBZEo7O0FBZ0JBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBYkoiLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRibGFjayA6ICMzMzM7XG4kbGlnaHRncmV5OiAjZWVlOyBcblxuLmZsZXgtY29sdW1uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xufVxuXG4uZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGJ1dHRvbi5ibGFjayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDRweCA1MHB4O1xuICAgICAgICBtYXJnaW46IDIwcHg7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpbnB1dCwgdGV4dGFyZWEge1xuICAgIC8vICAgICB3aWR0aDogMTAwJTtcbiAgICAvLyAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAvLyAgICAgYm9yZGVyOiAxcHggc29saWQgJGxpZ2h0Z3JleTtcbiAgICAvLyB9XG5cbiAgICAvLyB0ZXh0YXJlYSB7XG4gICAgLy8gICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIC8vIH1cblxuICAgIFxufVxuLmZsZXgtc29jaWFsLXdyYXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4OiAxO1xufVxuLmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jbG9jYXRpb25JY28ge1xuICAgIHdpZHRoOiAyNHB4O1xufVxuLnNvY2lhbEljbyB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgbWFyZ2luOiAyNHB4IDRweDtcbn1cblxuIl19 */";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Irina Ziborova';
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "T553":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio/portfolio.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function T553(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"masonry scene_element scene_element-fadeinup\">\n  <div *ngFor=\"let project of projectsService.projects\" class=\"item\">\n    <a routerLink=\"/project/{{project.id}}\">\n        <img [src]=\"project.coverPhoto\" [alt]=\"project.alt\">\n        <a class=\"-pt-mono\">{{project.title}}</a>\n    </a>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--The content below is only a placeholder and can be replaced.-->\n\n<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule, OtherModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtherModule", function () {
        return OtherModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./header/header.component */
      "fECr");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var angular_popper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angular-popper */
      "WVRj");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./about/about.component */
      "84zG");
      /* harmony import */


      var _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./contact/contact.component */
      "bzTf");
      /* harmony import */


      var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./portfolio/portfolio.component */
      "zyDg");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./footer/footer.component */
      "fp1T");
      /* harmony import */


      var _project_project_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./project/project.component */
      "6AOp");
      /* harmony import */


      var _services_projects_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./services/projects.service */
      "CoJz");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"], _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_13__["PortfolioComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _project_project_component__WEBPACK_IMPORTED_MODULE_15__["ProjectComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], angular_popper__WEBPACK_IMPORTED_MODULE_9__["NgxPopper"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([{
          path: '',
          redirectTo: '/portfolio',
          pathMatch: 'full'
        }, {
          path: 'portfolio',
          component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_13__["PortfolioComponent"]
        }, {
          path: 'about',
          component: _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"]
        }, {
          path: 'contact',
          component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"]
        }, {
          path: 'project/:id',
          component: _project_project_component__WEBPACK_IMPORTED_MODULE_15__["ProjectComponent"]
        }]), _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]],
        providers: [_services_projects_service__WEBPACK_IMPORTED_MODULE_16__["ProjectsService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      })], AppModule);

      var OtherModule = function OtherModule() {
        _classCallCheck(this, OtherModule);
      };
      /***/

    },

    /***/
    "bzTf":
    /*!**********************************************!*\
      !*** ./src/app/contact/contact.component.ts ***!
      \**********************************************/

    /*! exports provided: ContactComponent */

    /***/
    function bzTf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
        return ContactComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./contact.component.html */
      "BGiY");
      /* harmony import */


      var _contact_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./contact.component.scss */
      "Np+I");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ContactComponent = /*#__PURE__*/function () {
        function ContactComponent() {
          _classCallCheck(this, ContactComponent);

          this.contactPhotoUrl = "assets/img/contact.jpg";
          this.followMe = "FOLLOW ME -";
          this.myLocation = "Zürich, Switzerland";
          this.contactMe = "CONTACT ME -";
          this.buttonNname = "Email me";
          this.socials = [{
            socialIcoLink: "https://www.linkedin.com/in/ziborovairina/",
            socialIcoUrl: "assets/img/in.png"
          }];
        }

        _createClass(ContactComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * Process the form we have. Send to whatever backend
           * Only alerting for now
           */

        }, {
          key: "processForm",
          value: function processForm() {
            var allInfo = "My name is ".concat(this.name, ". My email is ").concat(this.email, ". My message is ").concat(this.message);
            alert(allInfo);
          }
        }]);

        return ContactComponent;
      }();

      ContactComponent.ctorParameters = function () {
        return [];
      };

      ContactComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contact',
        template: _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contact_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ContactComponent);
      /***/
    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "fECr":
    /*!********************************************!*\
      !*** ./src/app/header/header.component.ts ***!
      \********************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function fECr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./header.component.html */
      "kjkU");
      /* harmony import */


      var _header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./header.component.scss */
      "8PEf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);

          this.title = 'Irina Reinerth';
          this.subTitle = 'ux & ui';
          this.navigations = [{
            routerLink: "/portfolio",
            title: "Portfolio"
          }, {
            routerLink: "/about",
            title: "About"
          }, {
            routerLink: "/contact",
            title: "Contact"
          }];
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ctorParameters = function () {
        return [];
      };

      HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HeaderComponent);
      /***/
    },

    /***/
    "fp1T":
    /*!********************************************!*\
      !*** ./src/app/footer/footer.component.ts ***!
      \********************************************/

    /*! exports provided: FooterComponent */

    /***/
    function fp1T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./footer.component.html */
      "HhuZ");
      /* harmony import */


      var _footer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./footer.component.scss */
      "pUeC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);

          this.contact = 'How to contact';
          this.links = [{
            url: 'https://www.linkedin.com/in/ziborovairina/',
            title: 'LinkedIn ‣'
          }];
          this.currentYear = new Date();
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ctorParameters = function () {
        return [];
      };

      FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FooterComponent);
      /***/
    },

    /***/
    "ijUo":
    /*!********************************************!*\
      !*** ./src/app/about/about.component.scss ***!
      \********************************************/

    /*! exports provided: default */

    /***/
    function ijUo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@media screen and (max-width: 767px) {\n  .mobile-margin-top {\n    margin-top: 20px;\n  }\n}\n.skills {\n  background: black;\n  padding: 40px;\n  color: white;\n  margin: 40px 0;\n}\n.skills p {\n  margin-top: 20px;\n  color: white !important;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFDSSxnQkFBQTtFQUNOO0FBQ0Y7QUFDQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQ0o7QUFDSTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUNSIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpe1xuICAgIC5tb2JpbGUtbWFyZ2luLXRvcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7IFxuICAgIH1cbn1cbi5za2lsbHMge1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogNDBweCAwO1xuXG4gICAgcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "kjkU":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function kjkU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-md\">\n  <div class=\"logo-wrap\">\n    <a class=\"navbar-brand logo\" routerLink=\"/\">\n      {{title}}\n    </a>\n    <p class=\"SubTitle -pt-mono d-none d-lg-block\">{{subTitle}}</p>\n  </div>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExample04\" aria-controls=\"navbarsExample04\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <i class=\"fa fa-bars\"></i>\n    </button>\n\n    <div class=\"navbar-collapse\" id=\"navbarsExample04\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\" *ngFor=\"let navigation of navigations\">\n          <a class=\"nav-link -pt-mono\" routerLink=\"{{navigation.routerLink}}\" routerLinkActive=\"active-link\">{{navigation.title}}</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n";
      /***/
    },

    /***/
    "pUeC":
    /*!**********************************************!*\
      !*** ./src/app/footer/footer.component.scss ***!
      \**********************************************/

    /*! exports provided: default */

    /***/
    function pUeC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".footer {\n  bottom: 0;\n  width: 100%;\n  padding-top: 40px;\n}\n.footer .rights {\n  margin: 1.2rem 0;\n}\n.footer .copy-symbol {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFBUjtBQUNJO0VBQ0ksZ0JBQUE7QUFDUjtBQUNJO0VBQ0ksZUFBQTtBQUNSIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgIC5yaWdodHMge1xuICAgICAgICBtYXJnaW46IDEuMnJlbSAwO1xuICAgIH1cbiAgICAuY29weS1zeW1ib2wge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "xMmp":
    /*!************************************************!*\
      !*** ./src/app/project/project.component.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function xMmp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "div.col-12 {\n  margin: 10px 0;\n}\n\n.Nextbtn {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtBQUVKIiwiZmlsZSI6InByb2plY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuY29sLTEyIHtcbiAgICBtYXJnaW46IDEwcHggMDtcbn1cbi5OZXh0YnRuIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zyDg":
    /*!**************************************************!*\
      !*** ./src/app/portfolio/portfolio.component.ts ***!
      \**************************************************/

    /*! exports provided: PortfolioComponent */

    /***/
    function zyDg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function () {
        return PortfolioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_portfolio_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./portfolio.component.html */
      "T553");
      /* harmony import */


      var _portfolio_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./portfolio.component.scss */
      "GYM/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_projects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/projects.service */
      "CoJz");

      var PortfolioComponent = /*#__PURE__*/function () {
        function PortfolioComponent(projectsService) {
          _classCallCheck(this, PortfolioComponent);

          this.projectsService = projectsService;
        }

        _createClass(PortfolioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PortfolioComponent;
      }();

      PortfolioComponent.ctorParameters = function () {
        return [{
          type: _services_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"]
        }];
      };

      PortfolioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-portfolio',
        template: _raw_loader_portfolio_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_portfolio_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PortfolioComponent);
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map