const onSubmit = () => {
    let fullName = document.getElementById("fullName").value;
    let gender = document.getElementById("gender").value;
  
    let hobbies = [];
    //for first-name
    if (fullName.length >= 5 && fullName.indexOf(" ") > 0) {
      document.getElementById("valid-fullName").style.display = "block";
      document.getElementById("invalid-fullName").style.display = "none";
    } else {
      document.getElementById("invalid-fullName").style.display = "block";
      document.getElementById("valid-fullName").style.display = "none";
    }
  
    //for gender
    if (gender === "None") {
      document.getElementById("invalid-gender").style.display = "block";
      document.getElementById("valid-gender").style.display = "none";
    } else {
      document.getElementById("valid-gender").style.display = "block";
      document.getElementById("invalid-gender").style.display = "none";
    }
  
    //for hobbies
    let swimming = document.getElementById("swimming");
    let readingNovels = document.getElementById("readingNovels");
    let dancing = document.getElementById("dancing");
    let singing = document.getElementById("singing");
    debugger;
    if (swimming.checked === true) {
      hobbies.push("swimming");
    }
    if (readingNovels.checked === true) {
      hobbies.push("reading novels");
    }
    if (dancing.checked === true) {
      hobbies.push("dancing");
    }
    if (singing.checked === true) {
      hobbies.push("singing");
    }
    console.log(hobbies);
    if (hobbies.length >= 1) {
      document.getElementById("valid-hobbies").style.display = "block";
    } else {
      document.getElementById("invalid-hobbies").style.display = "block";
    }
  
    //reading the hobbies array.
  //   let hobbyValues = "";
  //   for (i = 0; i < hobbies.length; i++) {
  //     hobbyValues = hobbies[i];
  //   }
    //console.log(hobbyValues);
  
    //alert-box
    if (
      fullName.length >= 5 &&
      fullName.indexOf(" ") > 0 &&
      hobbies.length >= 1 &&
      gender != "none"
    ) {
      alert(
        `Hobbies of ${fullName}(${gender.toUpperCase()}) are ${hobbies
          .map((i) => i)
          .join(" and ")}`
      );
      document.getElementById("form").reset();
      document.getElementById("valid-fullName").style.display = "none";
      document.getElementById("invalid-fullName").style.display = "none";
      document.getElementById("invalid-gender").style.display = "none";
      document.getElementById("valid-gender").style.display = "none";
      document.getElementById("invalid-hobbies").style.display = "none";
      document.getElementById("valid-hobbies").style.display = "none";
    }
  };