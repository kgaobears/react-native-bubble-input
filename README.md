# react-native-bubble-input
![npm](https://img.shields.io/npm/v/react-native-bubble-input)

# Installation

`npm install react-native-bubble-input`

# Usage

```jsx
<BubbleInput data = ['input1', 'input2'] />
```
Default behavior is it holds strings, it takes the text input wholesale and puts that in a bubble. If you want to do anything special, you have to use the `renderItem` and `addData` props. <b>Make sure whatever you output in addData has the same structure as the input to renderItem.</b>

```jsx
<BubbleInput data = [{ name: "John", age:35 }, { name: "Betty", age:32 }]
             renderItem = (item) => {
               return <View style={{flexDirection: 'row'}}>
                  <Text>{item.name}</Text>
                  <Text style={{fontSize: 6}}>{item.age}</Text>
                  </View>
               }
             placeholder = "Add next..."
             addData = (textInput) => {
                const [name, age] = textInput.split(':');
               return {name: name, age: age}
             }
             />
```
## Props

- **`renderItem`** _(Object)_ - custom render of bubble
- **`placeholder`** _(String)_ - TextInput placeholder before anything is typed in. Disappears once there are bubbles in the textInput
- **`addData`** _(Object)_ - Add object of any structure to render in renderItem
- **`data`** _(Array)_ - the text content of the bubbles
