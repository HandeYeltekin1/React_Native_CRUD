import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import IndexScreen from "./src/screen/IndexScreen";
import { Provider as BlogProvider } from "./src/context/BlogContext";
import ShowScreen from "./src/screen/ShowScreen";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
);
const App = createAppContainer(navigator);
export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
