
    let textareaElement=document.querySelector("textarea")
    let lenElement=document.querySelector("h2 span")
    let resDivElement=document.querySelector("#resDiv")

    textareaElement.addEventListener("input",()=>{
      let textWithoutSpace = textareaElement.value.replace(/\s/g, "");
      
      lenElement.innerText = textWithoutSpace.length
      resDivElement.innerText=textareaElement.value
    })
