fetch("https://httpbin.org/ip")
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.warn(err);
  });

fetch("https://httpbin.org/post", {
  method: "POST",
  body: "name=Otthon&age=34",
  headers: new Headers({ "Content-type": "application/x-www-form-urlencoded" }),
});

