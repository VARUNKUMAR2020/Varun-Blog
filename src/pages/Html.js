import React from "react";

const Html = () => {
  return (
    <div>
      <h4 className="p-4 h5 text-center">
        <span className="text-danger h2">HTML</span> is the standard markup
        language for creating Web pages.
      </h4>
      <ul>
        <li>HTML stands for Hyper Text Markup Language </li>
        <li>
          HTML is the standard markup language for creating Web pages HTML
          describes the structure of a Web page
        </li>
        <li>
          HTML consists of a series of elements HTML elements tell the browser
          how to display the content
        </li>
        <li>
          HTML elements label pieces of content such as "this is a heading",
          "this is a paragraph", "this is a link", etc.
        </li>
      </ul>
      <h4 className="p-4 pb-2 h5 fs-4 ">HTML Editors</h4>
      <p className="px-4">
        A simple text editor is all you need to learn HTML.
      </p>
      <h4 className="p-4 pb-2 h5 fs-4 ">
        Learn HTML Using Notepad or TextEdit
      </h4>
      <ul className="list-unstyled px-4">
        <li>
          Web pages can be created and modified by using professional HTML
          editors.
        </li>
        <li>
          However, for learning HTML we recommend a simple text editor like
          Notepad (PC) or TextEdit (Mac).
        </li>
        <li>
          We believe that using a simple text editor is a good way to learn
          HTML.
        </li>
        <li>
          Follow the steps below to create your first web page with Notepad or
          TextEdit.
        </li>
      </ul>
      <h4 className="p-4 pb-2 h5 fs-4 ">Step 1: Open Notepad (PC)</h4>
      <ul className="list-unstyled px-4">
        <li>Windows 8 or later:</li>
        <li>
          Open the Start Screen (the window symbol at the bottom left on your
          screen). Type Notepad.
        </li>
        <li>Windows 7 or earlier:</li>
        <li>
          Open Start {">"} Programs {">"} Accessories . 33{">"} Notepad
        </li>
      </ul>
      <h4 className="p-4 pb-2 h5 fs-4 ">Step 1: Open TextEdit (Mac)</h4>
      <ul className="list-unstyled px-4">
        <li>
          Open Finder {">"} Applications {">"} TextEdit
        </li>
        <li>
          Also change some preferences to get the application to save files
          correctly. In Preferences {">"} Format {">"} choose "Plain Text"
        </li>
        <li>
          Then under "Open and Save", check the box that says "Display HTML
          files as HTML code instead of formatted text".
        </li>
        <li>Then open a new document to place the code.</li>
      </ul>
      <h4 className="p-4 pb-2 h5 fs-4 ">Step 2: Write Some HTML</h4>
      <ul className="list-unstyled px-5 text-danger">
        <li>{"<!DOCTYPE html>"}</li>
        <li>{"<html>"}</li>
        <li>{"<body>"}</li>
        <br />
        <li>{"<h1>Varun Blog - Make EDUCATION SIMPLE </h1>"}</li>
        <li>{"<p>Study Frontend-Development </p>"}</li>
        <br />
        <li>{"<body>"}</li>
        <li>{"<html>"}</li>
      </ul>
      <h4 className="p-4 pb-2 h5 fs-4 ">Step 3: Save the HTML Page</h4>
      <ul className="list-unstyled px-4">
        <li>
          Save the file on your computer. Select File {">"} Save as in the
          Notepad menu.
        </li>
        <li>
          Name the file "index.htm" and set the encoding to UTF-8 (which is the
          preferred encoding for HTML files).
        </li>
      </ul>
      <h4 className="p-4 pb-2 h5 fs-4 ">
        Step 4: View the HTML Page in Your Browser
      </h4>
      <ul className="list-unstyled px-4">
        <li>
          Open the saved HTML file in your favorite browser (double click on the
          file, or right-click - and choose "Open with").
        </li>
        <li>The result will look much like this:</li>
      </ul>
    </div>
  );
};

export default Html;
