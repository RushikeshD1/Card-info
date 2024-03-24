
let storedData = localStorage.getItem('userInformation');
if (storedData) {
    let user = JSON.parse(storedData);

    document.getElementById("first-name").textContent = user.firstname;
    document.getElementById("last-name").textContent = user.lastname;
    document.getElementById("country").textContent = user.country;
    document.getElementById("phone-number").textContent = user.phonenumber;
    document.getElementById("state").textContent = user.state;
    document.getElementById("city").textContent = user.city;
    document.getElementById("village").textContent = user.village;
} else {
    userInfoData();
}

function userInfoData() {
    let firstname = prompt('Enter your first name:');
    let lastname = prompt('Enter your last name:');
    let country = prompt('Enter your country:');
    let phonenumber = prompt('Enter your phone number:');
    let state = prompt('Enter your state:');
    let city = prompt('Enter your city:');
    let village = prompt('Enter your village:');
    
    let usersInfo = {
        firstname,
        lastname,
        country,
        phonenumber,
        state,
        city,
        village
    };

    localStorage.setItem("userInformation", JSON.stringify(usersInfo));

    
    document.getElementById('first-name').textContent = usersInfo.firstname;
    document.getElementById('last-name').textContent = usersInfo.lastname;
    document.getElementById('country').textContent = usersInfo.country;
    document.getElementById('phone-number').textContent = usersInfo.phonenumber;
    document.getElementById('state').textContent = usersInfo.state;
    document.getElementById('city').textContent = usersInfo.city;
    document.getElementById('village').textContent = usersInfo.village;
}

