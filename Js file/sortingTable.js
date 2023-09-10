var arr = [{rollNo :1,name:"aaa",marks:10},
        {rollNo :2,name:"bbb",marks:35},
        {rollNo :3,name:"ccc",marks:15},
        {rollNo :4,name:"ddd",marks:70},
        {rollNo :5,name:"eee",marks:99},];

        var tbl = document.getElementById("tbl");
        var btn = document.getElementById("btn");
        btn.addEventListener("click",funSort,false);

        function display(){
            var str = "<tr><td>RollNo</td><td>Name</td><td>Marks</td></tr>";
            for (i = 0; i<arr.length;i++){
                str += "<tr><td>"+arr[i].rollNo+"</td><td>"+arr[i].name+"</td><td>"+arr[i].marks+"</td></tr>";
            }
            tbl.innerHTML = str;
        }
        display();

        function funSort(){
            var radio = document.querySelectorAll("input[type=radio]");
            var txtRadio = " ";
            for (i = 0; i <radio.length; i++){
                if(radio[i].checked){
                    txtRadio = radio[i].value;
                    console.log(txtRadio);
                    break;
                }
            }
            if (txtRadio == "A"){
                for (i =0; i < arr.length; i++){
                    for (j = i+1; j < arr.length; j++){
                        if (arr[i].marks > arr[j].marks){
                            console.log(arr[i].marks>arr[j].marks);
                            var temp = arr[i];
                            arr[i] = arr[j];
                            arr[j] = temp;
                        }
                    }
                }
            }
            else if (txtRadio == "D"){
                for (i =0; i < arr.length; i++){
                    for (j = i+1; j < arr.length; j++){
                        if (arr[i].marks < arr[j].marks){
                            console.log(arr[i].marks>arr[j].marks);
                            var temp = arr[i];
                            arr[i] = arr[j];
                            arr[j] = temp;
                        }
                    }
                }
            }
            display();
        }