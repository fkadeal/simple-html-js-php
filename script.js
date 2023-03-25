document.getElementById("search-input").addEventListener("keyup", async (e) => {
  // Search comments
  // Use this API: https://jsonplaceholder.typicode.com/comments?postId=3
  // Display the results in the UI

  // Things to look out for
  // ---
  // Use es6
  var searchValue = document.getElementById("search-input").value;
  let inner = document.getElementById("results");
  inner.innerHTML = "";
  const res = await fetch(`http://localhost:8000/${searchValue}`);
  const json = await res.json();

  console.log(json);
  console.log("sdfs sdf ", searchValue);

  let result = json
    .map(function (obj) {
      if (
        obj.name.toLowerCase().includes(searchValue) ||
        obj.email.toLowerCase().includes(searchValue) ||
        obj.body.toLowerCase().includes(searchValue)
      ) {
        return `<div class="searchresult"> 
        <h2>${obj.name}</h2> 
         <a href='mailto:${obj.email}'> ${obj.email}</a> 
          <p> ${obj.body}</p> 
          </div>
        `;
      }
    })
    .filter(Boolean);

  console.log("result ", result);
  inner.innerHTML = result.join(" ");

  console.log(result);
});
