document.getElementById("toggleBtn").addEventListener("click", function() {
    var sentence = document.getElementById("sentence");
    var subject = sentence.querySelector(".subject");
    var verb = sentence.querySelector(".verb");
    var object = sentence.querySelector(".object");
  
    // Toggle between active and passive forms
    if (subject.textContent === "Precious") {
      subject.textContent = "All members";
      verb.textContent = "were thanked by";
      object.textContent = "Precious";
    } else {
      subject.textContent = "Precious";
      verb.textContent = "is thanking";
      object.textContent = "all members";
    }
  });
  