import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  TouchableNativeFeedback,
  Alert,
} from 'react-native';
import colors from '../constants/colors';
import {List} from 'react-native-paper';
import {ScaledSheet, scale} from 'react-native-size-matters';
import {TextInput} from 'react-native-paper';
// import {wasteCategory} from '../constants/MockData';
import {Chip} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {categoryTypes, wasteCategory} from '../constants/mockData';
import SpacingY from './spacingy';
import CustomBtn from './customBtn';

interface props {
  navigation: NavigationProp<ParamListBase>;
  selected: categoryTypes[];
  addSelected: (item: categoryTypes) => void;
  onChange:(item:categoryTypes[])=>void
}

const WasteSelector: React.FC<props> = ({
  navigation,
  addSelected,
  onChange,
  selected,
}) => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  function isChecked(id: number): boolean {
    return selected.some(item => item.id == id);
  }

  function removeItem(item: categoryTypes) {
    addSelected(item);
  }
  return (
    <View style={styles.container}>
      <SpacingY height={24} />
      <View style={[styles.wrapper, {marginBottom: 3}]}>
        <View>
          <Text style={styles.subtitle}>
            Select each waste you’ll like for Pick-up from the waste category.
          </Text>
        </View>
        <View style={{height: 32}}></View>
        <View style={{height: 50}}>
          <TextInput
            label="Search for categories"
            underlineColor="transparent"
            style={{
              backgroundColor: colors.brand[50],
              borderColor: colors.success[100],
              borderWidth: 1,
              borderRadius: scale(6),
              height: scale(46),
            }}
            left={
              <TextInput.Icon
                icon={() => (
                  <AntDesign
                    name="search1"
                    color={colors.brand[150]}
                    size={20}
                  />
                )}
              />
            }
          />
        </View>
      </View>
      <View
        style={[
          styles.wrapper,
          {
            height: scale(60),

            flexDirection: 'row',

            alignItems: 'center',
          },
        ]}>
        <ScrollView style={{paddingRight:30}} horizontal>
          {selected?.map(item => (
            <Chip
              onClose={() => {
                removeItem(item);
              }}
              closeIcon={() => (
                <AntDesign
                  name="closecircle"
                  color={colors.neutral[150]}
                  size={20}
                />
              )}
              style={{
                height: 30,
                backgroundColor: colors.neutral[250],
                marginHorizontal: 3,
              }}
              onPress={() => console.log('Pressed')}>
              {item.name}
            </Chip>
          ))}
        </ScrollView>
      </View>
      <View style={{flex: 1, marginBottom: 20}}>
        <ScrollView>
          <View style={styles.wrapper}>
            <List.Section title="">
              {wasteCategory.map((item, index) => (
                <List.Accordion
                  titleStyle={{
                    fontSize: scale(15),
                    fontFamily: 'Raleway',
                    fontWeight: '700',
                  }}
                  style={{
                    backgroundColor: colors.brand[50],
                    borderColor: colors.neutral[100],
                    borderTopWidth: index == 0 ? 0 : 1,
                    height: scale(56),
                  }}
                  key={index}
                  title={item.category}>
                  {item.types.map((type: categoryTypes, index) => (
                    <Pressable
                      key={type.id}
                      onPress={() => {
                        addSelected(type);
                      }}>
                      <List.Item
                        titleStyle={{
                          fontSize: scale(15),
                          fontFamily: 'Raleway',
                          fontWeight: '500',
                        }}
                        title={type.name}
                        right={() =>
                          isChecked(type.id) ? (
                            <AntDesign
                              name="check"
                              color={colors.brand[150]}
                              size={20}
                              style={{marginRight: 70}}
                            />
                          ) : null
                        }
                      />
                    </Pressable>
                  ))}
                </List.Accordion>
              ))}

              {/* <List.Accordion
              title="Controlled Accordion"
              left={props => <List.Icon {...props} icon="folder" />}
              expanded={expanded}
              onPress={handlePress}>
              <List.Item title="First item" />
              <List.Item title="Second item" />
            </List.Accordion> */}
            </List.Section>
          </View>
        </ScrollView>
      </View>
      <View
        style={[
          styles.wrapper,
          {height: scale(50), marginTop: 'auto', marginBottom: scale(44)},
        ]}>
        <CustomBtn onPress={()=>onChange(selected)} disabled={selected.length < 1} title="Continue" />
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.primary[100],
  },
  wrapper: {
    paddingHorizontal: '23@msr',
  },
  spacingX: {
    height: '10@vs',
  },
  spacingTop: {
    height: '24@vs',
  },
  subtitle: {
    fontWeight: '400',
    fontFamily: 'Roboto',
    color: colors.neutral[50],
    fontSize: '14@s',
    fontStyle: 'normal',
  },
  spacingTop1: {
    height: '24@vs',
  },
});

export default WasteSelector;
