$(document).ready(function () {
    /* 1. 描述排序
     *
     *    按照引用在 HTML 文档中出现顺序, 把引用的 data-ref 生成无重复值数组
     *    descsOrdered
     */
    let descs = $(".description");
    // descNameOrdered 是由description的HTML值构成的无重复数组，按照在HTML文档中出现的顺序；
    // descsRefOrdered 是由description的href的值构成的无重复数组，按照在HTML文档中出现的顺序；
    // "name" & "value ref": descNameOrdered表示name，descsRefOrdered表示value的引用。
    let descsNameOrdered = [];
    let descsRefOrdered = [];
    for (let i = 0; i < descs.length; i++) {
        let descName = descs[i].innerHTML;
        let descRef = descs[i].getAttribute('href');
        // array push only if not exist
        descsNameOrdered.indexOf(descName) === -1 ? descsNameOrdered.push(descName) : console.log(descName + " already exists");
        descsRefOrdered.indexOf(descRef) === -1 ? descsRefOrdered.push(descRef) : console.log(descRef + " already exists");
    }

    /* 2. 生成排好序的描述，附在最后 */
    if (descsRefOrdered.length > 0) {
        $(document.body).append("<div><h2>Description List Append</h2><ul id='descriptions-append'></ul></div>");
        for (let i = 0; i < descsRefOrdered.length; i++) {
            let id = descsRefOrdered[i].substring(1);;
            let desc = document.createElement('li');
            desc.innerHTML = "<b>" + descsNameOrdered[i] + "</b>";
            let descValue = document.getElementById(id);
            if (descValue !== null) {
                desc.appendChild(descValue);
                document.getElementById('descriptions-append').appendChild(desc);
            }
        }
    }
});
