axios.get('http://127.0.0.1:8000/api/task-detail/1/')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });