/*const para = document.querySelectorAll("p");
para.forEach((p)=>{
    p.addEventListener("click", highlight
para.style.color="red";
para.style.borderColor = 'red'; // Change the border color to red
para.style.borderWidth = '2px'; // Add a border width for visibility
para.style.borderStyle = 'solid';
para.style.border='2px solid red'

console.log(e.target);
console.log(e);
    );
})
function highlight(event) {
    para.forEach(box => {
        box.style.border = '';
    });
    const clickedBox = event.target;
    console.log(clickedBox.parentNode,"clicked one");
    // clickedBox.style.backgroundColor = 'lightblue';
    clickedBox.style.border = '2px solid red';
}
p.addEventListener("click", highlight
para.style.color="red";
para.style.borderColor = 'red'; // Change the border color to red
para.style.borderWidth = '2px'; // Add a border width for visibility
para.style.borderStyle = 'solid';
para.style.border='2px solid red'

console.log(e.target);
console.log(e);
);

function updateName() {
  const name = prompt("Enter a new name");
  document.body.style.backgroundColor = 'lightblue';
  const element=document.getElementsByTagName('p');
  element.body.color="red";
  element.body.margin-top = "100px"
  para.textContent = `Player 1: ${name}`;
}

const boxes = document.querySelectorAll('.box'); // Select all boxes

function highlightBox(event) {
    // Reset styles for all boxes
boxes.forEach(box => {
    box.style.backgroundColor = '';
    box.style.border = '';
});
// Apply highlight styles to the clicked box
const clickedBox = event.target;
// clickedBox.style.backgroundColor = 'lightblue';
clickedBox.style.border = '2px solid red';
}

// Attach click event listeners to each box
boxes.forEach(box => {
    box.addEventListener('click', highlightBox);
});

registration//msg
seatAllotment//seat number

registration().then(function () {
    // if(msg){
    console.log("registration successfull!!");
    return seatAllotment()
}).then(function (seat) {
    console.log(seat);
}).catch((err)=>{
    console.log(err);
})
*/


/*Promise.all([registration(), seatAllotment()]).then(([msg, seat]) => {
    console.log("msg=", msg);
    console.log('seat=', seat);
    return welcome();
}).then((msg) => {
    console.log(msg);
})
*/
/*
function registration() {
    return new Promise(function (resolve, reject) {

        if (true) {
            const msg = "reg successful!!"
            resolve(msg)
        }
        reject('something went wrong')
    })
}
function welcome() {
    return new Promise(function (resolve, reject) {
        if (true) {
            const msg = 'Welcome to our Army'
            resolve(msg);
        }
        reject('something went wrong')
    })
}
function seatAllotment() {

    return new Promise(function (resolve, reject) {

        if (true) {
            const seat = 'R-03'
            resolve(seat);
        }
        reject('sjdhfkj')
    })

}*/

/*
//fetch function utilization

async function fetchUserData(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) {
            throw new Error("Failed to fetch user data");
        }
        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error; // Re-throw the error to the caller
    }
}

async function fetchUserPosts(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        if (!response.ok) {
            throw new Error("Failed to fetch user posts");
        }
        const userPosts = await response.json();
        return userPosts;
    } catch (error) {
        console.error("Error fetching user posts:", error);
        throw error; // Re-throw the error to the caller
    }
}

async function fetchData(userId) {
    try {
        const userData = await fetchUserData(userId);
        const userPosts = await fetchUserPosts(userId);
        const userdet=await userDetails();
        console.log("User Data:", userData);
        console.log("User Posts:", userPosts);
        console.log("User Details:", userdet);

    } catch (error) {
        console.error("Error:", error);
    }
}


async function userDetails() {
    try {
        const apiUrl = "https://jsonplaceholder.typicode.com/posts?userId=1";
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Something went wrong');
        }
        const userdet = await response.json();
        return userdet;
    } catch {
        throw new Error('Something went wrong')
    }
}
*/

// Call the async function to start the process
// const userId = 1;
// fetchData(userId);
/*
fetchStudent().then((student) => {
    console.log('student',student);
}).catch((err) => {
    console.log(err);
})

async function fetchStudent(userId) {
    return new Promise(function (resolve, reject) {
        //logic
        const apiUrl = 'https://jsontplaceholder.typicode.com/users/1';
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch user posts");
                    // reject(err)
                }
                return response.json();
            })
            .then(data => {
                // console.log("API Response:", data);
                resolve(data);
            })
    })
}*/

// const apiUrl = "https://jsonplaceholder.typicode.com/posts";

/*async function add(sub) {
    try {
        if (true) {
            const addition = 4 + 5+sub;
            return addition;
        }
    } catch (error) {
        console.error("Error fetching user posts:", error);
        throw error; // Re-throw the error to the caller
    }
}
async function subtraction() {
    try {
        const sub = 5 - 4;
        return sub;

    } catch {
        throw new Error('Something went wrong')
    }
}
async function calc() {
    try {
        const sub = await subtraction();
        const add1 = await add(sub);

        console.log(sub);
        console.log(add1);
    } catch {
        throw new Error('Something went wrong')
    }
}
calc();*/
const t=setInterval(()=>{
    calc();
},3000)
const calc=()=>{
    console.log("Snacks")
}
setTimeout(()=>{
    clearInterval(t)
},9000)
