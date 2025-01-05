const colors = {
    red: {
        500: "#F44336",
        50: "#FFEBEE",
        100: "#FFCDD2",
        200: "#EF9A9A",
        300: "#E57373",
        400: "#EF5350",
        600: "#E53935",
        700: "#D32F2F",
        800: "#C62828",
        900: "#B71C1C",
        a100: "#FF8A80",
        a200: "#FF5252",
        a400: "#FF1744",
        a700: "#D50000",
    },
    pink: {
        500: "#E91E63",
        50: "#FCE4EC",
        100: "#F8BBD0",
        200: "#F48FB1",
        300: "#F06292",
        400: "#EC407A",
        600: "#D81B60",
        700: "#C2185B",
        800: "#AD1457",
        900: "#880E4F",
        a100: "#FF80AB",
        a200: "#FF4081",
        a400: "#F50057",
        a700: "#C51162",
    },
    purple: {
        500: "#9C27B0",
        50: "#F3E5F5",
        100: "#E1BEE7",
        200: "#CE93D8",
        300: "#BA68C8",
        400: "#AB47BC",
        600: "#8E24AA",
        700: "#7B1FA2",
        800: "#6A1B9A",
        900: "#4A148C",
        a100: "#EA80FC",
        a200: "#E040FB",
        a400: "#D500F9",
        a700: "#AA00FF",
    },
    deepPurple: {
        500: "#673AB7",
        50: "#EDE7F6",
        100: "#D1C4E9",
        200: "#B39DDB",
        300: "#9575CD",
        400: "#7E57C2",
        600: "#5E35B1",
        700: "#512DA8",
        800: "#4527A0",
        900: "#311B92",
        a100: "#B388FF",
        a200: "#7C4DFF",
        a400: "#651FFF",
        a700: "#6200EA",
    },
    indigo: {
        500: "#3F51B5",
        50: "#E8EAF6",
        100: "#C5CAE9",
        200: "#9FA8DA",
        300: "#7986CB",
        400: "#5C6BC0",
        600: "#3949AB",
        700: "#303F9F",
        800: "#283593",
        900: "#1A237E",
        a100: "#8C9EFF",
        a200: "#536DFE",
        a400: "#3D5AFE",
        a700: "#304FFE",
    },
    blue: {
        500: "#2196F3",
        50: "#E3F2FD",
        100: "#BBDEFB",
        200: "#90CAF9",
        300: "#64B5F6",
        400: "#42A5F5",
        600: "#1E88E5",
        700: "#1976D2",
        800: "#1565C0",
        900: "#0D47A1",
        a100: "#82B1FF",
        a200: "#448AFF",
        a400: "#2979FF",
        a700: "#2962FF",
    },
    lightBlue: {
        500: "#03A9F4",
        50: "#E1F5FE",
        100: "#B3E5FC",
        200: "#81D4FA",
        300: "#4FC3F7",
        400: "#29B6F6",
        600: "#039BE5",
        700: "#0288D1",
        800: "#0277BD",
        900: "#01579B",
        a100: "#80D8FF",
        a200: "#40C4FF",
        a400: "#00B0FF",
        a700: "#0091EA",
    },
    cyan: {
        500: "#00BCD4",
        50: "#E0F7FA",
        100: "#B2EBF2",
        200: "#80DEEA",
        300: "#4DD0E1",
        400: "#26C6DA",
        600: "#00ACC1",
        700: "#0097A7",
        800: "#00838F",
        900: "#006064",
        a100: "#84FFFF",
        a200: "#18FFFF",
        a400: "#00E5FF",
        a700: "#00B8D4",
    },
    teal: {
        500: "#009688",
        50: "#E0F2F1",
        100: "#B2DFDB",
        200: "#80CBC4",
        300: "#4DB6AC",
        400: "#26A69A",
        600: "#00897B",
        700: "#00796B",
        800: "#00695C",
        900: "#004D40",
        a100: "#A7FFEB",
        a200: "#64FFDA",
        a400: "#1DE9B6",
        a700: "#00BFA5",
    },
    green: {
        500: "#4CAF50",
        50: "#E8F5E9",
        100: "#C8E6C9",
        200: "#A5D6A7",
        300: "#81C784",
        400: "#66BB6A",
        600: "#43A047",
        700: "#388E3C",
        800: "#2E7D32",
        900: "#1B5E20",
        a100: "#B9F6CA",
        a200: "#69F0AE",
        a400: "#00E676",
        a700: "#00C853",
    },
    lightGreen: {
        500: "#8BC34A",
        50: "#F1F8E9",
        100: "#DCEDC8",
        200: "#C5E1A5",
        300: "#AED581",
        400: "#9CCC65",
        600: "#7CB342",
        700: "#689F38",
        800: "#558B2F",
        900: "#33691E",
        a100: "#CCFF90",
        a200: "#B2FF59",
        a400: "#76FF03",
        a700: "#64DD17",
    },
    lime: {
        500: "#CDDC39",
        50: "#F9FBE7",
        100: "#F0F4C3",
        200: "#E6EE9C",
        300: "#DCE775",
        400: "#D4E157",
        600: "#C0CA33",
        700: "#AFB42B",
        800: "#9E9D24",
        900: "#827717",
        a100: "#F4FF81",
        a200: "#EEFF41",
        a400: "#C6FF00",
        a700: "#AEEA00",
    },
    yellow: {
        500: "#FFEB3B",
        50: "#FFFDE7",
        100: "#FFF9C4",
        200: "#FFF59D",
        300: "#FFF176",
        400: "#FFEE58",
        600: "#FDD835",
        700: "#FBC02D",
        800: "#F9A825",
        900: "#F57F17",
        a100: "#FFFF8D",
        a200: "#FFFF00",
        a400: "#FFEA00",
        a700: "#FFD600",
    },
    amber: {
        500: "#FFC107",
        50: "#FFF8E1",
        100: "#FFECB3",
        200: "#FFE082",
        300: "#FFD54F",
        400: "#FFCA28",
        600: "#FFB300",
        700: "#FFA000",
        800: "#FF8F00",
        900: "#FF6F00",
        a100: "#FFE57F",
        a200: "#FFD740",
        a400: "#FFC400",
        a700: "#FFAB00",
    },
    orange: {
        500: "#FF9800",
        50: "#FFF3E0",
        100: "#FFE0B2",
        200: "#FFCC80",
        300: "#FFB74D",
        400: "#FFA726",
        600: "#FB8C00",
        700: "#F57C00",
        800: "#EF6C00",
        900: "#E65100",
        a100: "#FFD180",
        a200: "#FFAB40",
        a400: "#FF9100",
        a700: "#FF6D00",
    },
    deepOrange: {
        500: "#FF5722",
        50: "#FBE9E7",
        100: "#FFCCBC",
        200: "#FFAB91",
        300: "#FF8A65",
        400: "#FF7043",
        600: "#F4511E",
        700: "#E64A19",
        800: "#D84315",
        900: "#BF360C",
        a100: "#FF9E80",
        a200: "#FF6E40",
        a400: "#FF3D00",
        a700: "#DD2C00",
    },
    brown: {
        500: "#795548",
        50: "#EFEBE9",
        100: "#D7CCC8",
        200: "#BCAAA4",
        300: "#A1887F",
        400: "#8D6E63",
        600: "#6D4C41",
        700: "#5D4037",
        800: "#4E342E",
        900: "#3E2723",
    },
    grey: {
        500: "#9E9E9E",
        50: "#FAFAFA",
        100: "#F5F5F5",
        200: "#EEEEEE",
        300: "#E0E0E0",
        400: "#BDBDBD",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
    },
    blueGrey: {
        500: "#607D8B",
        50: "#ECEFF1",
        100: "#CFD8DC",
        200: "#B0BEC5",
        300: "#90A4AE",
        400: "#78909C",
        600: "#546E7A",
        700: "#455A64",
        800: "#37474F",
        900: "#263238",
    },
    black: {
        500: "#000000",
        50: "#F2F2F2",
        100: "#E6E6E6",
        200: "#CCCCCC",
        300: "#B3B3B3",
        400: "#999999",
        600: "#666666",
        700: "#4D4D4D",
        800: "#333333",
        900: "#1A1A1A",
    },
    white: {
        500: "#FFFFFF",
        50: "#F2F2F2",
        100: "#E6E6E6",
        200: "#CCCCCC",
        300: "#B3B3B3",
        400: "#999999",
        600: "#666666",
        700: "#4D4D4D",
        800: "#333333",
        900: "#1A1A1A",
    },


};

export default colors;