import React,{useEffect, useMemo, useState} from "react";
import { SafeAreaView, Text, StyleSheet, TouchableOpacity,View,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch,useSelector,shallowEqual } from "react-redux";
import { types } from "../store/ActionTypes";
import { colors, hpx, icons, nf, wpx } from '../constants/constants'
import CustomDropdown from "../DropDown/CustomDropdown";

const Comp1 = ({route}) => {

    const dispatch = useDispatch();
    const navigation = useNavigation()

    const {item} =route.params
    console.log('item',item)
    const [selectDay,setSelectDay] =useState(item?.day??null)
    const [selectTime,setSelectTime] =useState(item?.time??null)

       const days = [
    { id: 1, name: 'Monday' },
    { id: 2, name: 'Tuesday' },
    { id: 3, name: 'Wednesday' },
    { id: 4, name: 'Thursday' },
    { id: 5, name: 'Friday' },
    { id: 6, name: 'Saturday' },
    { id: 7, name: 'Sunday' },
    { id: 8, name: 'All' },
];
const timeSlot = [
    { id: 1, name: '8AM - 2PM ' },
    { id: 2, name: '4PM - 9PM' },
   
];



  const onEdit = () => {
    let obj = {
        id: item?.id,
        day:selectDay,
        time:selectTime,
    }

    dispatch({
        type:types.EDIT_SCHEDULE,
        payload:obj
        
    })
    navigation.goBack()
  }

    return (
        <SafeAreaView style={styles.container}>
          
            
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',margin:hpx(20)}}>
    <TouchableOpacity onPress={()=>navigation.goBack()}>
    <Image source={icons.back} style={{height:hpx(20),width:wpx(20),resizeMode:'contain'}}/>
    </TouchableOpacity>
   
<Text style={{ fontWeight: 'bold', fontSize: nf(18),width:wpx(280) }}> Shop Schedule Application</Text>
</View>
          

                <CustomDropdown 
                  title={item?.day ?? "Select Day"}
                  data={days}
                  onSelect={item => setSelectDay(item)}
        />


                 <CustomDropdown 
                 style={{marginVertical:hpx(25)}}
                  title={item?.time ?? "Select Time Slot "}
                  data={timeSlot}
                  onSelect={item => setSelectTime(item)}
        />
            <TouchableOpacity 
            style= {{height:hpx(60),width:wpx(150),alignSelf:'center',backgroundColor:colors.lightBlue,justifyContent:'center',padding:wpx(10),marginVertical:hpx(20)}}
                onPress={() => onEdit()}
            >
                <Text>Edit your schedule</Text>
            </TouchableOpacity>

            

           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.white
       
    }
})

export default Comp1;