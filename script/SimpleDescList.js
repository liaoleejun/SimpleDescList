$(document).ready(function () {
    /* 1. 描述排序: 按照引用在 HTML 文档中出现顺序, 把引用的 data-ref 生成无重复值数组
          descsOrdered */
    let descs = $("[data-dt]");
    // descsOrdered 是由 data-ref 构成的无重复数组，按照在HTML文档中出现的顺序
    let descsOrdered = [];
    let descsConceptOrdered = [];
    for (let i = 0; i < descs.length; i++) {
        let dataRef = descs[i].getAttribute('data-dt');
        let concept = descs[i].innerHTML;
        // array push only if not exist
        descsOrdered.indexOf(dataRef) === -1 ? descsOrdered.push(dataRef):
            console.log(dataRef + " already exists");
        descsConceptOrdered.indexOf(concept) === -1 ?
            descsConceptOrdered.push(concept):
            console.log(concept + " already exists");
    }
    
    /* 2. 生成排好序的 Description list */
    $(document.body).append("<div><h2>Description List</h2><ul id='descs'></ul>" +
        "</div>");
    for (let i = 0; i < descsOrdered.length; i++) {
        let id = descsOrdered[i];
        let ttt = document.createElement('li');
        ttt.innerHTML = "<b>" + descsConceptOrdered[i] + "</b>";
        // TODO: jquery.min.js:2 Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
        ttt.appendChild(document.getElementById(id));
        document.getElementById("descs").appendChild(ttt);
    }
});
