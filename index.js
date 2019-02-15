var app = new Vue({
    el: '#app',
    data (){
        return {
            result : null,
            results: [],
            counter: 1
        }
    },
    methods:{
        nextPost(){ 
            console.log(this.result);
            this.result = this.results[this.counter]
            console.log(this.result)
            if(this.counter < this.results.length){
                this.counter++;
                console.log(this.counter);
            }
            if (this.counter === this.results.length){
                this.counter = 0;
            }
        }
    },
    watch: {
        counter(){
            console.log('new page has been rendered');
        }
    },
    mounted () {
        var self = this;
        axios.get('http://localhost/react/wp-json/wp/v2/pages')
            .then(function(response){
                console.log(response.data)
             self.results = response.data;
              self.result = response.data[0];
              //console.log(response.data); 
              console.log('results')
              console.log(self.results);
              console.log(self.result.author)
              console.log(self.result.content.rendered)
              
            })
    }
  });
  