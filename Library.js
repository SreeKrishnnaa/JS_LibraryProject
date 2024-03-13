book={
    title:"Public Enemy no.1",
    author:"Anthony Horowitz",
    pubyear:2010,
    readstatus:5,
    getsum:function(){
    return "The book "+this.title+" writtened by "+this.author+" published in the year "+this.pubyear;
    },
    toggr:function(){
    if(this.readstatus>0){
        return "toggleStatus:"+true;
    }
    }
    };
    
    
    book1={
    title:"south by south east",
    author:"Anthony Horowitz",
    pubyear:2003,
    readstatus:6,
    getsum:function(){
    return "The book "+this.title+" writtened by "+this.author+" published in the year "+this.pubyear;
    },
    toggr:function(){
    if(this.readstatus>0){
        return "toggleStatus:"+true;
    }
    }
    };
    
    book2={
    title:"sherlock holmes",
    author:"conan",
    pubyear:1995,
    readstatus:0,
    getsum:function(){
    return "The book "+this.title+" writtened by "+this.author+" published in the year "+this.pubyear;
    },
    toggr:function(){
    if(this.readstatus>0){
        return "toggleStatus:"+true;
    }
    else{
        return "toggleStatus:"+false;
    }
    }
    };
    alert(book.getsum()+". "+book1.getsum()+". "+book2.getsum());
    alert(book.toggr()+". "+book1.toggr()+". "+book2.toggr());
    
    lib=[];//empty array
    function addbk(bk){
        lib.push(bk);
    }
    function addbkfr(bk){
        lib.unshift(bk);
    }
    function rembk(){
        lib.pop();
    }
    
    function rembkfr(){
        lib.shift();
    }
    addbk(book);
    addbkfr(book1);
    addbk(book2);
    
    
    
        
    console.log(lib);
    
    function getallbooks(str){
    return "booktitles: "+str[0].title+" ,"+str[1].title+" ,"+str[2].title;
    }
    
    alert(getallbooks(lib));
    function getauth(str){
        return "bookauthors: "+str[0].author+" ,"+str[1].author+" ,"+str[2].author;
    }
    alert(getauth(lib));
    
    
    function getyear(str){
        strd="";
        for(let i=0;i<3;i++){
            if(str[i].pubyear>2000){
           strd=strd+ str[i].title+" is published after 2000 ";
        }
        if(str[i].pubyear<2000){
            strd=strd+ str[i].title+" is published before 2000 ";
        }
    }return strd;
        }
       
        console.log(getyear(lib));
    
    function removebytitle(str,arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i].title==str){
         arr.splice(i,1);
          
        }
    }
    return arr;//this array contains removed contents
    }
    
    console.log(removebytitle("sherlock holmes",lib));
    
    function getbystat(str){
       let st=str.filter(temp=>temp.readstatus>0);
       console.log("books with positive ReadStatus:");
       for(let i=0;i<st.length;i++){
        console.log(st[i].title);
       }
     
    }
    getbystat(lib);
    
    function getslicedlib(num,arr){
    
    arr=arr.slice(0,num);
    
    return arr;//this array contains sliced library
    }
    console.log(getslicedlib(1,lib));
    