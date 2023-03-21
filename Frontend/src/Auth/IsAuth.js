export const isLoggedIn =() => {

    let data= localStorage.getItem("data");

    console.log("login", data);

    let userName= localStorage.getItem("userName");

    console.log("userName", userName);

    if(data == null){

        return false;

    }else {

        return true;

    }

};


export const doLogin =(data,next)=>{

    localStorage.setItem("data",JSON.stringify(data));

    next()

};


//logout=> remove from local storage

export const doLogout =(next)=>{

    localStorage.removeItem("data");

    next()

};

//get current user

export const getCurrentUserDetail =()=>{

    if(isLoggedIn()){

        return JSON.parse(localStorage.getItem("data"));

    }else{

        return undefined;

    }

}

 

 

 

