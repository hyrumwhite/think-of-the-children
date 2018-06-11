# think-of-the-children
An AngularJS decorator that allows placing children components on the component definition directly, instead of messing around with modules.

# Installation
> npm i think-of-the-children -S

# Usage

Remind your app to think of its children by passing it to the ThinkOfTheChildren function. The following example uses ES6 modules, but think of the children will work with any project configuration. Your components just need a `components` attribute and/or a `directives` attribute.

The component definition:

    //todo.component.js
    import ChildComponent from './child-component.js';
    import OtherChild from './other-child.js';
    export default {
        components:{
    	    ChildComponent,//ThinkOfTheChildren makes capitalization ok now
    	    OtherChild
        },
        directives:{//this works too!
        },
        template:`
    	    <div>
    		    <child-component></child-component>
    		    <other-child></other-child>
    	    </div>
        `
    }

The App definition:

    //app.module.js
    import ThinkOfTheChildren from 'think-of-the-children';
    const app = angular.module('my-app')
    ThinkOfTheChildren(app)
    	.component(MyComponentWithChildren)//that's it!

You can also import ThinkOfTheChildren in a script tag

    <script src="path/to/ToTC/dist/think-of-the-children.js"
