import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale , {verticalScale} from '../../../res/Scale';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: "white",
    },

    outerContainer: { 
        flex: 1, 
    },

    tabContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: scale(2),
        paddingHorizontal: scale(16),
        paddingVertical: verticalScale(17),
    },

    labelStyle: {
        fontSize: scale(12),
        lineHeight: scale(16),
        color: "red",
        marginTop: verticalScale(4),
    },

    homeIcons: {
        width: scale(28.8),
        height: scale(24),
    },

    exploreIcons: {
        width: scale(21.6),
        height: scale(21.6),
    },

    searchIcons: {
        width: scale(22.4),
        height: scale(22.5),
    },

    wishListIcons: {
        width: scale(23.9),
        height: scale(22),
    },

    profileIcons: {
        width: scale(24.1),
        height: scale(24.1),
    },
});
