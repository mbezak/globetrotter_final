export abstract class GenericData {
    // This field is used for demo purposes
    json : any;
    /**
     * The implementation of this method should initialize the component with data provided
     * by constructing it's corresponding specific data model
     * @param data Object containing data needed for configuring the component
     */
    abstract configure(data: any) : void;

    prepareJson() : void {
        console.log("Prepare JSON called in abstract class");
        //THIS WILL BE ABSTRACT IN THE FUTURE!
    }

    setJson(data : any) {
        this.json = data;
    }

}