import react from "react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function SetBudget() {
    cconst [startDate, setStartDate] = useState(new Date());

    return(
        <div>
            <form>
                <label>
                    Amount:
                    <input type="text" name="amount"/>
                </label>
            </form>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
    )
}