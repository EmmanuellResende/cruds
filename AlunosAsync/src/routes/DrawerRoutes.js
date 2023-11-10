
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import StackalunosAsyncStorage from '../screens/alunosAsyncStorage/StackalunoAsyncStorage'


const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator initialRouteName='Alunos'>

            <Drawer.Screen name="Alunos" component={StackalunosAsyncStorage} />

        </Drawer.Navigator>

    )
}