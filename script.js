var i=0;
news=document.getElementsByClassName("news")[0];
fetch("https://newsapi.org/v2/everything?q=bitcoin&from=2019-12-03&sortBy=publishedAt&apiKey=84a96d2e549b42b88262cc529453ac69").then(function(response){
    return response.json();
})
    .then(function(jsonData){
        jsonData=jsonData.articles;
        while(jsonData[i]!= undefined){
            const newsWrapper=document.createElement("div");
            newsWrapper.classList.add("new");
            newsWrapper.innerHTML+="<div class=\"author\">"+jsonData[i].author+"</div>";
            newsWrapper.innerHTML+="<div class=\"title\">"+jsonData[i].title+"</div>";
            newsWrapper.innerHTML+="<div class=\"description\">"+jsonData[i].description+"</div>";
            newsWrapper.innerHTML+="<a href="+jsonData[i].url+"target=\"_blank\"></a>";
            /*newsWrapper.innerHTML+="<img div class=\"image\" src="+
                jsonData[i].urlToImage+" alt="+jsonData[i].title+">";*/
            newsWrapper.innerHTML+="<div class=\"publishedAt\">"+jsonData[i].publishedAt+"</div>"
            newsWrapper.innerHTML+="<div class=\"content\">"+jsonData[i].content+"</div>";
            newsWrapper.innerHTML+="<button class=\"readMore\">Read More</buttton>";
            /*newsWrapper.style.display="block";*/
            /*news.appendChild(newsWrapper);*/
            i++;
    }
});

function displaySorted(){
    newsArr.forEach(function(n){
        newsdate=n.getElementsByClassName("publishedAt");
        console.log(newsdate);
    });
}
displaySorted();


