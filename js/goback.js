<!--

// function to display contact info alert message

//save form data as object
function userdata(username, psw, firstname, lastname, email, age,instype, dispcont, getupdates, userdesc) {
	this.username = username;
	this.psw = psw;
	this.firstname = firstname;
	this.lastname = lastname;
	this.email = email;
	this.age = age;
	this.instype = instype;
	this.dispcont = dispcont;
	this.getupdates = getupdates;
	this.userdesc = userdesc;
	this.PrintUserInfo=PrintUserInfo;
	
}

//function to validate form data
function validate() {
	with(document.contact_form) {
		userinfo = new userdata(username.value, psw.value, firstname.value, lastname.value, email.value, age.value, instype.value, dispcont.value, getupdates.value, userdesc.value)
	}
	with(userinfo) {
		if (username == null || username == "") {
			alert("Username is required.  Please enter a username.")
			return false;
		}
		if (psw.length < 8) {
			alert("Password must be at least 8 characters long")
			return false;
		}
		if (IsValid(psw) == false) {
			alert("The password must contain at least 1 alphabetic character and at least 1 number.")
			return false;
		}
		if (firstname == null || firstname == "") {
			alert("You must enter your first name.")
			return false;
		}
		if (lastname == null || lastname == "") {
			alert("You must enter your last name.")
			return false;
		}
		if (IsEmail(email) == false) {
			alert("The email entered is invalid.  Please ensure the format of your email is name@example.com")
			return false;
		}
		if (age < 14 || age > 110) {
			alert("You must be age 14 or above.  Please enter an age of 14 or greater")
			return false;
		}
		if(userdesc == null || userdesc == ""){
			alert("You must enter a description.")
			return false;
		}
		//decide which UserInfo to print
					
		userinfo.PrintUserInfo();				
	}
	return true;
}

function IsValid(x) {
	var alphanum=/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[&-_#@!])([a-zA-Z0-9&-_#@!]+)$/;
	
	if(alphanum.test(x)){
		return true;
	}
	else{
		return false;
	}			            
}

function IsEmail(x) {
	
	if (x.length <6 || x.indexOf("@", 0) == -1) {
		return false;
		} 
	else {
		return true;
	}
}

function PrintUserInfo(){
	if((dispcont.checked == 1 ) && (getupdates.checked == 1)){
		document.write("Thank you " + this.firstname + " " + this.lastname + ".");
		document.write("  You have registered as <span style='font-weight:bold'>" + this.username + "</span> and will be contacted at " + this.email +  " regarding your");
		document.write(" registration for " + this.instype + " classes.");
		document.write("<br>You have opted to display your contact information and receive updates from us via email.");			
		document.write("<p>Thank you for registering with us!  All communications with us will be kept private.</p><br><br>");
		document.write("You will be redirected to our home page in 10 seconds");
		document.write("<script type='text/JavaScript'>"+"setTimeout(function redirect(){location.assign('index.html');},10000);"+"<\/script>");
	}
	
	else if((dispcont.checked == 1)&& (getupdates.checked == 0)){
		document.write("Thank you " + this.firstname + " " + this.lastname + ".");
		document.write("You have registered as <span style='font-weight:bold'>" + this.username + "</span> and will be contacted at " + this.email +  " regarding your");
		document.write(" registration for " + this.instype + " classes.");
		document.write("<br>You have opted to display your contact information.");			
		document.write("<p>Thank you for registering with us!  All communications with us will be kept private.</p><br><br>");
		document.write("You will be redirected to our home page in 10 seconds");
		document.write("<script type='text/JavaScript'>"+"setTimeout(function redirect(){location.assign('index.html');},10000);"+"<\/script>");
	}
	else if((dispcont.checked == 0) && (getupdates.checked == 1)){
		document.write("Thank you " + this.firstname + " " + this.lastname + ".");
		document.write("You have registered as <span style='font-weight:bold'>" + this.username + "</span> and will be contacted at " + this.email +  " regarding your");
		document.write(" registration for " + this.instype + " classes.");
		document.write("<br>You have opted to receive updates from us via email.");			
		document.write("<p>Thank you for registering with us!  All communications with us will be kept private.</p><br><br>");
		document.write("You will be redirected to our home page in 10 seconds");
		document.write("<script type='text/JavaScript'>"+"setTimeout(function redirect(){location.assign('index.html');},10000);"+"<\/script>");
	}
	else{
		document.write("Thank you " + this.firstname + " " + this.lastname + ".");
		document.write("You have registered as <span style='font-weight:bold'>" + this.username + "</span> and will be contacted at " + this.email +  " regarding your");
		document.write(" registration for " + this.instype + " classes.");		
		document.write("<p>Thank you for registering with us!  All communications with us will be kept private.</p><br><br>");
		document.write("You will be redirected to our home page in 10 seconds");
		document.write("<script type='text/JavaScript'>"+"setTimeout(function redirect(){location.assign('index.html');},10000);"+"<\/script>");
	}		
}

-->