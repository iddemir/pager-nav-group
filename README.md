# pager-nav-group

> Pager Navigate Buttons Components

![screenshot](https://raw.githubusercontent.com/iddemir/pager-nav-group/master/res/example.PNG)


## Props

|Pic.ID| Prop | Description | Type | Required | Default |
| - | - | - | - | - | - |
|1| `totalPage` | Total page count | `number` | `required` |
|2| `current` | Current page number | `number` | `required` |
|3| `expansion` | Left and right expansion number from current number | `number` |  | 2 |
|3| `showRestLabels` | Show rest labels (...) | `bool` |  | `true` |
|4| `restLabel` | Rest button label | `*` |  | ... |
|5| `showPrevNextButtons` | Show Prev and Next Buttons | `bool` |  | `true` |
|6| `prevLabel` | Previous button label | `*` |  | &lt; |
|7| `nextLabel` | Next button label | `*` |  | &gt; |
|8| `showFirstButton` | Show "Go first" button | `bool` |  | `true` |
|9| `firstButtonLabel` | "Go first" button label | `*` |  | First |
|10| `showLastButton` | Show "Go last" button | `bool` |  | `true` |
|11| `lastButtonLabel` | "Go last" button label | `*` |  | Last |
|12| `onChange` | Gives new page number | `function` |  |  |
