const endpoints = [
  {
    path: "relative/all",
    method: "get",
    functionName: "getAllRelatives",
  },
  {
    path: "question/category/all",
    method: "get",
    functionName: "getAllCategory",
  },
  {
    path: "relative",
    method: "post",
    functionName: "addNewRelative",
  },
  {
    path: "relative/update/",
    method: "put",
    functionName: "updateRelative",
  },
  {
    path: "relative/delete/",
    method: "delete",
    functionName: "deleteRelative",
  },
  {
    path: "location/place?inputPlace=",
    method: "put",
    functionName: "updateRelative",
  },
];
export default endpoints;
