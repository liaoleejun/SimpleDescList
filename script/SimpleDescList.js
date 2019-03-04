$(document).ready(function () {
    /* 1. 描述排序
     *
     *    按照引用在 HTML 文档中出现顺序, 把引用的 data-ref 生成无重复值数组
     *    descsOrdered
     */

    let descs = $(".description");

    // descsOrdered 是由 data-ref 构成的无重复数组，按照在HTML文档中出现的顺序
    let descsKeyOrdered = [];
    let descsValueOrdered = [];
    for (let i = 0; i < descs.length; i++) {
        let dataRef = descs[i].getAttribute('href');
        let concept = descs[i].innerHTML;
        // array push only if not exist
        descsKeyOrdered.indexOf(dataRef) === -1 ? descsKeyOrdered.push(dataRef):
            console.log(dataRef + " already exists");
        descsValueOrdered.indexOf(concept) === -1 ?
            descsValueOrdered.push(concept):
            console.log(concept + " already exists");
    }
    
    /* 2. 生成排好序的描述，附在最后 */
    if (descsKeyOrdered.length > 0) {
        console.log(descsKeyOrdered);

        $(document.body).append("<div><h2>Description List</h2><ul id='descriptions-append'></ul>" +
            "</div>");
        for (let i = 0; i < descsKeyOrdered.length; i++) {
            let id = descsKeyOrdered[i];
            id = id.substring(1, id.length);
            let ttt = document.createElement('li');
            ttt.innerHTML = "<b>" + descsValueOrdered[i] + "</b>";
            // TODO: jquery.min.js:2 Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
            ttt.appendChild(document.getElementById(id));
            document.getElementById("descriptions-append").appendChild(ttt);
        }
    }
});
