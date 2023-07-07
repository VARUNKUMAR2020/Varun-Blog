import React from "react";

const Bootstrap = () => {
  return (
    <div>
      <h4 className="p-4 h5 text-center">
        <span className="text-danger h2">Bootstrap </span>is the world's most
        famous free CSS framework.
      </h4>
      <p className="px-4">
        Bootstrap 5 is the newest version of Bootstrap, which is the most
        popular HTML, CSS, and JavaScript framework for creating responsive,
        mobile-first websites.
      </p>
      <p className="px-4">
        Bootstrap 5 is completely free to download and use!
      </p>
      <h4 className="p-4 pb-2 h5 fs-4 ">Bootstrap 5 vs. Bootstrap 3 & 4</h4>
      <ul className="list-unstyled px-4 ">
        <li className="pt-2">
          Bootstrap 5 is the newest version of Bootstrap; with new components,
          faster stylesheet and more responsiveness.
        </li>
        <li className="pt-2">
          Bootstrap 5 supports the latest, stable releases of all major browsers
          and platforms. However, Internet Explorer 11 and down is not
          supported.
        </li>
        <li className="pt-2">
          The main differences between Bootstrap 5 and Bootstrap 3 & 4, is that
          Bootstrap 5 has switched to JavaScript instead of jQuery.
        </li>
      </ul>
      <h4 className="p-4 pb-2 h5 fs-4 ">Did You Know?</h4>
      <ul className="list-unstyled px-4">
        <li className="pt-2">
          W3.CSS is an excellent alternative to Bootstrap 5.
        </li>
        <li className="pt-2">W3.CSS is smaller, faster, and easier to use.</li>
      </ul>
      <h4 className="p-4 pb-2 h5 fs-4 ">
        The main advantages of using Bootstrap include:
      </h4>
      <ul className="list-unstyled px-4">
        <li className="pt-2">
          Responsive Design: Bootstrap simplifies the process of creating
          responsive web designs by providing a fluid grid system and predefined
          CSS classes that automatically adjust the layout based on the screen
          size.
        </li>
        <li className="pt-2">
          Customization: Bootstrap can be customized to match the specific
          design requirements of a project. Developers can modify the default
          styles and components or create their own, ensuring a unique look and
          feel.
        </li>
        <li className="pt-2">
          Cross-Browser Compatibility: Bootstrap is designed to work
          consistently across different web browsers, including Chrome, Firefox,
          Safari, and Internet Explorer, minimizing compatibility issues.
        </li>
        <li className="pt-2">
          Time and Cost Efficiency: By leveraging the ready-made components and
          styles provided by Bootstrap, developers can save time and effort,
          accelerating the development process.
        </li>
      </ul>
      <p className="px-4">
        To use Bootstrap, developers typically include the necessary Bootstrap
        CSS and JavaScript files in their web pages and then use the provided
        classes and components in their HTML markup. Bootstrap can be downloaded
        from the official website (getbootstrap.com) or included from a content
        delivery network (CDN) for faster and more efficient loading.
      </p>
      <p className="px-4">
        Overall, Bootstrap is a powerful tool for creating modern, responsive,
        and visually appealing websites and web applications, making it a
        popular choice among developers.
      </p>
    </div>
  );
};

export default Bootstrap;
