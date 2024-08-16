var headFiles = document.querySelectorAll(".head-file");

headFiles.forEach(function (file) {
    file.addEventListener("click", function () {
        headFiles.forEach(function (f) {
            f.classList.remove("head-file-select");
        });

        var fileName = file.querySelector(".h-fileName").innerText;
        var fileExt = fileName.split('.').pop();
        var value = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hellow World!</h1>
</body>
</html>`;

        file.classList.add("head-file-select");

        if(fileExt == "js"){
            fileExt = "javascript";
            value = `function(){
                // type code here...
            }`
        }else if(fileExt == "css"){
value = `*{
    margin: 0;
    padding: 0;
}`
        }

        // monaco_editor(fileExt,value);
    });
});