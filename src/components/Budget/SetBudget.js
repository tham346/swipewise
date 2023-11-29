import react from "react";
import { useState } from 'react';
import DatePicker from 'react-date-picker';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function SetBudget() {
    const [value, onChange] = useState<Value>(new Date());

    return(
        <div>
            <form>
                <label>
                    Amount:
                    <input type="text" name="amount"/>
                </label>
            </form>
            <DatePicker onChange={onChange} value={value} />
        </div>
    )
}