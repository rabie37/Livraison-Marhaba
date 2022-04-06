class Actions {
    static setModel(model){
        this.model = model
        return this;
    }

    static filters(filters) {
        this.data = this.model.find(filters)
        return this;
    }

    static sorts(sorts) {
        this.data.sort(sorts);
        return this;
    }

    static get(){
        return this.data;
    }
}

module.exports = Actions