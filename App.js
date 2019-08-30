import React, {Component} from 'react';
import {View, Text} from 'react-native';
import context from './src/context.js';
import Header from './src/header.js';
import styles from './src/styles.js';
import Button from './src/button.js';

export default class App extends Component {

    state = {
        message: 'default state',
        status: false,
    };

    handler = () => {
        this.setState({status: !this.state.status, message: this.state.status ? 'new' : 'default'});
    };

    render() {
        return <context.Provider value={{message: this.state.message, clicker: this.handler}}>
            <View style={styles.view}>

                <Text style={styles.text}>
                    This is a react native context boilerplate
                </Text>
                <Button/>
            </View>
            <Header/>
        </context.Provider>;
    }

}

