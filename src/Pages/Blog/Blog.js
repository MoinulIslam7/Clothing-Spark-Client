import React from 'react';

const Blog = () => {
    return (
        <div className='my-5 p-5'>
            <div className=''>
                <h1 className='text-2xl text-center'>What are the different ways to manage a state in a React application?</h1>
                <p><span className='font-bold w-1/2'>There are four main types of state you need to properly manage in your React apps:</span> <br />
                    <li>Local state</li>
                    <li>Global state</li>
                    <li>Server state</li>
                    <li>URL state</li>
                </p>
                <br />
                <p><span className='font-bold'>Local (UI) state:</span> Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook. For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.</p>
                <br />
                <p><span className='font-bold'>Global (UI) state:</span> Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application. Sometimes state we think should be local might become global.</p>
                <br />
                <p><span className='font-bold'>Server state:</span> Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state. Fortunately there are tools such as SWR and React Query that make managing server state much easier.</p>
                <br />
                <p><span className='font-bold'>URL state:</span> Data that exists on our URLs, including the pathname and query parameters.URL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!</p>
            </div>
            <br /><br />
            <div>
                <h2 className='text-2xl text-center'>How does prototypical inheritance work?</h2>
                <p className='text-justify'>JavaScript inheritance is more widely known as “prototypal inheritance.” Prototypal inheritance uses the concept of prototype chaining, and it refers to the linking of objects via the prototype property. When a constructor function creates an object, it does not create it based on the constructor’s prototype; instead, it creates an object linked to the constructor’s prototype object. Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
            </div>
            <br /> <br />
            <div>
                <h2 className='text-2xl text-center'>What is a unit test? Why should we write unit tests?</h2>
                <p className='text-justify'>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            </div>
            <br /><br />
            <div>
                <h2 className='text-2xl text-center'>React vs. Angular vs. Vue?</h2>
                <p className='text-justify mb-10'>Angular, React and Vue are all highly popular JavaScript libraries and frameworks that help developers build complex, reactive and modern user interfaces for the web. Actually, with additional libraries like React Native, Ionic (with Angular or with React) or NativeScript you can even build native mobile apps for mobile devices with help of Angular, React and Vue. One important note first: There is no best framework or library here. All three libraries are very popular for good reasons. They all have their strengths and weaknesses and you can generally use either of the libraries for any project. lets see briefly: </p>
                <img className='mx-auto' src="https://www.angularminds.com/site_data/static/images/angular-react-vue/comparison-angular-react-vue.png" alt="" />
            </div>
        </div>
    );
};

export default Blog;