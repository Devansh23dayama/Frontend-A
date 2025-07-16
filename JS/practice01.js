function outer(){
    var a=5;
    function inner(){
        console.log(a);
        var a=5;
    }
    inner();
}
outer();
