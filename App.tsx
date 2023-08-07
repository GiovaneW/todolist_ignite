import { View } from 'react-native';
import { ToDoList } from './src/views/ToDoList';
import { StatusBar } from 'expo-status-bar';
import { defaultStylesheets } from './src/stylesheets';

export default function App() {
    return (
        <>
            <StatusBar style='auto' translucent networkActivityIndicatorVisible />
            <View style={defaultStylesheets.mainView}>
                <ToDoList />
            </View>
        </>
    )
}