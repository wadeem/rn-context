import React from 'react';
import {Text, View} from 'react-native';
import context from './context.js';
import styles from './styles.js';

const Header = () => {
    return <context.Consumer>{({message}) =>
        <View style={styles.view}>
            <Text style={styles.text}>{message}</Text>
        </View>
    }
    </context.Consumer>;
};

export default Header;
