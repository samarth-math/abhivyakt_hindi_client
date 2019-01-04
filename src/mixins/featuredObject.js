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
                .get("/api/" + apiEndpoint)
                .then(response => {
                    this.handleFetchedContent(response.data)
                })
                .catch(e => {
                    this.errors.push(e)
                });
        },
        handleFetchedContent: function(responseData) {
            console.log("calling featured object handleFetchedContent")
            this.loadedContent = responseData.content
        }
    }
}

export default featuredObject
