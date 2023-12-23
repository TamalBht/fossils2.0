const ham= document.querySelector(".hamburger");
const menu=document.querySelector(".globalNavMenu");
const cross = document.querySelector(".closeGlobalNavMenuInner");
var albItem = document.querySelectorAll(".albumNameItem");
var albBg=document.querySelector(".albumsBg");
var albImg=document.querySelector(".albumArt img");
var songContainer=document.querySelector(".albSongList");
var inpContainer=document.querySelectorAll(".customInput");
var inp=document.querySelectorAll(".customInput input");



ham.addEventListener("click",function(){
    menu.setAttribute('style','display:block');
});
cross.addEventListener("click",function(){
    menu.setAttribute('style','display:none');
});
function removeAll(){
    for(var i=0; i<inp.length;i++){
        if(inp[i]===""){
            inpContainer[i].classList.remove("customInputFocussed");
        }
    }
};

function remove(){
    for(var i=0;i<8;i++){
        albItem[i].classList.remove("active");
    }
}
function WordCount(str) {
    var total = 0;
    for (var i = 0; i < str.length; i++)
      if (str[i] === ",") { 
        total += 1; 
    }
    total += 1;
    return total; 
  }
function removeSongs(){
    var songItem=document.querySelectorAll(".albSongItem");
    
    for(var i=0;i<songItem.length;i++){
        songItem[i].parentNode.removeChild(songItem[i]);
    }

}

function addSongs(num){
    
    var songs='';
    console.log(num);
    songs+=albItem[num].dataset.songs;
    
    console.log(songs);
    var numm=WordCount(songs);
    // nDivs.call(numm);
    var words=songs.split(',');
    console.log(words);
    for(var i=0;i<numm;i++){
        var newDiv = document.createElement('div');
        newDiv.innerHTML=words[i];
        newDiv.classList.add("albSongItem");
        songContainer.appendChild(newDiv);
    }
    
}

albItem[0].addEventListener("click",function(){
    remove.call();
    albItem[0].classList.add("active");
    albBg.setAttribute('style','background-image:url(images/album-art/fossils6.jpg)');
    albImg.src="images/album-art/fossils6.jpg";
    removeSongs.call();   

    addSongs(0);
    
    
})
albItem[1].addEventListener("click",function(){
    remove.call();
    albItem[1].classList.add("active");

    albBg.setAttribute('style','background-image:url(images/album-art/fossils5.jpg)');
    albImg.src="images/album-art/fossils5.jpg";
    removeSongs.call();   
    addSongs(1);      
})
albItem[2].addEventListener("click",function(){
    remove.call();
    albItem[2].classList.add("active");
    albBg.setAttribute('style','background-image:url(images/album-art/fossils4.jpg)');
    albImg.src="images/album-art/fossils4.jpg";
    removeSongs.call();   
    addSongs(2);      
})
albItem[3].addEventListener("click",function(){
    remove.call();
    albItem[3].classList.add("active");
    albBg.setAttribute('style','background-image:url(images/album-art/fossils3.jpg)');
    albImg.src="images/album-art/fossils3.jpg";
    removeSongs.call();   
    addSongs(3);      
})
albItem[4].addEventListener("click",function(){
    remove.call();
    albItem[4].classList.add("active");
    albBg.setAttribute('style','background-image:url(images/album-art/aupodartho.jpg)');
    albImg.src="images/album-art/aupodartho.jpg";
    removeSongs.call();   
    addSongs(4);      
})
albItem[5].addEventListener("click",function(){
    remove.call();
    albItem[5].classList.add("active");
    albBg.setAttribute('style','background-image:url(images/album-art/missionF.jpg)');
    albImg.src="images/album-art/missionF.jpg";
    removeSongs.call();   
    addSongs(5);      
})
albItem[6].addEventListener("click",function(){
    remove.call();
    albItem[6].classList.add("active");
    albBg.setAttribute('style','background-image:url(images/album-art/fossils2.jpg)');
    albImg.src="images/album-art/fossils2.jpg";
    removeSongs.call();   
    addSongs(6);      
})
albItem[7].addEventListener("click",function(){
    remove.call();
    albItem[7].classList.add("active");
    albBg.setAttribute('style','background-image:url(images/album-art/fossils1.jpg)');
    albImg.src="images/album-art/fossils1.jpg";
    removeSongs.call();   
    addSongs(7);      
})
inp[0].addEventListener("click",function(){
    removeAll.call();
    inpContainer[0].classList.add("customInputFocussed");
})
inp[1].addEventListener("click",function(){
    removeAll.call();
    inpContainer[1].classList.add("customInputFocussed");
})
inp[2].addEventListener("click",function(){
    removeAll.call();
    inpContainer[2].classList.add("customInputFocussed");
})
inp[3].addEventListener("click",function(){
    removeAll.call();
    inpContainer[3].classList.add("customInputFocussed");
})
    

