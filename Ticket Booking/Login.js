function login(){
    let db =  { 0:['Rajesh@','Black'],1:['Kural','Password']};
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    for(let i=0;i<Object.keys(db).length;i++){
        if((db[i][0]==user)&&(db[i][1]==pass)){
            {
                flag=true;
             }
             if(flag==true){
                 window.location.href="./LoginSuccessfull.html";
             }
        }else{
            alert("Invalid UserName or Incorrect Password.....Try again...!");
        }
    }
}