document.addEventListener("DOMContentLoaded", function() {
    const header = document.createElement("header");
    header.innerHTML = `
      <h1>
          Agile Project Management
      </h1>
      <nav>
        <a href="sprint_0/index.html">Sprint0 Blogs</a> |
        <a href="sprint_1/index.html">Sprint1 Week 1 Blogs</a> |
        <a href="sprint_1_week2/index.html">Sprint1 Week 2 Blogs</a> |
        <a href="sprint_2_week1/index.html">Sprint2 Week 1 Blogs</a> |
        <a href="sprint_2_week2/index.html">Sprint2 Week 2 Blogs</a> |
        <a href="sprint_3_week1/index.html">Sprint3 Week 1 Blogs</a> |
        <a href="sprint_3_week2/index.html">Sprint3 Week 2 Blogs</a> |
        <a href="sprint_4_week1/index.html">Sprint4 Week 1 Blogs</a>
      </nav>
    `;
    document.body.insertBefore(header, document.body.firstChild);
  });  