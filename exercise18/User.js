class User {
	constructor(fullname, email, password) {
		this.fullname = fullname;
		this.email = email;
		this.password = password;
	}
	login(email, password) {
		if (this.email === email && this.password === password) {
			console.log("Login bem-sucedido");
		} else {
			console.log("Login malsucedido");
		}
	}
}

const usuario1 = new User("jão", "jjj@abc.com", "1234");
usuario1.login("jjj@abc.com", "1111");
usuario1.login("jjj@abc.com", "1234");
usuario1.login("aaa@abc.com", "1234");
