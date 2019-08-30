import {Text} from 'react-native';
import React from 'react';
import context from './context.js';

const Button = () => {
    return <context.Consumer>{({clicker}) => <Text onPress={() => clicker()}>PRESS</Text>
    }</context.Consumer>;
};

export default Button;
