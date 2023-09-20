document.addEventListener("DOMContentLoaded", function() {
    const header = document.createElement("header");
    header.innerHTML = `
      <h1>
          Agile Project Management
      </h1>
      <nav>
        <a href="sprint_0/index.html">Sprint0 Blogs</a> |
        <a href="sprint_1/index.html">Sprint1 Blogs</a> 
      </nav>
    `;
    document.body.insertBefore(header, document.body.firstChild);
  });  