// console.log("hi")

var btnNode = document.querySelector(".btn")
var inpNode = document.querySelector(".num")
var contNode = document.querySelector(".container")
var infoNode = document.querySelector(".info")
var strNode = document.querySelector(".start_btn")
var numsNode = document.querySelector(".nums")
var selectSortNode = document.querySelector(".select_sort")
var sortNode = document.querySelector(".sort")
var nextNode = document.querySelector(".next")
var swapNode = document.querySelector(".swap")
var controlNode = document.querySelector(".control")

btnNode.addEventListener('click', function(event) {

    var n = inpNode.value
    infoNode.innerHTML = `Enter ${n} numbers`
    strNode.addEventListener('click', function(event) {
        var numsArray = numsNode.value.split(" ")

        // console.log(typeof(numsArray[0]));

        var html = ""

        //Adding bars with 0 width and 0 height
        for(var i = 0; i < n; ++i) {
            html += "<div class = 'bars'>" + "</div>&nbsp;"
        }
        contNode.innerHTML = html

        //Adding height given by user to the elements
        var barNodes = document.querySelectorAll(".bars")
        for(var i = 0; i < n; ++i) {
            barNodes[i].style.height = numsArray[i] + "px"
            // console.log(barNodes[i].style.height);
        }
        selectSortNode.style.display = "initial";

        sortNode.addEventListener('click', function(event) {
            controlNode.style.display = "initial";
            var i = 0
            var min = 0
            nextNode.addEventListener('click', function(event) {
                min = selectionSort(numsArray, barNodes, i, n)                
            })
            swapNode.addEventListener('click', function(event) {
                swap(numsArray, barNodes, i, min)
                i++
                if(i == n - 1) {
                    infoNode.innerHTML = "Numbers are sorted"
                }
            })
        })

    })    
})

function swap(numsArray, barNodes, i, min) {
    var temp = numsArray[i]
    var temp2 = barNodes[i].style.height
    numsArray[i] = numsArray[min];
    barNodes[i].style.height = barNodes[min].style.height
    barNodes[i].style.backgroundColor = "blue";
    numsArray[min] = temp
    barNodes[min].style.height = temp2
    barNodes[min].style.backgroundColor = "blue";
}

function selectionSort(numsArray, barNodes, i, n) {
    for(; i < n - 1; ++i) {
        var min = i;
        for(var j = i + 1; j < n; ++j) {
            var v1 = Number(numsArray[min])
            var v2 = Number(numsArray[j]);
            if(v1 > v2) {
                min = j;
            }
        }
        if(!(numsArray[i] === numsArray[min])) {
            infoNode.innerHTML = `Since ${numsArray[min]} smaller than ${numsArray[i]}, Action: swap`
        } else {
            infoNode.innerHTML = `Since ${numsArray[min]} equal to ${numsArray[i]}, Action: donothing`
        }
        barNodes[i].style.backgroundColor = "green"
        barNodes[min].style.backgroundColor = "green"
        break;
    }
    return min
}