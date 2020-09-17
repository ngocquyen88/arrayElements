let x=0;
let array=Array();

//Xây dựng hàm add_element_to_array() để thêm mới một phần tử từ form
function add_element_to_array(){
    array[x]=document.getElementById("txtValue").value;
    alert("Element: "+array[x]+ "Add at index "+x);
    x++;
    document.getElementById("txtValue").value="";
}

//Xây dựng hàm display_array() để hiển thị các phần tử trong mảng
function display_array(){
    let e ="<hr/>";
    for(let i=0;i<array.length;i++){
        e+="Element "+i+" = "+array[i]+"<br/>";
    }
    document.getElementById("result").innerHTML=e;
}