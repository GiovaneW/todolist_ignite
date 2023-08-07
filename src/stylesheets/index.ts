import { StyleSheet } from "react-native"

const defaultCollors = {
    gray600: '#1A1A1A',
}

const defaultStylesheets = StyleSheet.create({
    mainView: {
        width: '100%',
        height: '100%',
        backgroundColor: defaultCollors.gray600
    }
})

export { defaultStylesheets, defaultCollors }; 