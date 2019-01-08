var featuredImage = {
    data: function () {
        return {
            image: null,
            isImageLoaded: false,
            errors: []
        }
    },
    methods: {
        fetchImage: function(imageId) {
            axios
              .get("/api/img/" + imageId)
              .then(response => {
                this.image = response.data
                this.isImageLoaded = true
              })
              .catch(e => {
                this.errors.push(e)
              })
        }
    }
}

export default featuredImage
