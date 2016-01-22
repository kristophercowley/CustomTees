var members = [];
function register() {
	
	//gets input values
	var memberNameElem = document.getElementById('name');
	var memberEmailElem = document.getElementById('email');
	var memberPasswordElem = document.getElementById('password');
	
	//sets values to arg vars
	var memberName = memberNameElem.value;
	var memberEmail = memberEmailElem.value;
	var memberPassword = memberPasswordElem.value
	
	//validates form is filled out
	if (!memberName) {
		alert("Fill Out the Form!")
		return
	}
	
	//Creates Member
	var member = new Member(memberName, memberEmail, memberPassword);
	
	//Pushes member to members array
	members.push(member)
	
	//Clear Form
	memberNameElem.value = "";
	memberEmailElem.value = "";
	memberPasswordElem.value = "";
	
	//Show members on page
	var membersListElem = document.getElementById('members-list');
	membersListElem.innerHTML = "";
	for (var i = 0; i < members.length; i++) {
		var memberElem = document.createElement('li');
		memberElem.innerText = "Name: " + members[i].name;
		membersListElem.appendChild(memberElem);
		var memberEmailElem = document.createElement('li');
		memberEmailElem.innerText = "Email: " + members[i].email;
		membersListElem.appendChild(memberEmailElem);
		var memberPasswordElem = document.createElement('li');
		memberPasswordElem.innerText = "Password: " + members[i].password;
		membersListElem.appendChild(memberPasswordElem)
	}




	console.log(members)
}




// function clearForm() {
// 	register.memberNameElem.value = "";
// 	register.memberEmailElem.value = "";
// 	register.memberPasswordElem.value = "";
// }

function Member(name, email, password) {
	this.name = name;
	this.email = email;
	this.password = password;
	this.hasDiscount = false;
}

function login() {
	
}