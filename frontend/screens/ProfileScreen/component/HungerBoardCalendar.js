import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { Text } from "@ui-kitten/components";
import styles from "../styles/HungerBoardCalendarStyle";
import Icon from 'react-native-vector-icons/Octicons';

class HorizontalFlatListItem extends Component {
    render() {
        return (
            <View
                style={styles.horizontalFlatlistItem}>
                <Text category='h4' style={styles.dayNumberText}>
                    {this.props.item.date.substring(0, this.props.item.date.indexOf('/'))}
                </Text>
                <Text category='h4' style={styles.dayNameText}>
                    {this.props.item.day}
                </Text>
                <View style={styles.iconLayout}>
                    {this.props.item.breakfastTagged && <Icon name="primitive-dot" style={styles.iconStyle} size={10} color="#32CD32" />}
                    {this.props.item.dinnerTagged && <Icon name="primitive-dot" style={styles.iconStyle} size={10} color="#FF4500" />}
                </View>
            </View>
        );
    }
}

const hungerBoardCalendarData = [
    {
        date: '10/03/2020',
        day: 'Tue',
        breakfastTagged: true,
        dinnerTagged: true
    },
    {
        date: '11/03/2020',
        day: 'Wed',
        breakfastTagged: true,
        dinnerTagged: false
    },
    {
        date: '12/03/2020',
        day: 'Thu',
        breakfastTagged: false,
        dinnerTagged: true
    },
    {
        date: '13/03/2020',
        day: 'Fri',
        breakfastTagged: true,
        dinnerTagged: true
    },
    {
        date: '14/03/2020',
        day: 'Sat',
        breakfastTagged: true,
        dinnerTagged: false
    },
    {
        date: '15/03/2020',
        day: 'Sun',
        breakfastTagged: true,
        dinnerTagged: false
    },
    {
        date: '16/03/2020',
        day: 'Mon',
        breakfastTagged: true,
        dinnerTagged: false
    },
    {
        date: '17/03/2020',
        day: 'Tue',
        breakfastTagged: true,
        dinnerTagged: true
    }
];

export default class HungerBoardCalendar extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topLayout}>
                    <View style={styles.titleLayout}>
                        <Text category='h6' style={styles.titleText}>
                            This Week
                    </Text>
                        <Text category='h6' style={styles.titleText}>
                            Mar' 20
                    </Text>
                    </View>
                    <View style={styles.viewHungerBoardLayout}>
                        <Text category='h4' style={styles.viewHungerBoardText}>
                            View Hungerboard >
                    </Text>
                    </View>
                </View>
                <View style={styles.listContainer}>
                    <FlatList style={styles.listStyle}
                        horizontal={true}
                        data={hungerBoardCalendarData}
                        renderItem={
                            ({ item, index }) => {
                                return (
                                    <HorizontalFlatListItem item={item} index={index} parentFlatList={this}>
                                    </HorizontalFlatListItem>
                                );

                            }
                        }
                        keyExtractor={(item, index) => item.date}>

                    </FlatList>
                </View>
            </View>
        );
    }
}
