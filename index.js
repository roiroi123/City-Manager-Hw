const cityNameInput = $("#cityName");
const cityImgInput = $("#cityimg");
const addBtn = $("#btn");
const DivToDrawTo = $("#drawTo")
addBtn.submit(function(e) {
  e.preventDefault();
});

addBtn.on("click",()=>{
  const mainDiv = $("<div></div>").addClass("card").css({"display" : "inline-block"});
  const cityImg = $(`<img src="${cityImgInput.val()}" alt="City Image">`).addClass("card-img-top");
  const cardbody = $("<div></div>").addClass("card-body")
  const cityName = $(`<h5>${cityNameInput.val()}</h5>`).addClass("card-title");
  const p = $(`<p>${cityNameInput.val()} is The Best City Ever !!!</p>`);
  const likeBtn = $(`<input type="button" id ="Like"  >`).addClass("btn btn-primary").val("like")
  let numOfLikes = 0
  const LikesCounter = $(`<h6>${numOfLikes}👍</h6>`)
  const deleteBtn = $(`<input type="button" id ="delete"  >`).addClass("close").val("X")
  
  mainDiv.append(deleteBtn)
  mainDiv.append(cityImg)
  mainDiv.append(cardbody)
  cardbody.append(cityName)
  cardbody.append(p)
  cardbody.append(likeBtn)
  cardbody.append(LikesCounter)
  
  DivToDrawTo.append(mainDiv)

  likeBtn.on("click",()=>{

    setTimeout(() => {
      function plusOne() {
        numOfLikes++;
        LikesCounter.text(numOfLikes+ "👍")
      }
      plusOne()
  
    }, 2000);
    
    
    
    
  })
deleteBtn.on("click",()=>{
  mainDiv.remove()
})
})
