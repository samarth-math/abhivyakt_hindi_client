var featuredObject = {
    data: function() {
        return {
            loadedContent: [],
            currentIndex: 0,
            errors: []
        }
    },
    methods: {
        fetchContent: function(apiEndpoint) {
            axios
                .get(apiEndpoint)
                .then(response => {
                    this.loadedContent = response.data.content
                    console.log(response.data.content)
                })
                .catch(e => {
                    this.errors.push(e)
                });
        },
        next: function() {
            if (this.current + 1 < this.loadedContent.length) {
                this.current += 1
            }
        },
        prev: function() {
            this.current = this.current - 1 >= 0 ? this.current - 1 : 0
        }
    }
}

export default featuredObject
