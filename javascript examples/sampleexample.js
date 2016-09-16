
       

       // var k=new getdata(10,40,3,5,7,4,3,2,1)

        var array = [];
function getpush(){
    var obj = {
        name: document.getElementById("txtid").value,
        type: document.getElementById("selid").value,
        gender: document.getElementById("gender").value,
        status:document.getElementById("chkid1").value,
        description:document.getElementById("txta").value


    }
    array.push(obj);
    console.log(array)
}
