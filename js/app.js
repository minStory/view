const test=document.querySelector(".div");

// console.log(test);

f1=()=>{
    test.textContent="test";
    test.innerHTML="<span>good</span>";
    test.innerText="hello";
}

f1();

