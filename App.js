import { Provider } from "react-redux";
import StackNavigator from "./StackNavigator";
import { ModalPortal } from "react-native-modals";
import store from "./app/store/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StackNavigator />
        <ModalPortal />
      </Provider>
    </>
  );
}
