// Document.ready function
$(() => {
  // function calling
  $("#but").click(() => {
    // taking value from the input
    let text = $("#inputText").val();
    let ans = "";
    for (let i = 0; i < text.length; i++) {
      // Edge cases to check if the character is Z
      if (text[i] == "z") {
        ans += "a";
      } else if (text[i] == "Z") {
        ans += "A";
      } else {
        // converting the character to ascii
        let char = text.charCodeAt(i);
        // taking the value of ascii and converting back to string with one character ahead
        let ch = String.fromCharCode(char + 1);
        ans += ch;
      }
    }
    // showing the result
    $("#res").text(ans);
  });
});
