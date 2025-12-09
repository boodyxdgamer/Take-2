document.addEventListener("DOMContentLoaded", function () {
    const loginIcon = document.getElementById("loginIcon");
    const greetingEl = document.getElementById("greeting");
    const isLoggedIn = localStorage.getItem("email"); // Check if email exists in localStorage
  
    if (isLoggedIn) {
      // Show greeting with username
      const currentUsername = localStorage.getItem("currentUsername");
      greetingEl.textContent = currentUsername ? `Hi, ${currentUsername}!` : "Hi, User!";
  
      // User is logged in → clicking icon logs them out
      loginIcon.addEventListener("click", function () {
        localStorage.removeItem("email");
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        localStorage.removeItem("currentUsername"); // ✅ clear greeting
        greetingEl.textContent = "Hi, User!";        // reset greeting
        window.location.href = "login.html";         // redirect to login page
      });
    } else {
      // User is not logged in → show default greeting
      greetingEl.textContent = "Hi, User!";
  
      // Clicking icon goes to login page
      loginIcon.addEventListener("click", function () {
        window.location.href = "login.html";
      });
    }
  });



   // -----------------search bar js----------------
   document.getElementById("srch").addEventListener("focus", function() {
    document.getElementById("srchlist").style.display = "block";
        });

document.addEventListener("click", function(event) {
    if (!event.target.closest(".srchform")) {
        document.getElementById("srchlist").style.display = "none";
            }
        });

function search() {
            let input = document.getElementById("srch").value.toLowerCase();
            let items = document.getElementById("srchlist").getElementsByTagName("li");
    
    for (let i = 0; i < items.length; i++) {
        let text = items[i].innerText.toLowerCase();
        if (text.includes(input)) {
            items[i].style.display = "block";
        } else {
            items[i].style.display = "none";
                }
            }
        }

function redirectToPage(page) {
    window.location.href = page;
}
function scrollToProduct(className) {
    const product = document.querySelector(`.${className}`);
    if (product) {
      product.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      console.warn("No product found with class:", className);
    }
  }
  
  //==============================================
  function buildSearchList() {
    const srchList = document.getElementById("srchlist");
    srchList.innerHTML = ""; // clear old items
  
    for (const category in store.categories) {
      store.categories[category].forEach((product, index) => {
        const li = document.createElement("li");
        li.textContent = product.name;
  
        // ✅ Navigate to Product.html with category + product index
        li.onclick = () => {
          window.location.href = `Product.html?category=${category}&product=${index}`;
        };
  
        srchList.appendChild(li);
      });
    }
  }
  
  // Run once when page loads
  document.addEventListener("DOMContentLoaded", buildSearchList);
  