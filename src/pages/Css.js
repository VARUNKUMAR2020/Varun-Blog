import React from "react";

const Css = () => {
  return (
    <div>
      <h4 className="p-4 h5 text-center">
        <span className="text-danger h2">CSS</span> is the language we use to
        style a Web page.
      </h4>
      <ul>
        <li className="pt-2">CSS stands for Cascading Style Sheets </li>
        <li className="pt-2">
          CSS describes how HTML elements are to be displayed on screen, paper,
          or in other media
        </li>
        <li className="pt-2">
          CSS saves a lot of work. It can control the layout of multiple web
          pages all at once
        </li>
        <li className="pt-2">External stylesheets are stored in CSS files</li>
      </ul>
      <h4 className="p-4 pb-2 h5 fs-4 ">Why Use CSS?</h4>
      <p className="px-4">
        CSS is used to define styles for your web pages, including the design,
        layout and variations in display for different devices and screen sizes.
      </p>
      <h4 className="p-4 pb-2 h5 fs-4 ">CSS Solved a Big Problem</h4>
      <ul className="list-unstyled px-4">
        <li className="pt-2">
          HTML was NEVER intended to contain tags for formatting a web page!{" "}
        </li>
        <li className="pt-2">
          HTML was created to describe the content of a web page, like:
        </li>
        <li className="pt-2">{"<h1>This is a heading</h1>"}</li>
        <li className="pt-2">{"<p>This is a paragraph.</p>"}</li>
        <li className="pt-2">
          When tags like {"<font>"}, and color attributes were added to the HTML
          3.2 specification, it started a nightmare for web developers.
          Development of large websites, where fonts and color information were
          added to every single page, became a long and expensive process.
        </li>
        <li className="pt-2">
          To solve this problem, the World Wide Web Consortium (W3C) created
          CSS.
        </li>
        <li className="pt-2">
          CSS removed the style formatting from the HTML page!
        </li>
      </ul>
      <h4 className="p-4 pb-2 h5 fs-4 ">CSS Saves a Lot of Work!</h4>
      <ul className="list-unstyled px-4">
        <li className="pt-2">
          The style definitions are normally saved in external .css files.
        </li>
        <li className="pt-2">
          With an external stylesheet file, you can change the look of an entire
          website by changing just one file!
        </li>
      </ul>
    </div>
  );
};

export default Css;
