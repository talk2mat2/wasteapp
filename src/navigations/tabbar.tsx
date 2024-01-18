import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {View, Text, TouchableOpacity} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../constants/colors';

export default function MyTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps): React.JSX.Element {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: scale(80),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.brand[50],
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          // options.tabBarLabel !== undefined
          //   ? options.tabBarLabel
          //   :
          options.title !== undefined ? options.title : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            // navigation.navigate({name: route.name, merge: true});
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        const Icons = (color: string) => {
          return route.name == 'Home' ? (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={scale(30)}
            />
          ) : route.name == 'Schedule' ? (
            <MaterialCommunityIcons
              name="calendar-clock"
              color={color}
              size={scale(30)}
            />
          ) : route.name == 'Wallet' ? (
            <MaterialCommunityIcons
              name="wallet"
              color={color}
              size={scale(30)}
            />
          ) : route.name == 'Chatroom' ? (
            <MaterialCommunityIcons
              name="wechat"
              color={color}
              size={scale(30)}
            />
          ) : (
            <MaterialCommunityIcons
              name="account"
              color={color}
              size={scale(30)}
            />
          );
        };
        const color = isFocused ? colors.brand[100] : colors.primary[50];
        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <View style={{alignItems: 'center', paddingVertical: 6}}>
              {Icons(color)}
              {isFocused ? (
                <MaterialCommunityIcons
                  name="checkbox-blank-circle"
                  color={color}
                  size={scale(9)}
                  style={{marginTop:5}}
                />
              ) : (
                <Text style={{color, fontSize: 13, fontFamily: 'Raleway',fontWeight:"400"}}>
                  {label}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

// ...

{
  /* <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
  {...}
</Tab.Navigator> */
}
