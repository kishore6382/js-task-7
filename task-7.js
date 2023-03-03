//a=[11,12,21,22,23,33,34,40,44]
	 var a=[11,12.21,22,23,33,34,40,44];
	 for (i=0;i<=a.length;i++){
		if (a[i]%11==0){
		document.write(a[i]);
		}	
	 }
	 document.write("<br>");
	
	
	 //a=[5,10,"ram",20,"bala",40,"anand"] 
	 var a=[5,10,"ram",20,"bala",40,"anand"]; 
	 var b=" "; 
	 var c=[]; 
	 var d=-1; 
	 for(i=0;i<a.length;i++){ 
		 if(typeof(b)===typeof(a[i])){ 
		   c[++d]=a[i]; 
		 } 
	  }document.write(c); 
	  
	   document.write("<br>");
	   
	   
	   //a=[0,1,2,3,10,20,30]
	   let p=
	   [22.033,17,99,86,69,5,1,2,3,10,20,30];
	      p.sort();
		  document.write(p);
		  
		  document.write("<br>");
		  
		  
		  
		  //a=['a','f','g','h','l','k']
		  let result=[];
		    var alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
		    var alpha=['a','f','g','h','l','k']
		    for (var i=0;i<=alpha.length;i++){
		    for(var j=0;j<alphabet.length;j++){
				if(alpha[i]==alphabet[j]){
					result.push(j+1);
				}
			  }	
			}  
			document.write(result);

               document.write("<br>");
			   
			   
			   
			//reduce method
			const greet=["welcome","to","my","webpage"];
			let kishore=greet.reduce(function(value1,value2,value3){
				return value1+value2;
			})
			document.write(kishore);
			
			document.write("<br>");
		     
		   
		   
		var age=prompt("ender the age");
		var gender=prompt("ender the gender(small letters-only)");
		var z='female';
		var op='male';
		if(gender==z && age>=20){
		document.write("your working place  is :urban areas");
		}
		else if(gender==op){
			if(age>=20&&age<=40){
			 document.write("your working place  is : anywhere");
			}
			else if(age>40 && age<=60){
			document.write("your working place  is : urban areas(boy)");
			}
			else {
		    document.write("you are not eligible:error");
		    }
		}
		else {
		document.write("you are not eligible:error");
		}
		document.write("<br>");
	