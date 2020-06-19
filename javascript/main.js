
//SETS_VIEW_FUNCTION
const setsView = () => {
  const listNodeList = document.querySelectorAll("li");
  const ListArray = [...listNodeList];
  const newListButton = document.querySelector(".new_list_button");

  if (ListArray.length <= 10) {
    newListButton.addEventListener("click", () => {
      window.open("set_create_view.html", "_self");
    })
  }
  else  newListButton.style.display = "none";
}

const setView = () => {
  console.log("ok")
}

const setStudyView = () => {
  console.log("ok")
}

const setCreateView = () => {
  console.log("ok")
}

//INITIATION_FUNCTION
window.addEventListener('DOMContentLoaded', (event) => {
  const fileName = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);

  switch (fileName) {
    case "sets_view.html":
      setsView();
      break;
    case "set_view.html":
      setView();
      break;
    case "set_study_view.html":
      setStudyView();
      break;
    case "set_create_view.html":
      setCreateView();
      break;
  }
});



