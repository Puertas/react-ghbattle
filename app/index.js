var USER_DATA = {
	name: 'Jose Puertas',
	username: 'Puertas',
	image: 'https://avatars0.githubusercontent.com/u/1136445?v=3&u=b4199d5ddf123b740a91e39ba0aed156d4f58b2a&s=400'
};

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
	render: function() {
		return <img src ={this.props.imageUrl} style={{height: 100, width: 100}} />;
	}
});

var Link = React.createClass({
	changeURL: function() {
		window.location.replace(this.props.href);
	},
	render: function() {
		return (
			<span
				style={{color: 'blue', cursor: 'pointer'}}
				onClick={this.changeURL}>
				{this.props.children}
			</span>
		);
	}
});

var ProfileLink = React.createClass({
	render: function() {
		return (
			<div>
				<Link href={'https://www.github.com/' + this.props.username}>
					{this.props.username}
				</Link>
			</div>
		);
	}
});

var ProfileName = React.createClass({
	render: function() {
		return (
			<div>{this.props.name}</div>
		);
	}
});

var Avatar = React.createClass({
	render: function() {
		return (
			<div>
				<ProfilePic imageUrl={this.props.user.image} />
				<ProfileName name={this.props.user.name} />
				<ProfileLink username={this.props.user.username} />
			</div>
		);
	}
});

ReactDOM.render(
	<Avatar user={USER_DATA} />,
	document.getElementById('app')
);
