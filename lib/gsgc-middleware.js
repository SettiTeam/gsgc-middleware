module.exports = {

    // to be attached to res
    withSuccess: function() {
        this.send({
            success: true
        });
    },

    withError: function(err) {
        this.status(err.status)
            .send(err.response);
    }

};
