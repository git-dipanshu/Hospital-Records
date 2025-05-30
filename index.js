// fill in javascript code here
document.querySelector("form").addEventListener("submit", hpFunction)
let hpArr =JSON.parse(localStorage.getItem("hpArr"))||[];
tableData(hpArr);
function hpFunction(e) {
   e.preventDefault();
   let name = document.querySelector("#name").value;
   let docID = document.querySelector("#docID").value;
   let Specialization = document.querySelector("#dept").value;
   let Experience = document.querySelector("#exp").value;
   let emailAddress = document.querySelector("#email").value;
   let mobileNumber = document.querySelector("#mbl").value;

   let obj = { name, docID, Specialization, Experience, emailAddress, mobileNumber };
   hpArr.push(obj);
   localStorage.setItem("hpArr",JSON.stringify(hpArr));
   tableData(hpArr);
   
   
}
function tableData(hpArr) {
   document.querySelector("tbody").innerText="";
   hpArr.forEach((element,i) => {
      let row = document.createElement("tr");


   let td1 = document.createElement("td");
   td1.innerText = element.name;

   let td2 = document.createElement("td");
   td2.innerText = element.docID;

   let td3 = document.createElement("td");
   td3.innerText = element.Specialization;

   let td4 = document.createElement("td");
   td4.innerText = element.Experience;

   let td5 = document.createElement("td");
   td5.innerText = element.emailAddress;

   let td6 = document.createElement("td");
   td6.innerText = element.mobileNumber;

   let td7 = document.createElement("td");
   if (element.Experience < 5 && element.Experience > 2) {
      td7.innerText = "Junior";
   } else if (element.Experience < 1 || element.Experience == 1) {
      td7.innerText = "Trainee";
   } else if (element.Experience > 5) {
      td7.innerText = "Senior";
   }

   let td8 = document.createElement("button");
   td8.innerText = "Delete";
   td8.addEventListener("click",function(){
     hpArr.splice(i ,1);
     localStorage.setItem("hpArr",JSON.stringify(hpArr));
     tableData(hpArr);
   })
   
   row.append(td1, td2, td3, td4, td5, td6,td7,td8);
   document.querySelector("tbody").append(row);
   });
}



