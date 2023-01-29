# We want to use angular and Bootstrap with Json-Server
  I'am a Beginner and wanted to learn Angular. I get the information for this repository on youtube
  Thanks Learning-Points for this nice tutorial to learn Angular Json and Bootstrap
  youtube: Learning Points
  
##  https://www.youtube.com/watch?v=p01Ydl62ObE&list=PLQcBFrxTul9IQFF7fJz7jgdRYJz1OCbll

## npm install -g @angular/cli

## Create the new project


1.) D:/ng new A_AA_Uni_4_Bootstrap
    routing=yes css=yes
    
## npm install -g json-server
create a folder database. In this create a db.json
see also in 

## https://www.npmjs.com/package/json-server

{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}

go into the database folder and start the call
json-server --watch db.json

Now if you go to http://localhost:3000/posts/1, you'll get
{ "id": 1, "title": "json-server", "author": "typicode" }

## Create the components for a student g= generate c= component components = folder 

we don't create a delete component because we want do it per action button in the list-student

### ng g c components/add-student
### ng g c components/edit-student
### ng g c components/list-student
### ng g c components/login-student
### ng g c components/registration



# AAAUni4Bootstrap

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
