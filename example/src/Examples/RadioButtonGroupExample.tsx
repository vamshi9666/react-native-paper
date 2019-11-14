import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Colors,
  withTheme,
  RadioButton,
  Paragraph,
  Theme,
  List,
} from 'react-native-paper';

type Props = {
  theme: Theme;
};

type State = {
  radioValue: string;
  radioItemValue: string;
};

class RadioButtonGroupExample extends React.Component<Props, State> {
  static title = 'Radio Button Group';

  state = {
    radioValue: 'first',
    radioItemValue: 'first',
  };

  render() {
    const {
      theme: {
        colors: { background },
      },
    } = this.props;
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: background,
          },
        ]}
      >
        <List.Section title="Using RadioButton">
          <RadioButton.Group
            value={this.state.radioValue}
            onValueChange={(value: string) =>
              this.setState({ radioValue: value })
            }
          >
            <View style={styles.row}>
              <Paragraph>First</Paragraph>
              <RadioButton value="first" />
            </View>
            <View style={styles.row}>
              <Paragraph>Second</Paragraph>
              <RadioButton value="second" />
            </View>
          </RadioButton.Group>
        </List.Section>
        <List.Section title="Using RadioButton.Item">
          <RadioButton.Group
            value={this.state.radioItemValue}
            onValueChange={(value: string) =>
              this.setState({ radioItemValue: value })
            }
          >
            <RadioButton.Item label="First item" value="first" />
            <RadioButton.Item label="Second item" value="second" />
          </RadioButton.Group>
        </List.Section>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default withTheme(RadioButtonGroupExample);
