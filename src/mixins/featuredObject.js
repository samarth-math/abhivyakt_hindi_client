var featuredObject = {
    data: function() {
        return {
            loadedContent: [],
            isContentLoaded:false,
            errors: []
        }
    },
    methods: {
        fetchContent: function(apiEndpoint) {
            axios
                .get("/api/" + apiEndpoint)
                .then(response => {
                    this.handleFetchedContent(response.data)
                })
                .catch(e => {
                    this.errors.push(e)
                });
        },
        handleFetchedContent: function(responseData) {
            this.loadedContent = responseData.content
            this.isContentLoaded = true
        }
    }
}

export default featuredObject
