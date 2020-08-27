var app5 = new Vue({
    el: '#app-5',
    data: {
      message: '_',
      no: '1'
    },
    methods: {
      getpost: function (no) {
        var link;
        if(no != 'all')
          link = 'https://jsonplaceholder.typicode.com/posts/' + no;
        else
          link = link = 'https://jsonplaceholder.typicode.com/posts';
        fetch(link)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            // Work with JSON data here
            // console.log(data);
            this.message = JSON.stringify(data);
            // document.writeln(JSON.stringify(data, null, '\t'));
            // window.alert(JSON.stringify(data, null, '\t'));
            // this.message// console.log(JSON.stringify(JSON.parse(data), null, 2))
            
        })
        .catch((err) => {
            // Do something for an error here
        })
      }
    }
  })
  var app6 = new Vue({
    el: '#app-6',
    data: {
      message: '',
      title_: 'Title',
      body_ : 'Body',
      userId_: 'userID',
    },
    methods: {
      getpost: function (title_,body_,userId_) {
          fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({
            title: title_,
            body: body_,
            userId: userId_
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        .then(response => {
          return response.json();
        })
        .then(json => {
          this.message = json;
          return console.log(json);
        })
        
        }
    }

  })