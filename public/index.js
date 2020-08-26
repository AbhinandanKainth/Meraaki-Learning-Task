var app5 = new Vue({
    el: '#app-5',
    data: {
      message: '_'
    },
    methods: {
      getpost: function () {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            // Work with JSON data here
            // console.log(data);
            this.message = JSON.stringify(data);
            
        })
        .catch((err) => {
            // Do something for an error here
        })
      }
    }
  })