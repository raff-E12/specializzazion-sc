import React, { useState } from 'react'

// Hook Switch

export default function useSwitch(initialValue = false) {
    const [isOn, SetOn] = useState(initialValue);
    const toogle = () => { SetOn(value => !value) };

    return [isOn, toogle];
}
