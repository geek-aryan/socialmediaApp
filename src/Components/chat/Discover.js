import { SafeAreaView, StyleSheet, Text, View, FlatList, TouchableOpacity, Image, TouchableHighlight } from 'react-native'
import React,{useState} from 'react'

import  {SwipeListView}  from 'react-native-swipe-list-view';
import DiscoverIneer from './DiscoverIneer';


const Discover = ({ navigation }) => {
    const intrestText = [
        {
            id:1,
            text: "All"
        },
        {
            id:2,
            text: "Personal"
        },
        {
            id:3,
            text: "Design"
        },
        {
            id:4,
            text: "Work"
        },
        {
            id:5,
            text: "Football"
        },
        {
            id:6,
            text: "Bascketball"
        },
    ]


    return (
        <SafeAreaView style={styles.Discover_container}>
                <View style={styles.active_link}>
                    <View style={styles.active_link_inner}>
                        <TouchableOpacity onPress={() => navigation.navigate("Chathome")}
                        style={{ borderBottomColor: "#227ee3", borderBottomWidth: 3, borderRadius: 2 ,}}>
                            <Text style={{ fontSize: 16, fontWeight: "500", padding: 8 }}>Discover</Text>

                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => navigation.navigate("Chat")}>
                            <Text style={{ fontSize: 16, fontWeight: "500", padding: 8 }}>Chat</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Circle")}
                          >
                            <Text style={{ fontSize: 16, fontWeight: "500", padding: 8 }}>Circle</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            <View style={styles.scroll_container} >
                
                <View style={styles.vertical_container}>
                    <FlatList
                        style={styles.flatlist_container}
                        horizontal
                        data={intrestText}
                        renderItem={({item}) => {
                            return (
                                <TouchableOpacity style={styles.list_content} 
                                onPress={(itemid)=>{
                                 if(intrestText.filter(item => item.id === itemid)){
                                    console.log(item.id)
                                 }
                                }}
                                >
                                    <Text style={styles.intrest_text}>{item.text} </Text>
                                </TouchableOpacity>
                            )
                        }}
                    />

                </View>

            </View>

          <DiscoverIneer navigation={navigation}/>






        </SafeAreaView>



    )
}

export default Discover

const styles = StyleSheet.create({
    Discover_container: {
        // marginTop: 10,
        flex: 1,
        // position: "relative",
        backgroundColor: "white",
        zIndex:-1,
    },

    scroll_container: {
        // backgroundColor: "green",
        position: "relative",
        marginTop: 20,
        // flex:1,
        backgroundColor: "white"

    },


    vertical_container: {
        // flex:1,
        marginLeft: 10,
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,

    },
    flatlist_container: {
        backgroundColor: "white",
        marginLeft: 20,
        borderRadius: 30,
        // flex:1,
        // borderTopLeftRadius: 20,
        // borderBottomLeftRadius: 20,
        // position:"relative"

    },

    list_content: {
        // backgroundColor:"green",
        backgroundColor: "white",
        margin: 10,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 10,
        paddingLeft: 10,
        // padding:5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },

    intrest_text: {
        // marginLeft:10,
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    backTextWhite: {
        color: '#FFF',
    },

    active_link_inner: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 40,
        // width:"100%"
        // backgroundColor:"green"
    },
    active_link:{
        // backgroundColor:"red",
        width:"96%",
        marginHorizontal:6
    }
})