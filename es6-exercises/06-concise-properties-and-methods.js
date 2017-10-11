// Fill in the following function with a single object literal with the format
// {make: "honda", model: "civic", drive: Function}, where the drive function
// logs "vroom" to the console

function car(make, model, options) {
    return {

        make,
        model,
        options,

        ['make' + make]: true,


        depreciate() {
            this.value = 'vroom';
        }
    };
}

let auto = car("honda","civic");


console.log(auto);

auto.depreciate();


console.log(auto.value);
