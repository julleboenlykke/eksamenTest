import {StyleSheet, Dimensions} from "react-native";


const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#E3DBDB"
    },
    subContainer: {
        flex: 0.95,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderColor: 'black',
        marginBottom: 10,
        borderRadius: 5,
        borderWidth: 1,
    },
    inputV2: {
        width: 200,
        height: 44,
        padding: 10,
        borderColor: 'black',
        marginBottom: 10,
        borderRadius: 5,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    btnAuth: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
        backgroundColor: "#4E3D42",
        borderRadius: 10,
        padding: 5,
        width: 200,
        height: 50,
        textAlign: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: '60%'
    },
    btnEntrance: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        width: '35%',
        height: '16%',
        textAlign: 'center'
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 10,
        },
    modalContent: {
        backgroundColor: '#E3DBDB',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        height: '30%',
    },
    circle: {
        height: 100,
        width: 100,
        backgroundColor: 'white',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnCalender: {
        flexDirection: 'row',
        margin: 20,
        alignSelf: 'stretch',
        marginLeft: 0,
        marginBottom: 10,

    },
    title: {
        color: "black",
        textShadowColor: "black",
        textShadowRadius: 1,
        margin: 15,
        fontSize: 30
    }}
)

export default Styles