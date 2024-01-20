import React from 'react';
import {Alert, Pressable, View} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import colors from '../constants/colors';
import {Text, Modal} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomHeader from './customheader';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import SpacingY from './spacingy';
import WasteSelector from './wasteselector';
import {categoryTypes} from '../constants/mockDatas';

type props = {
  navigation: NavigationProp<ParamListBase>;
  onChange: (item: categoryTypes[]) => void;
};
const CustomPicker: React.FC<props> = ({navigation, onChange}) => {
  const [modalOpen, setModalopen] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<categoryTypes[]>([]);

  function addSelected(item: categoryTypes) {
    const index = selected.findIndex(xx => xx.id == item.id);
    if (index > -1) {
      let updated = selected.filter(xx => xx.id != item.id);
      setSelected(updated);
    } else {
      setSelected([...selected, item]);
    }
  }

  return (
    <View>
      <Modal
        animationType="slide"
        // transparent={true}

        visible={modalOpen}
        onRequestClose={() => {
          setModalopen(!modalOpen);
        }}>
        <View style={{flex: 1}}>
          <CustomHeader
            ismodalHeader
            navigation={navigation}
            showNav
            showIcon={false}
            title="Select Waste Category"
            onPress={() => setModalopen(!modalOpen)}
          />

          {/* <View>
            <Text>
              Select each waste you’ll like for Pick-up from the waste category.
            </Text>
          </View> */}

          <WasteSelector
            onChange={(item: categoryTypes[]) => {
              onChange(item);
              setModalopen(false);
            }}
            selected={selected}
            addSelected={addSelected}
            navigation={navigation}
          />
        </View>
      </Modal>
      <Pressable onPress={() => setModalopen(!modalOpen)}>
        <View style={styles.container}>
          <View style={{flex: 1}}>
            <Text style={styles.title}>Category</Text>
            {selected.length > 0 ? (
              <Text style={styles.subtitle}>
                `{selected.length} Categories selected`
              </Text>
            ) : (
              <Text style={styles.subtitle}>Select your category</Text>
            )}
          </View>
          <AntDesign
            style={{marginLeft: 'auto', alignSelf: 'center'}}
            name="down"
            color={colors.brand[150]}
            size={15}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    height: '50@vs',
    borderRadius: '8@s',
    paddingHorizontal: '20@s',
    paddingTop: 9,
    borderWidth: '1@s',
    borderColor: colors.brand[100],
    flexDirection: 'row',
  },
  modalView: {},
  title: {
    fontWeight: '500',
    fontFamily: 'Raleway',
    fontSize: '11@s',
    color: colors.brand[100],
    fontStyle: 'normal',
  },
  subtitle: {
    fontWeight: '400',
    fontFamily: 'Raleway',
    color: colors.neutral[150],
    fontSize: '15@s',
  },
});
export default CustomPicker;
