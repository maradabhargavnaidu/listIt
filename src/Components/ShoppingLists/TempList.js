import React from "react";

const TempList = () => {
  //   function newList() {
  //     tit = document.getElementById("ListName").value;

  //     if (localStorage.getItem("List") == null) {
  //       listArray = [];
  //       listArray.push([tit, des]);
  //       localStorage.setItem("List", JSON.stringify(listArray));
  //     } else {
  //       listArrayStr = localStorage.getItem("List");
  //       listArray = JSON.parse(listArrayStr);
  //       listArray.push([tit]);
  //       localStorage.setItem("List", JSON.stringify(listArray));
  //     }
  //     List();
  //   }

  //   function List() {
  //     tit = document.getElementById("listName").value;

  //     if (localStorage.getItem("List") == null) {
  //       listArray = [];
  //       localStorage.setItem("List", JSON.stringify(listArray));
  //     } else {
  //       listArrayStr = localStorage.getItem("List");
  //       listArray = JSON.parse(listArrayStr);
  //     }
  //     let tablebody = document.getElementById("listBody");
  //     let str = "";
  //     listArray.forEach((element, index) => {
  //       str += `
  //               <tr>
  //                 <th scope="row">${index + 1}</th>
  //                 <td>${element[0]}</td>
  //                 <td><button type="clear" class="btn btn-primary" onclick="deleted(${index})">clear</button></td>
  //               </tr>`;
  //     });
  //     listBody.innerHTML = str;
  //   }
  return (
    <div className="bg-blue-500 h-screen flex justify-center items-center">
      <div className="bg-white w-full max-w-md flex flex-col space-y-3 p-4 rounded-md px-5 mx-auto">
        <label>List Name</label>
        <input
          type="text"
          placeholder="New List"
          className="rounded p-3 border-gray-400 border-2 outline-blue-500"
          id="listName"
        />
        <button className="bg-green-600 p-3 rounded text-white">Add</button>
      </div>
    </div>
  );
};

export default TempList;
