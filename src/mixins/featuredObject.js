var featuredObject = {
    data: function() {
        return {
            loadedContent: [],
            errors: []
        }
    },
    methods: {
        fetchContent: function(apiEndpoint) {
            axios
                .get(apiEndpoint)
                .then(response => {
                    this.loadedContent = response.data.content
                })
                .catch(e => {
                    this.errors.push(e)
                });
        }
    }
}

export default featuredObject
