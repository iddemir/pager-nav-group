# pager-nav-group

> Pager Navigate Buttons Components

![screenshot](https://raw.githubusercontent.com/iddemir/pager-nav-group/master/res/example.PNG)


## Props

|Pic.ID| Prop | Description | Type | Required | Default |
| - | - | - | - | - | - |
|-| `totalPage` | Total page count | `number` | `required` |
|4| `activePage` | Current page number | `number` | `required` |
|3| `neighborButtonTotal` | Left and right expansion number from current number | `number` |  | 2 |
|1| `showPrevButton` | Show Prev Buttons | `bool` |  | `true` |
|6| `showNextButton` | Show Next Buttons | `bool` |  | `true` |
|1| `prevButtonLabel` | Previous button label | `*` |  | &lt; |
|6| `nextButtonLabel` | Next button label | `*` |  | &gt; |
|2| `showGoFirstButton` | Show "Go first" button | `bool` |  | `true` |
|2| `goFirstButtonLabel` | "Go first" button label | `*` |  | First |
|5| `showGoLastButton` | Show "Go last" button | `bool` |  | `true` |
|5| `goLastButtonLabel` | "Go last" button label | `*` |  | Last |
|-| `onChange` | Gives new page number | `function` |  |  |

![screenshot](https://raw.githubusercontent.com/iddemir/pager-nav-group/master/res/bilgi.png)


## Usage
```jsx
import React, { Component } from 'react';
import './App.css';
import PagerNavGroup from './components/PagerNavGroup';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 5
    };
  }
  render() {
    return (
      <PagerNavGroup
        totalPage={20}
        activePage={this.state.activePage}
        onChange={activePage => this.setState({ activePage })}
      />
    );
  }
}

export default App;
```
