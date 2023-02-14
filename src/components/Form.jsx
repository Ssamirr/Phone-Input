import React, { useState } from 'react'

const Form = () => {
    const [value, setValue] = useState("");

    const handleChange = (e) => {

        let str = e.target.value.replace(/\D/g, "");
        if (str.length === 0) {
            setValue(" ")
        }
        else if (str.length <= 3 ) {
            setValue("(" + str)
        } else if (str.length <= 6) {
            setValue("(" + str.slice(0, 3) + ") " + str.slice(3, 6))
        } else if (str.length <= 10) {
            setValue("(" + str.slice(0, 3) + ") " + str.slice(3, 6) + "-" + str.slice(6, 10))
        }

    };


    return (
        <>
            <input onChange={handleChange} type="text" value={value} placeholder="(555) 555-5555" />
            <button disabled={value.length!==14} type="submit">Submit</button>
        </>
    );
};

export default Form;
