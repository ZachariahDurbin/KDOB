import React, { Component } from "react";
import {
  StyleSheet,
  View,
  PanResponder,
  Animated
} from "react-native";

export default class DraggingItemTesting extends Component {  
    constructor() {
        super();
        this.state = {
            showDraggable: true,
            dropAreaValues: null,
            pan: new Animated.ValueXY(),
            opacity: new Animated.Value(1)
        };
    }

    isDropArea(gesture) {
        return gesture.moveY < 200;
    }
    componentWillMount() {    // Add a listener for the delta value change
        this._val = { x:0, y:0 }
        this.state.pan.addListener((value) => this._val = value);    // Initialize PanResponder with move handling
        this.panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (e, gesture) => true,
        onPanResponderMove: Animated.event([
            null, { dx: this.state.pan.x, dy: this.state.pan.y }
        ]),
        onPanResponderRelease: (e, gesture) => {
            if (this.isDropArea(gesture)) {
              Animated.timing(this.state.opacity, {
              toValue: 0,
              duration: 1000
            }).start(() =>
              this.setState({
                 showDraggable: false
              })
            );
          } else {
            Animated.spring(this.state.pan, {
              toValue: { x: 0, y: 0 },
              friction: 5
            }).start();
          }
        }
        });
    //this.state.pan.setValue({ x:0, y:0})
    }

  render() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform()
    }
    return (
        <Animated.View
          {...this.panResponder.panHandlers}
          style={[panStyle, styles.circle]}
        />
    );
  }
}

let CIRCLE_RADIUS = 30;
let styles = StyleSheet.create({
  circle: {
    margin: "auto",
    backgroundColor: "#550055",
    color: "#550055",
    width: CIRCLE_RADIUS * 1,
    height: CIRCLE_RADIUS * 1,
    borderRadius: CIRCLE_RADIUS,
    zIndex: 2,
    elevation: 3
  }
});