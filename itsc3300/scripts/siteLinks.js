document.addEventListener("DOMContentLoaded", function() {
    const header = document.createElement("header");
    header.innerHTML = `
      <h1>
          Agile Project Management
      </h1>
      <nav>
        <a href="sprint_0/index.html">Agile&nbspMangement</a> |
        <a href="sprint_1/index.html">Scope&nbspMangement</a> |
        <a href="sprint_1_week2/index.html">Schedule&nbspMangement</a> |
        <a href="sprint_2_week1/index.html">Cost&nbspMangement</a> |
        <a href="sprint_2_week2/index.html">Quality&nbspMangement</a> |
        <a href="sprint_3_week1/index.html">Resource&nbspMangement</a> |
        <a href="sprint_3_week2/index.html">Communications&nbspMangement</a> |
        <a href="sprint_4_week1/index.html">Risk&nbspMangement</a> |
        <a href="sprint_4_week2/index.html">Procurement&nbspMangement</a>
      </nav>
    `;
    document.body.insertBefore(header, document.body.firstChild);
  });  