import React, { useState } from "react";
import "react-sortable-tree/style.css";
import TreeView from "./DragDrop";
import UpdateNodeComponent from "./Add";
import "./styles.css";
import { arrayMove } from "react-sortable-hoc";
import { getNodeKey, removeNodeAtPath } from "react-sortable-tree";

const Tree = (props) => {
  const initialData = [
    {
      title: "Data_1",
      children: [
        {
          title: "Data_1-1"
        }
      ]
    },
    {
      title: "Data_2"
    },
    {
      title: "Data_3"
    }
  ];

  const [treeData, settreeData] = useState(initialData);
  const [action, setaction] = useState("add");
  const [numbers, setnumbers] = useState("");
  const [path, setPath] = useState("");
  // const [, setnumbers] = useState("");
  const [currentNodeItem, setcurrentNodeItem] = useState("");
  // const [currentNodeIndex, setcurrentNodeIndex] = useState();
  // const [parentNodeIndex, setparentNodeIndex] = useState();
  console.log(currentNodeItem, "currentNodeItem222");

  const updateTreeData = (data) => {
    settreeData([...data]);
  };

  //Edit node
  // const numbers = []

  const EditNode = (event) => {
    console.log(event, "event");
    // console.log(event.node.id, "idididid");
    // console.log(newId, "newId");
    // var newId = event.node.id+1
    var treeIndex = event.path[event.path.length - 1];
    console.log("treeindex update", treeIndex);
    if (event.path === treeIndex) {
      console.log("title to tree index", treeIndex);
      const title = event.node.title;
      setcurrentNodeItem(title);
      setaction("edit");
    } else {
      console.log("title to tree index else", treeIndex);
      console.log(event.node.title, "eventevent");
      console.log(event.path, "pathpath");
      setnumbers(treeIndex);
      setPath(event.path);
      setcurrentNodeItem(event.node.title);
      setaction("edit");
    }
  };

  //Update node
  const updateNode = (rowInfo, data) => {
    // console.log(data, "data")
    console.log(numbers, "array position");
    console.log(path, "path position");
    console.log(rowInfo, "rowInfo value");
    var treeIndex = numbers;
    var paths = path;
    console.log(treeIndex, "treeIndex position");
    if (action === "edit") {
      treeData[treeIndex].title = rowInfo;
      settreeData([...treeData]);
      setaction("add");
    } else {
      settreeData([...treeData, { title: rowInfo }]);
      alert("hello");
      setaction("add");
    }
  };

  //Remove node
  const removeNode = (rowInfo) => {
    console.log("eremove node", rowInfo);
    let { treeIndex, path, node } = rowInfo;
    settreeData(
      removeNodeAtPath({
        treeData: treeData,
        path: path,
        getNodeKey: ({ node: TreeNode, treeIndex: number }) => {
          return number;
        },
        ignoreCollapsed: true
      })
    );
  };

  return (
    <div>
      <div className="add-dt">
        <div className="left-side">
          <UpdateNodeComponent
            value={currentNodeItem}
            updateNode={(data) => updateNode(data)}
            action={action}
          />
        </div>
        <div className="right-side">
          <TreeView
            data={treeData}
            EditNode={EditNode}
            removeNode={removeNode}
            updateTreeData={updateTreeData}
          />
        </div>
      </div>
    </div>
  );
};
export default Tree;
