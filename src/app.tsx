import * as React from 'react';
import * as ReactDOM from 'react-dom';

type GUIProps = { greetTarget: string };
type GUIState = { time: Date };

class GUI extends React.Component<GUIProps, GUIState> {
	constructor(props: GUIProps) {
		super(props);
		// must set initial state in constructor
		this.state = {time: new Date()};
		setInterval(() => this.setState({time: new Date()}), 1000);
	}
	render() {
		return <div>
			Hello {this.props.greetTarget}!
			It is {this.state.time.toString()}.
		</div>;
	}
}

ReactDOM.render(<GUI greetTarget="World" />, document.querySelector("#root"));

