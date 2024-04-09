import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome, { } from '../Welcome/Welcome';
import SignIn, { } from '../SignIn/SignIn';
import cadastroCliente from "../Cadastro/cadastroCliente";
import HomeLanchonete from "../../HomeLanchonete";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeLanchonete}
              options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="cadastroCliente"
                component={cadastroCliente}
                options={{ headerShown: false }}
            />




        </Stack.Navigator>
    )
}

