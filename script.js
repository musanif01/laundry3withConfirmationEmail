function submitAlert() {
    if(document.getElementById("fullName").value === "" || document.getElementById("email").value === "" || document.getElementById("phone").value === "") {
        alert("Please fill all the details");
        return;
    }
    let para = document.createElement("p");
    para.innerText = "Service Added Successfully";
    para.classList.add("success-message");
    document.getElementById("submit-btn").appendChild(para);
    if(para.innerText === "Service Added Successfully") {
        document.getElementById("fullName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("book-btn").disabled = true;
    }
}
let totalCost = 0;
function addItem1() {
    let li1 = document.createElement("li");
    li1.classList.add("added-item");
    li1.innerHTML = `
        <p class="service">Dry Cleaning</p>
        <p class="sign">$</p>
        <p class="price">50</p>
    `;
    totalCost += 50;
    document.getElementById("added-items").appendChild(li1);
    document.getElementById("total-price").innerText = totalCost;
    document.getElementById("li-btn-1").classList.add("remove-btn");
    document.getElementsByClassName("remove-btn")[0].innerText = "Remove Item";
    document.getElementsByClassName("remove-btn")[0].onclick = function() {
    document.getElementById("added-items").removeChild(li1);
    totalCost -= 50;
    document.getElementById("total-price").innerText = totalCost;
    document.getElementById("li-btn-1").classList.remove("remove-btn");
    document.getElementById("li-btn-1").innerText = `Add Item`; 
    document.getElementById("li-btn-1").onclick = addItem1;
    };
}
function addItem2() {
    let li2 = document.createElement("li");
    li2.classList.add("added-item");
    li2.innerHTML = `
        <p class="service">Wash & fold</p>
        <p class="sign">$</p>
        <p class="price">40</p>
    `;
    totalCost += 40;
    document.getElementById("added-items").appendChild(li2);
    document.getElementById("total-price").innerText = totalCost;
    document.getElementById("li-btn-2").classList.add("remove-btn-2");
    document.getElementsByClassName("remove-btn-2")[0].innerText = "Remove Item";
    document.getElementsByClassName("remove-btn-2")[0].onclick = function() {
    document.getElementById("added-items").removeChild(li2);
    totalCost -= 40;
    document.getElementById("total-price").innerText = totalCost;
    document.getElementById("li-btn-2").classList.remove("remove-btn-2");
    document.getElementById("li-btn-2").innerText = "Add Item";
    document.getElementById("li-btn-2").onclick = addItem2;
}}
function addItem3() {
    let li3 = document.createElement("li");
    li3.classList.add("added-item");
    li3.innerHTML = `
        <p class="service">Ironing</p>
        <p class="sign">$</p>
        <p class="price">2</p>
    `;
    totalCost += 2;
    document.getElementById("added-items").appendChild(li3);
    document.getElementById("total-price").innerText = totalCost;
    document.getElementById("li-btn-3").classList.add("remove-btn-3");
    document.getElementsByClassName("remove-btn-3")[0].innerText = "Remove Item";
    document.getElementsByClassName("remove-btn-3")[0].onclick = function() {
        document.getElementById("added-items").removeChild(li3);
        totalCost -= 2;
        document.getElementById("total-price").innerText = totalCost;
        document.getElementById("li-btn-3").classList.remove("remove-btn-3");
        document.getElementById("li-btn-3").innerText = "Add Item";
        document.getElementById("li-btn-3").onclick = addItem3;
}}
function addItem4() {
    let li4 = document.createElement("li");
    li4.classList.add("added-item");
    li4.innerHTML = `
        <p class="service">Stain Removal</p>
        <p class="sign">$</p>
        <p class="price">10</p>
    `;
    totalCost += 10;
    document.getElementById("added-items").appendChild(li4);
    document.getElementById("total-price").innerText = totalCost;
    document.getElementById("li-btn-4").classList.add("remove-btn-4");
    document.getElementsByClassName("remove-btn-4")[0].innerText = "Remove Item";
    document.getElementsByClassName("remove-btn-4")[0].onclick = function() { 
        document.getElementById("added-items").removeChild(li4);
        totalCost -= 10;
        document.getElementById("total-price").innerText = totalCost;
        document.getElementById("li-btn-4").classList.remove("remove-btn-4");
        document.getElementById("li-btn-4").innerText = "Add Item";
        document.getElementById("li-btn-4").onclick = addItem4;  
}}
function addItem5() {
    let li5 = document.createElement("li");
    li5.classList.add("added-item");
    li5.innerHTML = `
        <p class="service">Leather and Suede Cleaning</p>
        <p class="sign">$</p>
        <p class="price">20</p>
    `;
    totalCost += 20;
    document.getElementById("added-items").appendChild(li5);
    document.getElementById("total-price").innerText = totalCost;
    document.getElementById("li-btn-5").classList.add("remove-btn-5");
    document.getElementsByClassName("remove-btn-5")[0].innerText = "Remove Item";
    document.getElementsByClassName("remove-btn-5")[0].onclick = function() {
        document.getElementById("added-items").removeChild(li5);
        totalCost -= 20;
        document.getElementById("total-price").innerText = totalCost;
        document.getElementById("li-btn-5").classList.remove("remove-btn-5");
        document.getElementById("li-btn-5").innerText = "Add Item";
        document.getElementById("li-btn-5").onclick = addItem5;  
}
    }

function addItem6() {
    let li6 = document.createElement("li");
    li6.classList.add("added-item");
    li6.innerHTML = `
        <p class="service">Wedding Dress Cleaning</p>
        <p class="sign">$</p>
        <p class="price">200</p>
    `;
    totalCost += 200;
    document.getElementById("added-items").appendChild(li6);
    document.getElementById("total-price").innerText = totalCost;
    document.getElementById("li-btn-6").classList.add("remove-btn-6");
    document.getElementsByClassName("remove-btn-6")[0].innerText = "Remove Item";
    document.getElementsByClassName("remove-btn-6")[0].onclick = function() {
        document.getElementById("added-items").removeChild(li6);
        totalCost -= 200;
        document.getElementById("total-price").innerText = totalCost;
        document.getElementById("li-btn-6").classList.remove("remove-btn-6");
        document.getElementById("li-btn-6").innerText = "Add Item";
        document.getElementById("li-btn-6").onclick = addItem6;  
}}

// Initialize EmailJS AFTER the CDN script has loaded
// Replace the string with your real public key if different
(function initEmailJS(){
    if (typeof emailjs === 'undefined') {
        console.error('emailjs not loaded yet. Make sure the CDN script is included before this script.');
        return;
    }
    emailjs.init("lbQnKi03BXTOw3MF4"); // use string public key
})();

// sendMail implementation (call from button onclick)
// Replace 'service_xxx' and 'template_xxx' with your EmailJS service & template ids
function sendMail(e) {
    // if called as form submit, prevent navigation
    if (e && e.preventDefault) e.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const total = document.getElementById('total-price') ? document.getElementById('total-price').innerText : '';

    if (!fullName || !email || !phone) {
        alert('Please complete all fields.');
        return;
    }

    const templateParams = {
        fullName,
        email,
        phone,
        total
    };

    // IMPORTANT: replace service_id and template_id with your EmailJS values
    const SERVICE_ID = 'service_kqj20ys';
    const TEMPLATE_ID = 'template_joekkcg';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
        .then(response => {
            console.log('Email sent', response);
            alert('Booking request sent successfully.');
            // optional: clear form
            // document.querySelector('.booking-form').reset();
        })
        .catch(err => {
            console.error('EmailJS error:', err);
            alert('Failed to send booking. Check console for details.');
        });
}