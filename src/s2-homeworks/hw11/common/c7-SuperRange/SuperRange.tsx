import React from 'react'
import { Slider, SliderProps } from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    console.log(props.value)
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 300,
                color: "success.main",
                '.MuiSlider-thumb': {
                    border: "1px solid #00CC22",
                    background: "transparent"
                },
                ".MuiSlider-thumb:after": {
                    width: 10,
                    height: 10,

                    background: "#00CC22"
                },
                ".MuiSlider-track": {
                    background: "#00CC22",
                    border: "none"
                },
                ".MuiSlider-rail": {
                    background: "#8B8B8B",

                }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
