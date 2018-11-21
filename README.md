# Angular 7 blog project
An angular blog inspired from openclassrooms, more specifically the tutorial: Développez des applications Web avec Angular
## Introduction
This a sample blog application displaying JavaScript blog, each post can be liked or disliked and it has the following properties :
```
post: {
  title: string, // The title of the post
  content: string, // The post content
  loveIts: number, // The difference between likes and dislikes number
  created_at: Date // Creation date
}
```
When a post have more likes then dislikes (loveIts>0), we color the blog with green, in the other hand tbe post will be colored with red
## Styling: Bootstrap and SASS
In this project, I used bootstrap classes to accelerate the development process, I created <ul> with class *list-group-item*, and <li> with *list-group* in order to be able to color blog entries with the two classes  *list-group-item-success* and  *list-group-item-danger*

## Application components
In terms of application structure:
* **AppComponent**: contains posts array, and pass it to his child 
* **PostListComponent**: display the list of all blog entries
* **PostListItemComponent**: Display the post informations, namely title, content, loveIts number and creation date

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).