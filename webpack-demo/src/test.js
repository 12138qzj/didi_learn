(function(){
    function inner(a){
        console.log(inner.s)
    }
    return inner(inner.s="csad")
})()