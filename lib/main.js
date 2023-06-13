function loadNavbar() {
    const navDiv = document.getElementById("navbar");
    navDiv.innerHTML = "<nav class=\"navbar navbar-expand-lg navbar-dark navBarBack\"><a class=\"navBarTitle mt-0 mr-2\" href=\"../index.html\"><h4>MANAGING ICT PROJECTS</h4></a><div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\"><div class=\"navbar-nav\"><a class=\"nav-item nav-link\" href=\"../index.html\">Home</a><a class=\"nav-item nav-link\" href=\"../Pages/Plan.html\">Project Plans</a><a class=\"nav-item nav-link\" href=\"../Pages/Management.html\">Management</a><a class=\"nav-item nav-link\" href=\"../Pages/Products.html\">Products</a><a class=\"nav-item nav-link\" href=\"../Pages/Evaluation.html\">Evaluation</a></div></div></nav>";
}

function loadReader(filee){
    window.location.href = "../Pages/Reader.html?file="+filee;
}

function loadFile(path){

    const reader = document.getElementById("reader");
    reader.innerHTML= "<object data=\""+path+"\" type=\"application/pdf\" id=\"vv\" width=\"100%\" height=\"570\"\"><p>Alternative text - include a link <a href=\""+path+"\">to the PDF!</a></p></object>"
    
}