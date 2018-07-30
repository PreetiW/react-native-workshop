/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default class Button extends Component<Props> {
    render() {
        //Log the props passed by other component
        //Here we are expecting onPress Props so that every component can handle the button clicking as per their requirement
        //console.log("Props:", this.props);
        return (
            <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.7} onPress={this.props.onPress}>
                <Text style={styles.buttonText}>Click Me!!</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#34c2af',
        borderRadius: 4
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        padding: 10
    },
});
