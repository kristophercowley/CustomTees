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

//For refactor...
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

//Login Function
function login() {

}

//Designs and sizes arrays
//Will contain design objects on refactor
var designs = ["1", "Logo2", "Logo3", "Logo4", "Logo5", "Logo6", "Logo7", "Logo8", "Logo9", "Logo10"];
var sizes = ["s","m","l","xl","xxl","xxxl"];

//Gets id for designs and sizes dropdowns
var designsElem = document.getElementById('designsId');
var sizesElem = document.getElementById('sizesId');

//Populates the sizes dropdown
function popDrop(arr, elemId){
	var currentElem = elemId;
	for (var i = 0; i < arr.length; i++) {
		var current = arr[i];
		var newElem = document.createElement('option');
		newElem.textContent = current;
		newElem.value = current;
		currentElem.appendChild(newElem);
	}
}

popDrop(sizes, sizesElem);
popDrop(designs, designsElem);