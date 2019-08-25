import React, { Component } from 'react'
import {
    TextInput,
    StyleSheet
} from 'react-native'

class Search extends Component {
    render() {
        return(
            <TextInput
                placeholder="Buscar"
                autoCapitalize="none"
                autoCorrect={false}
                underlineColorAndroid="transparent"
            />
        )
    }
}
export default Search;