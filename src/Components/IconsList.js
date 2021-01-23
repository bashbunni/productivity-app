import React, { useState } from 'react';
import { IconPicker } from 'react-fa-icon-picker';

function IconsList() {
    const [value, setValue] = useState("");
    return (
        <IconPicker value={value} onChange={(v) => setValue(v)} />
    );
}

export default IconsList;