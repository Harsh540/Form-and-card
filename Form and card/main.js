document
  .getElementById("userDetailsForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var age = document.getElementById("age").value;
    var about = document.getElementById("about").value;

    var cardHTML = `
        <div class="card">
            <div class="card-content">
                <h3>Name: ${name}</h3>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Age: ${age}</p>
                <p>About: ${about}</p>
                <button class="view-more" onclick="toggleDetails(this)">View More</button>
                <button class="edit-btn" onclick="editDetails(this)">Edit</button>
                <button class="delete-btn" onclick="deleteCard(this)">Delete</button>
            </div>
        </div>
    `;

    document
      .querySelector(".split.left.result")
      .insertAdjacentHTML("beforeend", cardHTML);

    document.getElementById("userDetailsForm").reset();
  });

function toggleDetails(button) {
  var cardContent = button.parentElement;
  var moreDetails = cardContent.querySelectorAll("p");
  var viewMoreBtn = cardContent.querySelector(".view-more");

  if (viewMoreBtn.textContent === "View More") {
    moreDetails.forEach(function (detail) {
      detail.style.display = "block";
    });
    viewMoreBtn.textContent = "View Less";
  } else {
    moreDetails.forEach(function (detail, index) {
      if (index > 1) {
        detail.style.display = "none";
      }
    });
    viewMoreBtn.textContent = "View More";
  }
}
function deleteCard(button) {
  var cardContent = button.parentElement.parentElement;
  cardContent.remove();
}

function editDetails(button) {
  // var cardContent = button.parentElement;
  // var details = cardContent.querySelectorAll("p");
  // var name = details[0].textContent.split(": ")[1];
  // console.log(name);
  // var email = details[1].textContent.split(": ")[1];
  // console.log(email);
  // var phone = details[2].textContent.split(": ")[1];
  // var age = details[3].textContent.split(": ")[1];
  // var about = details[4].textContent.split(": ")[1];
  // console.log(about);
  // document.getElementById("name").value = name;
  // document.getElementById("email").value = email;
  // document.getElementById("phone").value = phone;
  // document.getElementById("age").value = age;
  // document.getElementById("about").value = about;
  // cardContent.parentElement.remove();
}
