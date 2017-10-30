var setting = {
    edit: {
        drag: {
            autoExpandTrigger: true,
            prev: dropPrev,
            inner: dropInner,
            next: dropNext
        },
        enable: true,
        showRemoveBtn: false,
        showRenameBtn: false
    },
    data: {
        simpleData: {
            enable: true
        }
    },
    callback: {
        onClick: onClick,
        beforeDrop: zTreeOnDrop,
        beforeDrag: beforeDrag,
    }
};

var zNodes = [
    {id: 1, pId: 0, name: "二公局一公司党委", open: true, childOuter: false},
    {id: 11, pId: 1, name: "二公局三公司党委", childOuter: false, dropInner: false},
    {id: 12, pId: 1, name: "二公局一公司基地管理中心党支部", childOuter: false},
    {id: 13, pId: 1, name: "二公局一公司福州地铁项目党支部", childOuter: false},
    {id: 14, pId: 1, name: "二公局一公司博贺湾大桥项目党支部", childOuter: false},
    {id: 15, pId: 1, name: "二公局一公司刚果（布）项目党支部", childOuter: false},
    {id: 16, pId: 1, name: "二公局青海克大公路4标项目党支部", childOuter: false},
    {id: 2, pId: 0, name: "二公局一公司党委", childOuter: false},
    {id: 21, pId: 2, name: "二公局二公司总部党支部", childOuter: false, dropInner: false},
    {id: 22, pId: 2, name: "二公局二公司总部党支部", childOuter: false},
    {id: 23, pId: 2, name: "二公局二公司桐庐项目党支部", childOuter: false},
    {id: 24, pId: 2, name: "二公局二公司宁高项目党支部", childOuter: false},
    {id: 25, pId: 2, name: "二公局二公司铜怀项目党支部", childOuter: false},
    {id: 26, pId: 2, name: "二公局二公司南京五桥项目党支部", childOuter: false},
    {id: 3, pId: 0, name: "二公局三公司党委", childOuter: false},
    {id: 31, pId: 3, name: "二公局三公司汉坪项目党支部", childOuter: false, dropInner: false},
    {id: 32, pId: 3, name: "二公局三公司宝坪LJ-11标项目党支部", childOuter: false},
    {id: 33, pId: 3, name: "二公局三公司北仙公路2标项目党支部", childOuter: false},
    {id: 34, pId: 3, name: "二公局三公司北仙公路2标项目党支部", childOuter: false},
    {id: 35, pId: 3, name: "二公局三公司大潮高速TJ6标党支部", childOuter: false},
    {id: 36, pId: 3, name: "二公局三公司佛山城市轨道交通2号线（一期）TJ3标党支部", childOuter: false},
    {id: 37, pId: 3, name: "二公局三公司阜兴泰高速公路兴化至泰州段XHT-2标项目经理部党支部", childOuter: false}

];


function zTreeOnDrop(event, treeId, treeNodes, targetNode, moveType) {
    //alert(treeNodes.length + "," + (targetNode ? (targetNode.tId + ", " + targetNode.name) : "isRoot" ));
    return targetNode ? targetNode.drop !== false : true;
}

function onClick(event, treeId, treeNode, clickFlag) {
    var id = treeNode.id;
    alert(id);
}

function dropPrev(treeId, nodes, targetNode) {
    var pNode = targetNode.getParentNode();
    if (pNode && pNode.dropInner === false) {
        return false;
    } else {
        for (var i = 0, l = curDragNodes.length; i < l; i++) {
            var curPNode = curDragNodes[i].getParentNode();
            if (curPNode && curPNode !== targetNode.getParentNode() && curPNode.childOuter === false) {
                return false;
            }
        }
    }
    return true;
}

function dropInner(treeId, nodes, targetNode) {
    if (targetNode && targetNode.dropInner === false) {
        return false;
    } else {
        for (var i = 0, l = curDragNodes.length; i < l; i++) {
            if (!targetNode && curDragNodes[i].dropRoot === false) {
                return false;
            } else if (curDragNodes[i].parentTId && curDragNodes[i].getParentNode() !== targetNode && curDragNodes[i].getParentNode().childOuter === false) {
                return false;
            }
        }
    }
    return true;
}

function dropNext(treeId, nodes, targetNode) {
    var pNode = targetNode.getParentNode();
    if (pNode && pNode.dropInner === false) {
        return false;
    } else {
        for (var i = 0, l = curDragNodes.length; i < l; i++) {
            var curPNode = curDragNodes[i].getParentNode();
            if (curPNode && curPNode !== targetNode.getParentNode() && curPNode.childOuter === false) {
                return false;
            }
        }
    }
    return true;
}

var log, className = "dark",
    curDragNodes, autoExpandNode;

function beforeDrag(treeId, treeNodes) {
    className = (className === "dark" ? "" : "dark");
    for (var i = 0, l = treeNodes.length; i < l; i++) {
        if (treeNodes[i].drag === false) {
            curDragNodes = null;
            return false;
        } else if (treeNodes[i].parentTId && treeNodes[i].getParentNode().childDrag === false) {
            curDragNodes = null;
            return false;
        }
    }
    curDragNodes = treeNodes;
    return true;
}

$(document).ready(function () {
    var treeObj = $.fn.zTree.init($("#treeDemo"), setting, zNodes);
    var treeObj2 = $.fn.zTree.init($("#treeDemo2"), setting, zNodes);
    var treeObj3 = $.fn.zTree.init($("#treeDemo3"), setting, zNodes);

    var treenode = treeObj.getNodeByParam("id", 1, null);
    if (treenode.length > 0) {
        var isOpen = treenode[0].open;
    }
    var treenode2 = treeObj2.getNodeByParam("id", 1, null);
    if (treenode2.length > 0) {
        var isOpen = treenode2[0].open;
    }
    var treenode3 = treeObj3.getNodeByParam("id", 1, null);
    if (treenode3.length > 0) {
        var isOpen = treenode3[0].open;
    }


});