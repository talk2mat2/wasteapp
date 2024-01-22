import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Alert,
  Modal,
  ActivityIndicator,
  Dimensions,
  Pressable,
} from 'react-native';
import {
  Modal as PaperModal,
  Portal,
  Button,
  PaperProvider,
} from 'react-native-paper';
import colors from '../constants/colors';
import {ScaledSheet, scale} from 'react-native-size-matters';
import ScheduleCard from '../components/schedulecard';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

import TruckIcon from '../components/icons/truckIcon';
import CustomHeader from '../components/customheader';
import CustomPicker from '../components/custompicker';
import CustomInput from '../components/custominput';
import SpacingY from '../components/spacingy';
import CustomDatePicker from '../components/customDatePicker';
import CustomLocation from '../components/customlocation';
import CustomBtn from '../components/customBtn';
import {categoryTypes} from '../constants/mockDatas';
import AntDesign from 'react-native-vector-icons/AntDesign';
import GetLocation from 'react-native-get-location';
import {geocode_url} from '../constants/mockDatas';
import Confirm from '../components/confirm';
import Submiting from '../components/submiting';
import DropItemForm from '../components/dropItemForm';
import CheckBox from '@react-native-community/checkbox';
import {
  RoundedCheckbox,
  PureRoundedCheckbox,
} from 'react-native-rounded-checkbox';
import SpacingX from '../components/spacingx';
import ConfirmDrop from '../components/confirmdrop';

interface props {
  navigation: NavigationProp<ParamListBase>;
}

const DropOffForm: React.FC<props> = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<categoryTypes[]>([]);
  const [modalOpen, setModalopen] = React.useState<boolean>(false);
  const onChangeCategory = (items: categoryTypes[]) => {
    setSelected(items);
  };
  const windowHeight = Dimensions.get('window').height;
  const [quantity, setQantity] = React.useState<string>('');
  const [location, setLocation] = React.useState<string>('');
  const [ScheduleDate, setScheduleDate] = React.useState<string>('');
  const [ScheduleTime, setScheduleTime] = React.useState<string>('');
  const [loading, setLoading] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [submiting, setSubmiting] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  function conformRequest() {
    setModalopen(false);
    setTimeout(() => {
      showModal();
    }, 1000);
  }

  return (
    <View style={{flex: 1}}>
      <Portal>
        <PaperModal visible={visible} onDismiss={hideModal}>
          <Submiting isDrop={true} navigation={navigation} hideModal={hideModal} />
        </PaperModal>
      </Portal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          setModalopen(!modalOpen);
        }}>
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <Pressable style={{flex: 1}} onPress={() => setModalopen(false)}>
            <View style={{flex: 1}}></View>
          </Pressable>
          <View
            style={{
              height: windowHeight / 1.44,
              marginTop: 'auto',
              backgroundColor: colors.primary[100],
            }}>
            <ConfirmDrop
              conformRequest={conformRequest}
              quantity={'1-5kg'}
              category={selected}
              location={location}
              ScheduleDate={' Wed, Dec 07, 2021'}
            />
          </View>
        </View>
      </Modal>
      <View style={styles.container}>
        <CustomHeader
          navigation={navigation}
          showIcon={false}
          showNav={true}
          title="Schedule Drop off"
        />
        <View style={styles.wrapper}>
          <View>
            <Text style={styles.subtitle}>Schedule Drop off to:</Text>
          </View>
          <SpacingY height={9} />
          <ScrollView style={{flex: 1}}>
            <DropItemForm />
            <SpacingY height={9} />
            <CustomPicker onChange={onChangeCategory} navigation={navigation} />
            <SpacingY height={9} />
            <View>
              <Text style={styles.subtitle}>Waste Quantity</Text>
              <SpacingY height={6} />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <RoundedCheckbox
                    checkedColor={colors.neutral[50]}
                    outerStyle={{
                      backgroundColor: colors.neutral[50],
                      width: 20,
                      height: 20,
                    }}
                    text=""
                    innerStyle={{width: 13, height: 13}}
                    onPress={checked => console.log('Checked: ', checked)}
                  />
                  <SpacingX width={8} />
                  <Text style={styles.text}>1-5 bags</Text>
                </View>
                <SpacingX width={7} />
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <RoundedCheckbox
                    checkedColor={colors.neutral[50]}
                    outerStyle={{
                      backgroundColor: colors.neutral[50],
                      width: 20,
                      height: 20,
                    }}
                    text=""
                    innerStyle={{width: 13, height: 13}}
                    onPress={checked => console.log('Checked: ', checked)}
                  />
                  <SpacingX width={8} />
                  <Text style={styles.text}>1-5 bags</Text>
                </View>
                <SpacingX width={15} />
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <RoundedCheckbox
                    checkedColor={colors.neutral[50]}
                    outerStyle={{
                      backgroundColor: colors.neutral[50],
                      width: 20,
                      height: 20,
                    }}
                    text=""
                    innerStyle={{width: 13, height: 13}}
                    onPress={checked => console.log('Checked: ', checked)}
                  />
                  <SpacingX width={8} />
                  <Text style={styles.text}>1-5 bags</Text>
                </View>
              </View>
            </View>
            {/* <SpacingY height={17} /> */}

            <SpacingY height={12} />
            <CustomInput
              value={quantity}
              onChangeText={txt => {
                setQantity(txt);
              }}
              title="Waste Quantity"
              placeholder="Enter your waste quantities"
            />
            <SpacingY height={15} />
            <CustomDatePicker
              title="Drop Off Date"
              value={ScheduleDate}
              onChangeDate={(text: string) => setScheduleDate(text)}
              placeholder="Enter your preffered schedule date"
            />
            <SpacingY height={12} />

            <CustomDatePicker
              title="Drop off Time"
              userMode="time"
              value={'2:00pm'}
              onChangeDate={(text: string) => setScheduleTime(text)}
              placeholder="Enter your preffered schedule time"
            />

            <SpacingY height={34} />
            <View>
              <CustomBtn
                onPress={() => setModalopen(true)}
                disabled={
                  !location ||
                  selected?.length < 1 ||
                  !ScheduleDate ||
                  !quantity
                }
                title="Continue"
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.primary[100],
  },
  subtitle: {
    fontWeight: '500',
    fontFamily: 'Roboto',
    color: colors.neutral[50],
    fontSize: '13@s',
    fontStyle: 'normal',
  },
  wrapper: {
    paddingHorizontal: '23@msr',
    flex: 1,
  },
  text: {
    fontWeight: '500',
    fontFamily: 'Raleway',
    color: colors.neutral[50],
    fontSize: '14@s',
  },
  spacingX: {
    height: '10@vs',
  },
  spacingTop: {
    height: '18@vs',
  },
});

export default DropOffForm;
