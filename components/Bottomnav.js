import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import MainScreen from "./MainScreen";
import RemindScreen from "./RemindScreen";
import HistoryScreen from "./HistoryScreen";
// const HistoryScreen = () => <Text> Albums </Text>;
const Bottomnav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "main",
      title: "Main",
      icon: "home",
    },
    {
      key: "remind",
      title: "Remind",
      icon: "alarm-bell",
    },
    {
      key: "history",
      title: "History",
      icon: "chart-bell-curve",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    main: MainScreen,
    remind: RemindScreen,
    history: HistoryScreen,
  });

  return (
    <BottomNavigation
      navigationState={{
        index,
        routes,
      }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      shifting={true}
    />
  );
};

export default Bottomnav;
