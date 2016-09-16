
        function convert(value,str) {
            if (str === "number") {
                return Number(value);
            }
            if (str === "boolean") {
                return Boolean(value);
            }
            if (str === "string") {
                return String(value);
            }
        }

        console.log(convert(NaN, 'boolean'));
        console.log(convert("ddd", 'number'))
        console.log(convert(123, 'number'))
        console.log(convert(false, 'boolean'));
        console.log(convert(2344, 'string'))
        console.log(convert(333, 'str'))//----undefined
        console.log(convert("", 'number'))
        console.log(convert("", 'string'))
//on one if conditions not excuted that time its return undefind
