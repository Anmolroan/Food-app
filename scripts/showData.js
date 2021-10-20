async function getdata(url){
    let res = await fetch(url)
    let data =await res.json()
    return data.meals 
}
function append(container,data){
data.forEach(({strMealThumb,strMeal,idMeal}) => {
    let div=document.createElement("div")
    let img=document.createElement("img")
    let title=document.createElement("p")
    let id=document.createElement("p")
    img.src=strMealThumb;
    title.innerText=strMeal;
    id.innerText= "Meal Id : "+idMeal;
    div.append(img,title,id)
    container.append(div)
});
}
function random(container,data){
    data.forEach((el) => {
        let div=document.createElement("div")
        let img=document.createElement("img")
        let title=document.createElement("p")
        // let id=document.createElement("p")
        img.src=el.strMealThumb;
        title.innerText=el.strMeal;
        // information
       
        // console.log(el.idMeal)
        // id.innerText= "Meal Id : "+el.idMeal;
        div.append(img,title)
        for(let key in el){
            console.log(key)
            if(key!="strMealThumb"||key!="strMeal"||el[key]!=""){
                let id=document.createElement("p")
                id.innerText=el[key]
                div.append(id)
            }
        }
       
        container.append(div)
    });
     
}

export {getdata,append,random}
// {strMealThumb,strMeal,idMeal}