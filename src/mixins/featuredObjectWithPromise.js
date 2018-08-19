var featuredObject = {
    data: function() {
        return {
            loadedContent: [],
            errors: []
        }
    },
    methods: {
        fetchContent: function(apiEndpoint) {
            return axios
                .get(apiEndpoint)
                .catch(e => {
                    this.errors.push(e)
                })
            }
    }
}

export default featuredObject
