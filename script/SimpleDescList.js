$(document).ready(function () {
    /* 1. 把描述进行排序 */
    let descs = $(".description");
    // descsNameOrdered 是由class为description的元素，的HTML值，构成的无重复数组（按照在HTML文档中出现的顺序）；
    // descsValueRefOrdered 是由class为description的元素，的href值，构成的无重复数组（按照在HTML文档中出现的顺序）；
    // descsNameIdOrdered 是由class为description的元素，的id值，构成的无重复数组（按照在HTML文档中出现的顺序）；
    let descsNameOrdered = [];
    let descsValueRefOrdered = [];
    let descsNameIdOrdered = [];
    for (let i = 0; i < descs.length; i++) {
        let descName = descs[i].innerHTML;
        let descValueRef = descs[i].getAttribute('href');
        let descNameId = descName + "-" + descValueRef.substr(1); // 必须去掉#号

        descs[i].setAttribute("id", descNameId);

        // array push only if not exist
        descsNameOrdered.indexOf(descName) === -1 ? descsNameOrdered.push(descName) : console.log(descName + " already exists");
        descsValueRefOrdered.indexOf(descValueRef) === -1 ? descsValueRefOrdered.push(descValueRef) : console.log(descValueRef + " already exists");
        descsNameIdOrdered.indexOf(descNameId) === -1 ? descsNameIdOrdered.push(descNameId) : console.log(descNameId + " already exists");
    }

    /* 2. 生成排好序的描述列表，附在最后 */
    if (descsValueRefOrdered.length > 0) {
        $(document.body).append("<div><h2>Description List Append</h2><ul id='descriptions-append'></ul></div>");
        for (let i = 0; i < descsValueRefOrdered.length; i++) {
            let id = descsValueRefOrdered[i].substring(1);
            let item = document.createElement('li');
            // 描述的值: document.getElementById(id)
            let descValue = document.getElementById(id);
            let itemValue = descValue;
            // 描述的名: descsNameOrdered[i]
            let name = "<b>" + descsNameOrdered[i] + "</b><br>";
            // 一个 ^ 号
            let caret = "<a href='#" + descsNameIdOrdered[i] + "'>^</a>";
            // ^ 空格 描述的名 描述的值
            $(itemValue).prepend(caret, " ", name);
            if (itemValue !== null) {
                item.appendChild(itemValue);
                document.getElementById('descriptions-append').appendChild(item);
            }
        }
    }
});
