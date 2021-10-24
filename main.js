// Bài 1
/**
 * khối 1:
 * salaryDay (tiền lương mỗi ngày)
 * workDay (số ngày làm việc)
 * salarySum (tổng tiền lương)
 * 
 * 
 * Khối 2:
 * B1: Lấy gtri từ form (khi click vào btn Tính Nào)
 * B2: Tính Tổng tiền lương
 *salarySum = parseInt(salaryDay) * parseInt(workDay);
 * B3: tiền tip mỗi người
 *
 * 
 * khối 3:
 * 
 */
function chanLeNho100(){
    var soChan=0;
    var soLe=0;
    for(var i=1;i<100;i++){
        if(i%2==0){
            soChan+=" "+i;
        }else{
            soLe+=" "+i;
        }
    }
    document.querySelector("#txtResult").innerHTML="Số chẵn: "+soChan+"\nSố lẻ: "+soLe;
}
document.querySelector("#btnResult").onclick=chanLeNho100;

function chanLeNho100While(){
    var soLe=0;
    var i=0;
    var soChan=0;
    while(i<100){
       if(i%2==0){
           soChan+=" "+i;
       }else{
           soLe+=" "+i;
       }
       i++;
   }
    document.querySelector("#txtResultWhile").innerHTML="Số chẵn: "+soChan+"\nSố lẻ: "+soLe;
}
document.querySelector("#btnResultWhile").onclick=chanLeNho100While;

// Bài 2
/**
 * khối 1:
 * salaryDay (tiền lương mỗi ngày)
 * workDay (số ngày làm việc)
 * salarySum (tổng tiền lương)
 * 
 * 
 * Khối 2:
 * B1: Lấy gtri từ form (khi click vào btn Tính Nào)
 * B2: Tính Tổng tiền lương
 *salarySum = parseInt(salaryDay) * parseInt(workDay);
 * B3: tiền tip mỗi người
 *
 * 
 * khối 3:
 * 
 */
function demSoNhoHon1000(){
    var dem=0;
    for(var i=0;i<1000;i++){
        if(i%3==0){
            dem++;
        }
    }
    document.querySelector("#txtDem").innerHTML="Số chia hết cho 3 nhỏ hơn 1000: "+dem+" số";
}
document.querySelector("#btnDem").onclick=demSoNhoHon1000;


// Bài 3
/**
 * khối 1:
 * salaryDay (tiền lương mỗi ngày)
 * workDay (số ngày làm việc)
 * salarySum (tổng tiền lương)
 * 
 * 
 * Khối 2:
 * B1: Lấy gtri từ form (khi click vào btn Tính Nào)
 * B2: Tính Tổng tiền lương
 *salarySum = parseInt(salaryDay) * parseInt(workDay);
 * B3: tiền tip mỗi người
 *
 * 
 * khối 3:
 * 
 */
function soNguyenNho1000(){
    var tong=0;
    var viTri=0;
    for(var i=1;tong<10000;i++){
        tong+=i;
        viTri=i;
    }
    // document.querySelector("#txtNho1000").innerHTML="Số nguyên dương nhỏ hơn 1000 là: "+viTri+"-"+tong;
    console.log(viTri);
}
document.querySelector("#btnNho1000").onclick=soNguyenNho1000;



 // Bài 4
/**
 * khối 1:
 * salaryDay (tiền lương mỗi ngày)
 * workDay (số ngày làm việc)
 * salarySum (tổng tiền lương)
 * 
 * 
 * Khối 2:
 * B1: Lấy gtri từ form (khi click vào btn Tính Nào)
 * B2: Tính Tổng tiền lương
 *salarySum = parseInt(salaryDay) * parseInt(workDay);
 * B3: tiền tip mỗi người
 *
 * 
 * khối 3:
 * 
 */
function tinhTong(){
    var x=document.getElementById("numX").value;
    var n=document.getElementById("numN").value;
    var tong=0;
    for(var i=1;i<=n;i++){
       tong+= Math.pow(x,i);
    }
    document.getElementById("txtTong").innerHTML="Tổng là: "+tong;
}
document.querySelector("#btnTong").onclick=tinhTong;


// Bài 5
/**
 * khối 1:
 * salaryDay (tiền lương mỗi ngày)
 * workDay (số ngày làm việc)
 * salarySum (tổng tiền lương)
 * 
 * 
 * Khối 2:
 * B1: Lấy gtri từ form (khi click vào btn Tính Nào)
 * B2: Tính Tổng tiền lương
 *salarySum = parseInt(salaryDay) * parseInt(workDay);
 * B3: tiền tip mỗi người
 *
 * 
 * khối 3:
 * 
 */
 function tinhGT(){
    var n=document.getElementById("numGT").value;
    tongGT=1;
    for(var i=1;i<=n;i++){
        tongGT*=i;
    }
    document.getElementById("txtGT").innerHTML="Giai Thừa: "+tongGT;
}
document.querySelector("#btnGT").onclick=tinhGT;


// Bài 6
/**
 * khối 1:
 * salaryDay (tiền lương mỗi ngày)
 * workDay (số ngày làm việc)
 * salarySum (tổng tiền lương)
 * 
 * 
 * Khối 2:
 * B1: Lấy gtri từ form (khi click vào btn Tính Nào)
 * B2: Tính Tổng tiền lương
 *salarySum = parseInt(salaryDay) * parseInt(workDay);
 * B3: tiền tip mỗi người
 *
 * 
 * khối 3:
 * 
 */
 function inDiv(){
     var content="";
    for(var i=1;i<=10;i++){
        if(i%2==0){
            content+="";
        }
        else if(i%2!=0){
            document.getElementById("txtDiv").innerHTML=" ko Giai Thừa: ";
        }
    }
}
document.querySelector("#btnDiv").onclick=inDiv;


// Bài 7
/**
 * khối 1:
 * salaryDay (tiền lương mỗi ngày)
 * workDay (số ngày làm việc)
 * salarySum (tổng tiền lương)
 * 
 * 
 * Khối 2:
 * B1: Lấy gtri từ form (khi click vào btn Tính Nào)
 * B2: Tính Tổng tiền lương
 *salarySum = parseInt(salaryDay) * parseInt(workDay);
 * B3: tiền tip mỗi người
 *
 * 
 * khối 3:
 * 
 */
 function inDiv(){
     var num=document.querySelector("#numSNT").value;
     var snt="";
     for(var i=2;i<num;i++){
         if(i==2){
             snt+=" "+i;
         }else if(i%2!=0){
             for(var i=3;i<num;i+=2){
                snt+=" "+i;
             }
         }
     }

    document.querySelector("#txtSNT").innerHTML=snt;
}
document.querySelector("#btnSNT").onclick=inDiv;