const ddnGenre=document.getElementById('ddn-genre');
ddnGenre.onchange=function(){
    const selectedGenre=ddnGenre.options[ddnGenre.selectedIndex].value;
    console.log(selectedGenre)
}