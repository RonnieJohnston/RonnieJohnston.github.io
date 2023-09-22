document.addEventListener("DOMContentLoaded", function() {
    const header = document.createElement("header");
    header.innerHTML = `
    <h1 class = "cent">Sprint1 blogs</h1>
    <nav>
        <a href="../index.html">Home</a> |
        <a href="index.html">Stories</a> |
        <a href="parth_blog_sprint1.html">Parth's&nbsp;Blog</a> |
        <a href="ronnie_blog_sprint1.html">Ronnie's&nbsp;Blog</a> |
        <a href="ben_blog_sprint1.html">Ben's&nbsp;Blog</a> |
        <a href="lane_blog_sprint1.html">Lane's&nbsp;Blog</a> 
    </nav>
    `;
    document.body.insertBefore(header, document.body.firstChild);
  });  