import React from "react";

const FrontendReact = () => {
  return (
    <div>
      <h4 className="p-4 h5 text-center">
        <span className="text-danger h2 ">React </span> is a JavaScript library
        for building user interfaces.
      </h4>
      <ul className=" px-4 ">
        <li className="pt-2">
          React is used to build single-page applications.
        </li>
        <li className="pt-2">
          React allows us to create reusable UI components.
        </li>
      </ul>
      <h4 className="p-4 pb-2 h5 fs-4 ">Create React App</h4>
      <ul className=" px-4 list-unstyled">
        <li className="pt-2">
          To learn and test React, you should set up a React Environment on your
          computer.
        </li>
        <li className="pt-2">This tutorial uses the create-react-app.</li>
        <li className="pt-2">
          The create-react-app tool is an officially supported way to create
          React applications.
        </li>
        <li className="pt-2">Node.js is required to use create-react-app.</li>
        <li className="pt-2">
          Open your terminal in the directory you would like to create your
          application.
        </li>
        <li>
          Run this command to create a React application named my-react-app:
        </li>
        <li>
          create-react-app will set up everything you need to run a React
          application.
        </li>
      </ul>
      <h4 className="p-4 pb-2 h5 fs-4 ">Run the React Application</h4>
      <p className="px-4">
        Run this command to move to the my-react-app directory:
      </p>
      <p className="text-danger px-4">cd my-react-app</p>
      <p className="px-4">
        Run this command to execute the React application my-react-app:
      </p>
      <p className="text-danger px-4">npm start</p>
      <h4 className="p-4 pb-2 h5 fs-4 ">What You Should Already Know</h4>
      <p className="px-4">
        Before starting with React.JS, you should have intermediate experience
        in:
      </p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
      </ul>
      <h4 className="p-4 pb-2 h5 fs-4 ">What is React?</h4>
      <p className="px-4">
        React, sometimes referred to as a frontend JavaScript framework, is a
        JavaScript library created by Facebook.
      </p>
      <p className="px-4">React is a tool for building UI components.</p>
    </div>
  );
};

export default FrontendReact;
