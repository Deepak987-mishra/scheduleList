import React,{useEffect, useState} from "react";
import { SafeAreaView, Text, StyleSheet, TouchableOpacity,View, FlatList, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch,useSelector,shallowEqual } from "react-redux";
import { types } from "../store/ActionTypes";
import { colors, hpx, nf, wpx } from '../constants/constants'
import CustomDropdown from "../DropDown/CustomDropdown";

const Comp1 = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation()
    const { scheduleList,todos } = useSelector(
        state => ({
            scheduleList: state?.Global?.scheduleList,
          todos:state?.Global?.todos
         
        }),
        shallowEqual,
      );
    
      console.log('scheduleslistttt11',scheduleList)
   

    const [selectDay,setSelectDay] =useState('')
    const [selectTime,setSelectTime] =useState('')



 



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

const ondelete = (item) => {  
           dispatch({
            type:types.DELETE_SCHEDULE,
            payload:item?.id
           })
  };

const scheduleCard = (item, index) => {
    return (
      <View style={{marginTop:hpx(15)}} >
     
      <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:wpx(20)}}>
      <View style={{width:wpx(200)}}>
<Text>{item?.day}</Text>
<Text>{item?.time}</Text>

      </View>
<TouchableOpacity onPress={()=>navigation.navigate('Comp2',{item})}>
    <Text style={{fontSize:nf(20),fontWeight:'500',color:colors.blue,textDecorationLine:'underline'}}>Edit</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=>ondelete(item)}>
<Text style={{fontSize:nf(20),fontWeight:'500',color:colors.red,textDecorationLine:'underline'}}>Delete</Text>
</TouchableOpacity>

      </View>
       
      </View>
    );
  };

  const onSubmit = () => {
    let obj = {
        id: Date.now(),
        day:selectDay,
        time:selectTime,
    }

    dispatch({
        type:types.ADD_TO_SCHEDULE,
        payload:obj
        
    })
   
  }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{flexGrow:1,paddingBottom:hpx(100)}}>
            
<View style={{marginVertical:hpx(30),alignSelf:'center'}}>
<Text style={{ fontWeight: 'bold', fontSize: nf(18) }}> Shop Schedule Application</Text>
</View>
          

                <CustomDropdown 
                  title={"Select Day"}
                  data={days}
                  onSelect={item => setSelectDay(item)}
        />


                 <CustomDropdown 
                 style={{marginVertical:hpx(25)}}
                  title={"Select Time Slot "}
                  data={timeSlot}
                  onSelect={item => setSelectTime(item)}
        />
            <TouchableOpacity
            style= {{height:hpx(60),width:wpx(150),alignSelf:'center',backgroundColor:colors.lightBlue,justifyContent:'center',padding:wpx(10),marginVertical:hpx(20)}}
                onPress={() => onSubmit()}
            >
                <Text>Add your schedule</Text>
            </TouchableOpacity>

            <View style={{marginVertical:hpx(15)}}>

            <FlatList
            showsVerticalScrollIndicator={false}
            data={scheduleList}
            
            ListHeaderComponent={()=>{
                return(
                       <View style={{alignSelf:'center'}}>
                    <Text style={{fontSize:nf(20),fontWeight:'bold',color:colors.black,textDecorationLine:'underline'}}>Your Schedule Entry List</Text>
                </View>
                )
            }}
            renderItem={({ item, index }) => scheduleCard(item, index)}
            ListEmptyComponent={()=>{
                return(
                    <View style={{alignSelf:'center',marginVertical:hpx(15)}}>
                        <Text style={{fontSize:nf(16),fontWeight:'500',color:colors.black}}>You Have not added any schedule</Text>
                    </View>
                )
            }}
          />

            </View>
            </ScrollView>
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