var arr = ["red","green","blue"];
        var str = "<ul>";
        $.each(arr,function(a,k){
            str += "<li>"+ a + "***" + k;
        })
        str += "</ul>";
        $("div").html(str);


        var obj = {rollNo:1, name:"AAA", mks:20};
        for(x in obj){
            console.log(x,obj[x]);
        }

        $.each(obj,function(i,k){
            console.log(i,k);
        })

        var n = $.inArray("red",arr);
        console.log(n);


        $("tr").click(function(){
            var trVal = $(this).find("td").map(function(){
                return $(this).text();
            })
            console.log("trVal[0] = ",trVal[0]);
        })

        function fun(event){
            if (event.type == "click"){
                alert("btn1 is Clicked!!");
            }
            else if (event.type == "mouseover"){
                $("#btn1").css("background-color","red");
            }
            else if (event.type == "mouseout"){
                $("#btn1").css("background-color","blue");
            }
        }

        $("#btn1").on({
            "click":fun,
            "mouseover":fun,
            "mouseout":fun
        });

        $("#btn2").click(function(){
            $("#btn1").off("click",fun);
            alert("btn1 click  handler is remove!!");
        })