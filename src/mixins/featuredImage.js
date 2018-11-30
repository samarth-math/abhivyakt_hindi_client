var featuredImage = {
    data: function () {
        return {
            image: null,
        }
    },
    methods: {
        fetchImage: function(imageId) {
            axios
              .get("/api/img/" + imageId)
              .then(response => {
                this.image = response.data
              })
              .catch(e => {
                this.errors.push(e)
              })
        }
    }
}

export default featuredImage
