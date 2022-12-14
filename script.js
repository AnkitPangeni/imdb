function watch(){
    
    document.querySelector("iframe").style.display="block";
    
    let a =document.querySelector('input').value;
   let c = a.split("/");
   let b = c[4];
    let iframe= "https://www.2embed.to/embed/imdb/movie?id="+b;
    document.querySelector('iframe').src = iframe;
    }
    setTimeout(close,3000);
    function close(){
        document.querySelector(".warn").style.display="none";
   document.querySelector(".display").style.display="block";
    }