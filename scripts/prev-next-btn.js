function prev(target){
    // console.log(target);
    let counter = target.classList[1];
    let parent = target.parentNode;
    let nextBtn = parent.children[1];
    target.classList.remove(counter);
    nextBtn.classList.remove(counter);
    let length = parent.children.length-2;
    // console.log("Length: "+length);
    // console.log(counter);
    //console.log(parent.children[2]);
    counter--;
    if(counter >= 0){
        target.classList.add(counter);
        nextBtn.classList.add(counter);
        // console.log(counter);
        // console.log(parent.children[counter+3]);
        parent.children[counter+3].style.transition = 1+'s';
        parent.children[counter+3].style.left = 100+'%';
    }else{
        counter = length-1;
        // console.log("Counter: "+ counter);
        target.classList.add(counter);
        nextBtn.classList.add(counter);
        // console.log(counter);
        // console.log(parent.children[counter+1]);
        for(let i=counter; i>0; i--){
            // console.log(parent.children[i+2]);
            parent.children[i+2].style.transition = 1+'s';
            parent.children[i+2].style.left = 0+ 'px';
        }
    }
}

function next(target){
    // console.log(target);
    let counter = target.classList[1];
    let parent = target.parentNode;
    let prevBtn = parent.children[0];
    target.classList.remove(counter);
    prevBtn.classList.remove(counter);
    let length = parent.children.length - 2;
    // console.log("Length: "+length);
    // console.log(parent);
    // console.log(parent.children[2]);
    counter++;
    if(counter < length){
        target.classList.add(counter);
        prevBtn.classList.add(counter);
        // console.log(counter);
        // console.log(parent.children[counter+2]);
        parent.children[counter+2].style.transition = 1+'s';
        parent.children[counter+2].style.left = 0+ 'px';
    }else{
        // console.log("Counter: "+ counter);
        counter=0;
        target.classList.add(counter);
        prevBtn.classList.add(counter);
        for(let i=0; i<length; i++){
            // console.log(parent.children[i+2]);
            parent.children[i+2].style.transition = 1+'s';
            parent.children[i+2].style.left = 100+'%';
        }
        // console.log(counter);
        // console.log(parent.children[counter+2]);

    }
}