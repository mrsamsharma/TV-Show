export default () => {
  if (
    document.querySelector(".comments-list") &&
    document.querySelector(".item")
  ) {
    
    (document.querySelector(".comments-count").innerHTML =
      document.querySelectorAll(".item").length);
      console.log( document.querySelectorAll(".item").length)
      return  document.querySelectorAll(".item").length
  } 
  
};
