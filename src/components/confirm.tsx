import {View, Text, Pressable, ScrollView} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../constants/colors';
import CustomBtn from './customBtn';
import SpacingY from './spacingy';
import {Chip} from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import SpacingX from './spacingx';
import {categoryTypes} from '../constants/mockDatas';

interface props {
  category: Array<categoryTypes> | [];
  quantity: string;
  location: string;
  ScheduleDate: string;
  conformRequest:()=>void
}
const Confirm: React.FC<props> = ({
  category,
  quantity,
  location,
  ScheduleDate,
  conformRequest
}) => {
  const [toggleCheckBox, setToggleCheckBox] = React.useState<boolean>(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            fontSize: scale(16),
            fontWeight: '800',
            fontFamily: 'Raleway',
          }}>
          Schedule Pickup
        </Text>
        <Pressable style={{height: 30, width: 30}}>
          <AntDesign
            style={{marginLeft: 'auto', alignSelf: 'center'}}
            name="close"
            color={colors.brand[150]}
            size={15}
          />
        </Pressable>
      </View>
      <SpacingY height={21} />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.title}>Category:</Text>
            <SpacingX width={5} />
            <View style={styles.chipSection}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                horizontal
                style={{flex: 1}}>
                {category?.map(item => (
                  <View key={item.id} style={styles.chip}>
                    <Text
                      style={{
                        fontSize: 10,
                        color: colors.brand[50],
                        fontFamily: 'Raleway',
                      }}>
                      {item.name}
                    </Text>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>

          <View>
            <Text style={styles.title}>
              Waste Quantity: <SpacingX width={5} />{' '}
              <Text style={styles.subtitle}>{quantity} bags</Text>
            </Text>
          </View>
          <SpacingY height={21} />
          <View>
            <Text style={styles.title}>
              Scheduled Date: <SpacingX width={5} />
              <Text style={styles.subtitle}> {ScheduleDate}</Text>
            </Text>
          </View>
          <SpacingY height={21} />
          <View>
            <Text style={styles.title}>
              Pickup Location: <SpacingX width={5} />
              <Text style={styles.subtitle}>{location}</Text>
            </Text>
          </View>
          <SpacingY height={21} />
          <View>
            <Text style={styles.title}>
              Reminder: <SpacingX width={5} />
              <Text style={styles.subtitle}> Wed, Dec, 14,2021</Text>
            </Text>
          </View>
          <SpacingY height={21} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <SpacingX width={5} />
            <Text style={styles.title}>Call me on arrival</Text>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          height: scale(50),
          marginTop: 'auto',
          marginBottom: scale(52),
          padding: 3,
        }}>
        <CustomBtn onPress={conformRequest} title="Confirm Request" />
      </View>
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {
    marginTop: '44@vs',
    paddingHorizontal: '16@s',
    elevation: 3,
    flex: 1,
  },
  chip: {
    paddingHorizontal: 9.7,

    backgroundColor: colors.neutral[50],
    borderRadius: 20,
    margin: 2,
    height: 19,
  },
  content: {
    flex: 1,
    paddingHorizontal: '27@s',
    paddingTop: '7@s',
    borderRadius: '13@s',
    backgroundColor: colors.brand[50],
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '700',
    fontFamily: 'Raleway',
    fontSize: '14@s',
    // color: colors.brand[100],
    fontStyle: 'normal',
  },
  subtitle: {
    fontWeight: '500',
    fontFamily: 'Raleway',
    // color: colors.neutral[150],
    fontSize: '14@s',
  },
  chipSection: {
    height: '40@s',
    flex: 1,
  },
});
export default Confirm;
