import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome, { } from '../Welcome/Welcome';
import SignIn, { } from '../SignIn/SignIn';
import cadastroAdm from "../Cadastro/cadastroAdm";
import CadastroPage from "../Cadastro/centralCadastro";
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
                name="cadastroAdm"
                component={cadastroAdm}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="cadastroPage"
                component={CadastroPage}
                options={{ headerShown: false }}
            />



        </Stack.Navigator>
    )
}

